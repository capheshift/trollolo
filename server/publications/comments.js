Meteor.publishComposite('comments', function() {
  return {
    find: function() {
      return Comments.find({});
    }
  }
});
