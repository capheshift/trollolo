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

    var user = Meteor.user();
    if (!user) {
      throw new Meteor.Error('invalid-user', 'You must login to comment!');
    }
    // var post = Posts.findOne(commentAttributes.postId);

    // if (!post)
    //   throw new Meteor.Error('invalid-comment', 'You must comment on a post');

    commentModel = _.extend(commentModel, {
      userId: user._id
    });

    // create the comment, save the id
    var commentId = Comments.insert(commentModel);
    return commentId;
  }
});
