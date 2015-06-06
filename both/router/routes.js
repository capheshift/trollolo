Router.route('/', {
  name: 'home'
});

Router.route('/dashboard', {
  name: 'dashboard'
});

Router.route('/comments', {
  name: 'commentList'
});

Router.plugin('ensureSignedIn', {
  only: ['dashboard']
});
