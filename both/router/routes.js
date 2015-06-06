Router.route('/', {
  name: 'home'
});

Router.route('/dashboard', {
  name: 'dashboard'
});


Router.route('/posts', {
  name: 'posts'
});

Router.plugin('ensureSignedIn', {
  only: ['dashboard', 'posts']
});
