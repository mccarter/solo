// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  initialize: function(params){
    
  },

  render: function(){
    console.log('AppView', this.$el);

    return this.$el.html(this.model.$el);
  }

});


