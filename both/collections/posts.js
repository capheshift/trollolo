Posts = new Mongo.Collection('posts');

Posts.helpers({
});

Posts.before.insert(function (userId, doc) {
  doc.createdAt = moment().toDate();
});


validatePost = function (post) {
  var errors = {};

  if (!post.title) {
    errors.title = "Điền tiêu đề vào đi má.";
  }

  if (!post.url) {
    errors.url = "Link youtube đâu má.";
  }

  return errors;
}


Meteor.methods({
  postInsert: function (postAttributes) {
    var postWithSameLink = Posts.findOne({url: postAttributes.url});
    if (postWithSameLink) {
      return {
        postExists: true,
        _id: postWithSameLink._id
      };
    }

    var user = Meteor.user();
    var post = _.extend(postAttributes, {
      userId: user._id,
      username: user.username,
      postedDate: new Date(),
      url: postAttributes.url,
      title: postAttributes.title,
    });

    var postId = Posts.insert(post);

    return {
      _id: postId
    };
  }
});
