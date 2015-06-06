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
    errors.url = "Thiếu link youtube rồi má ơi.";
  }

  return errors;
}

getYoutubeId = function (url) {
  var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  var match = url.match(regExp);

  if (match && match[2].length == 11) {
    return match[2];
  } else {
    return 'error';
  }
}


Meteor.methods({
  postInsert: function (postAttributes) {
    var errors = validatePost(postAttributes);
    if (!errors) {
      return errors;
    }
    console.log(errors);

    // var postWithSameLink = Posts.findOne({url: postAttributes.url});
    // if (postWithSameLink) {
    //   return {
    //     postExists: true,
    //     _id: postWithSameLink._id
    //   };
    // }

    // var user = Meteor.user();
    // var post = _.extend(postAttributes, {
    //   userId: user._id,
    //   username: user.username,
    //   postedDate: new Date(),
    //   url: getYoutubeId(postAttributes.url),
    //   title: postAttributes.title,
    // });

    // var postId = Posts.insert(post);

    // return {
    //   _id: postId
    // };
  }
});
