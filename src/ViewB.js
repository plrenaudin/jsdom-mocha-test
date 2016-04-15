define(['backbone'], function(Backbone) {
  'use strict';

  return Backbone.View.extend({

    initialize: function() {
      this.render();
    },

    render: function() {
      this.$('name').val('testB');
      return this;
    }
  });
});