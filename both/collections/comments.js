Comments = new Mongo.Collection('comments');

Comments.helpers({

});

Comments.before.insert(function (userId, doc) {
  doc.createdAt = moment().toDate();
});

Meteor.methods({
  commentInsert: function(commentModel) {
    // check(this.userId, String);
    // check(commentAttributes, {
    //   postId: String,
    //   body: String
    // });

    // var user = Meteor.user();
    // var post = Posts.findOne(commentAttributes.postId);

    // if (!post)
    //   throw new Meteor.Error('invalid-comment', 'You must comment on a post');

    // comment = _.extend(commentAttributes, {
    //   submitted: new Date()
    // });

    // create the comment, save the id
    var commentId = Comments.insert(commentModel);
    return commentId;
  }
});
