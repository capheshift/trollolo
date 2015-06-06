Template.postDetail.rendered = function () {

};

Template.postDetail.helpers({
  commentModel: function(){
    console.log('comments');
    return {
      post: this,
      comments: Comments.find(
        {postId: this._id},
        {sort: {'createdAt': -1}, limit: 3})
    };
  }
});
