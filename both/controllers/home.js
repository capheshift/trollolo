HomeController = AppController.extend({
  data: {
    posts: Posts.find({}, {sort: {'postedDate': -1}})
  },
  waitOn: function() {
    return this.subscribe('comments') && this.subscribe('posts');
  },
  onAfterAction: function () {
    Meta.setTitle('Dashboard');
  }
});
