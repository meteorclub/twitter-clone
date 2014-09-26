Relationships = new Mongo.Collection('relationships');

Relationships.allow({
  insert: function(userId, doc) {
    if (userId) {
      return true;
    }
  },

  update: function(userId, doc, fields, modifier) {
    return false;
  },

  remove: function(userId, doc) {
    return doc.followerId === userId;
  }
});
