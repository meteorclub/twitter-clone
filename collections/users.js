Users = Meteor.users

Users.helpers({
  tweets: function(timestamp, newer) {
    if (newer)
      return Tweets.find({userId: this._id, tweetedAt: {$gt: timestamp}}, {sort: {tweetedAt: -1}});
    else
      return Tweets.find({userId: this._id, tweetedAt: {$lt: timestamp}}, {sort: {tweetedAt: -1}});
  }
})

Meteor.methods({
  follow: function(followId) {
    Users.update(this.userId, {$push: {"profile.followingIds": followId}});
  },
  unfollow: function(unfollowId) {
    Users.update(this.userId, {$pull: {"profile.followingIds": unfollowId}});
  }
});
