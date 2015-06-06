Router.route('/', {
  name: 'home'
});

Router.route('/dashboard', {
  name: 'dashboard'
});

Router.route('/posts', {
  name: 'posts'
});

Router.route('/comments', {
  name: 'commentList'
});

Router.plugin('ensureSignedIn', {
  only: ['dashboard', 'posts']
});
