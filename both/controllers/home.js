HomeController = AppController.extend({
  data: {
    comments: Comments.find({}, {sort: {'createdAt': -1}, limit: 3})
  },
  waitOn: function() {
    return this.subscribe('comments');
  },
  onAfterAction: function () {
    Meta.setTitle('Dashboard');
  }
});
