Template.posts.rendered = function () {

};

Template.posts.created = function () {
  Session.set('postSubmitErrors', {});
};

Template.posts.helpers({
  errorMessage: function (field) {
    return Session.get('postSubmitErrors')[field];
  },
  errorClass: function () {
    return !!Session.get('postSubmitErrors')[field] ? 'has-error' : '';
  }
});


Template.posts.events({
  'submit .new-post': function (event) {
    event.preventDefault();

    var post = {
      url: event.target.youtube.value,
      title: event.target.title.value,
    };

    Meteor.call('postInsert', post, function (error, result) {
      if (error) {
        throw new (error.reason);
      }

      if (result.postExists) {
        throw new ('This link has already been posted');
      }

      console.log('Result: ' + result);
      Router.go('home');
    });
  }
});
