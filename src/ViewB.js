define(['backbone'], function(Backbone) {
  'use strict';

  return Backbone.View.extend({
    template: _.template('<input name="nameB" /><input name="descriptionB" />'),

    initialize: function() {
      this.$el.html(this.template());
      this.render();
    },

    render: function() {
      this.$('input[name="nameB"]').val('testB');
      return this;
    }
  });
});