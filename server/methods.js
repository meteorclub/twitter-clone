Meteor.methods({
  follow: function(otherUserId){
    Meteor.users.update( Meteor.user()._id, {
      $push: {'profile.following': otherUserId}
    });
  }
})
