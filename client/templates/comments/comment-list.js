Template.commentList.rendered = function() {

};

Template.commentList.helpers({
  // comments: function() {
  //   return Comments.find({});
  // }
});

Template.commentList.events({
  'submit form': function(e, template) {
    e.preventDefault();

    var content = $(e.target).find('[name=comment]');
    var model = {
      postId: '',
      content: content.val()
    };

    console.log('model', model);

    Meteor.call('Comments.Insert', model, function(error, commentId) {
      if (error){
        throwError(error.reason);
      } else {
        content.val('');
      }
    });
  }
});
