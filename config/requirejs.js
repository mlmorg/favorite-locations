require.config({
  baseUrl: '../app/assets/javascripts/',
  paths: {
    jquery: '../../../components/jquery/jquery',
    underscore: '../../../components/underscore/underscore',
    backbone: '../../../components/backbone/backbone',
    layoutmanager: '../../../components/layoutmanager/backbone.layoutmanager',
    canal: '../../../components/backbone.canal/backbone.canal'
  },
  shim: {
    backbone: {
      deps: ['jquery', 'underscore'],
      exports: 'Backbone'
    },
    underscore: {
      exports: '_'
    },
    layoutmanager: {
      deps: ['jquery', 'underscore', 'backbone'],
      exports: 'Backbone.Layout'
    },
    canal: {
      deps: ['jquery', 'underscore', 'backbone'],
      exports: 'Backbone.Canal'
    }
  }
});
