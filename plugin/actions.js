(function (Action) {
    'use strict';

    const async = require('async');

    const settings = require('./settings'),
          database = require('./database');

    const debug = function (id, delta, total) {
        console.log('User %d changed amount of points on %d, total: %d', id, delta, total);
    };

    const groupChange = function (users, done) {
        async.each(users, function (user, next) {
            incrementPoints(user.uid, user.points, next);
        }, done);
    };

    const incrementPoints = function (uid, increment, done) {
        done = done || (() => undefined);
        database.incrementBy(uid, increment, function (error, points) {
            if (error) {
                return done(error);
            }
            //TODO Today Statistics
            // debug(uid, increment, points);
            done(null);
        });
    };

    /**
     * Adding post
     * @param postData {object} Post with signature - { pid:3, uid:1, tid:'1', content:'text', timestamp:1429974406764, reputation:0, votes: 0, edited: 0, deleted: 0, cid:2 }
     */
    Action.postSave = function (postData) {
        var value = settings.get().postWeight;
        incrementPoints(postData.post.uid, value);
    };

    /**
     * Removing of previous up-vote for the post
     * Reputation actions could be found in favourites.js, line 206
     * @param metadata {object} aggregated data -  { pid:'2', uid:1, owner:2, current:'unvote'}
     */
    Action.postUnvote = function (metadata) {
        //Handle unvotes for both upvotes and downvotes
        if (metadata.current === 'upvote') {
            groupChange([
                {uid: metadata.owner, points: -settings.get().reputationWeight},
                {uid: metadata.uid, points: -settings.get().reputationActionWeight}
            ], function (error) {
                if (error) {
                    console.error(error);
                }
            })
        }
    };

    Action.postUpvote = function (metadata) {
        if (metadata.current === 'unvote' || metadata.current === 'downvote') {
            groupChange([
                {uid: metadata.owner, points: settings.get().reputationWeight},
                {uid: metadata.uid, points: settings.get().reputationActionWeight}
            ], function (error) {
                if (error) {
                    console.error(error);
                }
            })
        }
    };

    /**
     * Downvote action
     * @param metadata {object} aggregated data -  { pid:'2', uid:1, owner:2, current:'unvote'}
     */
    Action.postDownvote = function (metadata) {
        if (metadata.current === 'upvote') {
            groupChange([
                {uid: metadata.owner, points: -settings.get().reputationWeight},
                {uid: metadata.uid, points: -settings.get().reputationActionWeight}
            ], function (error) {
                if (error) {
                    console.error(error);
                }
            })
        }
    };

    /**
     *
     * @param topicData {object} Signature - { tid:2, uid:1, cid:'1', mainPid:0, title: 'text', slug:'text', timestamp: 429976183015, lastposttime:0, postcount:0, viewcount:0, locked:0, deleted:0, pinned:0 }
     */
    Action.topicSave = function (topicData) {
        let value = settings.get().topicWeight;
        incrementPoints(topicData.topic.uid, value);
    };

})(module.exports);
