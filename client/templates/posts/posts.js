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

    var errors = validatePost(post);
    // if (Session.set('anything', {})) {
    //   console.log('set okie');
    // } else {
    //   console.log('set not okie');
    // }

    // if (!errors.title) {
    //   errors.title = "Please write some content";
    //   return Session.set('commentSubmitErrors', errors);
    // }

    if (!errors) {
      console.log('xyz');
      return false;
    }

    Meteor.call('postInsert', post, function (error, result) {
      if (error) {
        console.log('throwError');
      }

      if (result.postExists) {
        console.log('postExists');
      }
      console.log(result);
      Router.go('home');
    });
  }
});
