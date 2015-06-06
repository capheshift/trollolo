DashboardController = AppController.extend({
  data: {
    // items: Items.find({})
    items: Comments.find({})
  },
  waitOn: function() {
    // return this.subscribe('items');
    return this.subscribe('comments');
  },
  onAfterAction: function () {
    Meta.setTitle('Dashboard');
  }
});

DashboardController.events({
  'click [data-action=doSomething]': function (event, template) {
    event.preventDefault();
  }
});
