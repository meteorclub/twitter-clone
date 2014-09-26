Template.profile.helpers({
  joined: function() {
    return moment(this.createdAt).format("MMMM Do, YYYY")
  },
  isFollowed: function(){
    var currentUser = Meteor.user();
    var profileUser = this;
    return _.contains(currentUser.profile.following, profileUser._id);
  }
});


Template.profile.events({
  "click .btn-follow": function(e){
    console.log("follow clicked");
    var profileUser = this;
    Meteor.call("follow", profileUser._id);
  },
  "click .btn-unfollow": function(e){
    console.log("follow clicked");
    var profileUser = this;
    Meteor.call("unfollow", profileUser._id);
  }

});
