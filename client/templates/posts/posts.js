Template.post.rendered = function () {

}

Template.post.events({
  'submit .new-post': function () {
    event.preventDefault();
    var post = {
      url: event.target.youtube.value,
      title: event.target.title.value
    };

    console.log(post);
    console.log(Meteor.users.find().fetch());

  }
});
