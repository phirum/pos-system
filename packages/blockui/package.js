Package.describe({
    name: 'theara:blockui',
    version: '0.0.3',
    // Brief, one-line summary of the package.
    summary: '',
    // URL to the Git repository containing the source code for this package.
    git: '',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('1.3.4.3');
    api.use([
        'ecmascript',
        'jquery'
    ]);

    api.addFiles('blockui.js', 'client');
});

Package.onTest(function (api) {
    api.use('ecmascript');
    api.use('tinytest');
    api.use('theara:blockui');
    api.mainModule('blockui-tests.js');
});
