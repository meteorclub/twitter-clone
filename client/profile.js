Template.profile.helpers({
  joined: function() {
    return moment(this.createdAt).format("MMMM Do, YYYY")
  },
  isFollowed: function(){
    var currentUser = Meteor.user();
    var profileUser = this;
    return _.contains(currentUser.following, profileUser._id);
  }
});


Template.profile.events({
  "click .follow-me": function(e){
    console.log("follow clicked");
    var currentUser = Meteor.user();
    var profileUser = this;
    Meteor.call("follow", profileUser._id);
  }
});
