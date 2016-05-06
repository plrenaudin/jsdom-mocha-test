define(['backbone', 'underscore'], function(Backbone, _) {
  'use strict';

  return Backbone.View.extend({
    template: _.template('<input name="name" /><input name="description" />'),

    initialize: function() {
      this.render();
    },

    render: function() {
      this.$el.html(this.template());
      this.$('input[name="name"]').val('testA');
      return this;
    }
  });
});