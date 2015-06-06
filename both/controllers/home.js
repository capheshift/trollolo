HomeController = AppController.extend({
  data: {
    // comments: Comments.find({}, {sort: {'createdAt': -1}, limit: 3}),
    posts: Posts.find({})
  },
  waitOn: function() {
    return this.subscribe('comments') && this.subscribe('posts');
  },
  onAfterAction: function () {
    Meta.setTitle('Dashboard');
  }
});
