function getRelationship(followerId, followingId) {
    return Relationships.findOne({
        followerId: followerId,
        followingId: followingId
    });
}

function isFollowing(followerId, followingId) {
    return getRelationship(followerId, followingId) ? true : false;
}

Template.profile.helpers({
  joined: function() {
    return moment(this.createdAt).format("MMMM Do, YYYY")
  },
  isFollowing: function() {
    return isFollowing(Meteor.userId(), this._id);
  }
});

Template.profile.events({
  'click li.follow-me button': function(event, template) {
      if (isFollowing(Meteor.userId(), template.data._id)) {
        relationship = getRelationship(Meteor.userId(), template.data._id);
        Relationships.remove(relationship._id);
      } else {
        Relationships.insert({
            followerId: Meteor.userId(),
            followingId: template.data._id
        });
      }
  }
});
