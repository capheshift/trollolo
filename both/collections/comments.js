Comments = new Mongo.Collection('comments');

Comments.helpers({

});

Comments.before.insert(function (userId, doc) {
  doc.createdAt = moment().toDate();
});
