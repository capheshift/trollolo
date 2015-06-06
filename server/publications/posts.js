Meteor.publishComposite('posts', function () {
  return {
    find: function () {
      return Posts.find({});
    }
  }
});
