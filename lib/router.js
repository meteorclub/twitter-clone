Router.configure({
	layoutTemplate: 'base',
	loadingTemplate: 'loading'
});

Router.map(function() {
  this.route('tweet_stream', {
    path: '/',
    waitOn: function() {
      return Meteor.subscribe('tweets');
    },
    data: function() {
      return {
        tweets: Tweets.find()
      }
    }
  });
  this.route('notifications', {path: '/notifications'});
  this.route('profile', {
    path: '/:username',
    waitOn: function() {
      return [
        Meteor.subscribe('profile', this.params.username),
        Meteor.subscribe('profileTweets', this.params.username),
        Meteor.subscribe('relationships')
      ] 
    },
    data: function() {
      return Users.findOne({username: this.params.username})
    }
  });

  // this.route('villagerPage', {
  //   path: '/villagers/:_id',
  //   data: function() { return Villagers.findOne(this.params._id); }
  // });
});


// turn on the loading template before the route
Router.onBeforeAction('loading');
