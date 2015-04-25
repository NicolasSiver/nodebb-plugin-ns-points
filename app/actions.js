(function (Action) {
    'use strict';

    Action.postSave = function (postData) {

    };

    /**
     * Removing of previous up-vote for the post
     * Reputation actions could be found in favourites.js, line 206
     * @param metadata {object} aggregated data - {pid: pid, uid: uid, owner: results.owner, current: current}
     */
    Action.postUnvote = function (metadata) {

    };

    Action.postUpvote = function (metadata) {

    };

    Action.topicSave = function (topicData) {

    };

})(module.exports);