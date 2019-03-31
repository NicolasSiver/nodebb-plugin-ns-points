(function (Filter) {
    'use strict';

    var async      = require('async'),
        database   = require('./database'),
        controller = require('./controller');

    /**
     * Hook to render user profile.
     * 'userData' will be used as payload in hook handler.
     * @param params {object} Payload :{userData: userData, uid: callerUID}
     * @param callback {function}
     */
    Filter.account = function (params, callback) {
        database.getPoints(params.userData.uid, function (error, points) {
            if (error) {
                return callback(error);
            }
            params.userData.points = points || 0;
            callback(null, params);
        });
    };

    Filter.menuAdmin = function (header, callback) {
        header.plugins.push({
            route: '/plugins/points',
            icon : 'fa-gamepad',
            name : 'Points'
        });
        callback(null, header);
    };

    Filter.navigation = function (items, callback) {
        items.push({
            route    : "/points",
            title    : "Points",
            enabled  : true,
            iconClass: "fa-gamepad",
            textClass: "visible-xs-inline",
            text     : "Points"
        });
        callback(null, items);
    };

    /**
     * Hook to render single posted post
     * @param postData {object} Fields: {pid, uid, tid, content, timestamp, reputation, votes, editor, edited, deleted, cid}
     * @param callback {function}
     */
    Filter.postGet = function (postData, callback) {
        database.getPoints(postData.uid, function (error, points) {
            if (error) {
                return callback(error);
            }
            postData.points = points || 0;
            callback(null, postData);
        });
    };

    /**
     * Hook to render topic thread
     * @param payload {object} Fields: {posts: posts, uid: uid}
     * @param callback {function}
     */
    Filter.postGetPosts = function (payload, callback) {
        async.map(payload.posts, function (post, next) {
            database.getPoints(post.uid, function (error, points) {
                if (error) {
                    return next(error);
                }
                post.points = points || 0;
                next(null, post);
            });
        }, function (error, results) {
            if (error) {
                return callback(error);
            }
            payload.posts = results;
            callback(null, payload);
        });
    };

    /**
     * Hook to inject points settings and values
     * @param topicData {object} Fields: {topic: topicData, uid: uid}
     * @param callback {function}
     */
    Filter.topicGet = function (topicData, callback) {
        controller.injectSettings(topicData.topic, function (error, topicWithSettings) {
            if (error) {
                return callback(error);
            }
            topicData.topic = topicWithSettings;
            callback(null, topicData);
        });
    };

})(module.exports);