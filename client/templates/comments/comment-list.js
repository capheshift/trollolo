Template.commentList.rendered = function() {

};

Template.commentList.helpers({
});

Template.commentList.events({
  'submit form': function(e, template) {
    e.preventDefault();

    var content = $(e.target).find('[name=comment]');
    var commentModel = {
      postId: this.model.post._id,
      content: content.val()
    };

    Meteor.call('Comments.Insert', commentModel, function(error, commentId) {
      if (error){
        throwError(error.reason);
      } else {
        content.val('');
      }
    });
  }
});
