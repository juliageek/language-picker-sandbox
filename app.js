var path = require('path');

const locales = [
  {
    value: 'ro',
    label: 'Română'
  },
  {
    value: 'en',
    label: 'United States'
  }
]

const defaultLocale = 'ro';

var apos = require('apostrophe')({
  shortName: 'lang-picker-sandbox',

  // See lib/modules for basic project-level configuration of our modules
  // responsible for serving static assets, managing page templates and
  // configuring user accounts.

  modules: {
    'apostrophe-i18n-static': {
      defaultLocale,
      locales,
      namespaces: true,
      ignoreNamespaces: [ 'apostrophe' ],
      generateAtStartup: false,
      objectNotation: true,
      autoReload: false
    },
    'apostrophe-workflow': {
      alias: 'workflow',
      locales: [{
        name: 'default',
        label: 'Default',
        private: true,
        children: locales.map(locale => ({ label: locale.label, name: locale.value }))
      }],
      replicateAcrossLocales: false
     },
    'apostrophe-templates': { viewsFolderFallback: path.join(__dirname, 'views') },

    // Add an alt field to images schema, by default the title is used but
    // we recommend enabling the alt field for clarity.
    'apostrophe-images': {
      enableAltField: true
    },
    'blog-one': { extend: 'apostrophe-blog' },
    'blog-one-pages': { extend: 'apostrophe-pieces-pages' },
  }
});
