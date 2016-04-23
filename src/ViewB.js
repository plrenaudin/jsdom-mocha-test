define(['backbone'], function(Backbone) {
  'use strict';

  return Backbone.View.extend({

    initialize: function() {
      this.render();
    },

    render: function() {
      this.$('input[name="name"]').val('testB');
      return this;
    }
  });
});