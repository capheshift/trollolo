DashboardController = AppController.extend({
  data: {
    items: Items.find({})
  },
  waitOn: function() {
    return this.subscribe('items');
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
