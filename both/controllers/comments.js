CommentListController = AppController.extend({
  data: {
    comments: Comments.find({})
    // comments: [{comment: 'xxx'}]
  },
  waitOn: function() {
    return this.subscribe('comments');
  },
  onAfterAction: function () {
  }
});

CommentListController.events({
});
