PostsController = AppController.extend({
  data: {
    posts: Posts.find({})
  },
  waitOn: function() {
    return this.subscribe('posts');
  },
  onAfterAction: function () {
    Meta.setTitle('Đăng Video');
  }
});
