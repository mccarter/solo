//Face View
var FaceView = Backbone.View.extend({

	initialize: function() {
  	this.render();
	},

  render: function(){
    //sets the top level view element to a row element
    $(this.el).html('<tr>' + this.model.get('name') + '</tr>');
  }
});


//<img src="smiley.gif" alt="Smiley face" height="42" width="42">