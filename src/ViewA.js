define(['backbone'], function(Backbone) {
  'use strict';

  return Backbone.View.extend({
    template: _.template('<input name="nameA" /><input name="descriptionA" />'),

    initialize: function() {
      this.$el.html(this.template());
      this.render();
    },

    render: function() {
      this.$('input[name="nameA"]').val('testA');
      return this;
    }
  });
});