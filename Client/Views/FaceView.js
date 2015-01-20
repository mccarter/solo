//Defines a View Class for Face Models
var FaceView = Backbone.View.extend({
  template: _.template('<tr><td>' + 'Hello!'  + '</td></tr>'),

	initialize: function() {
  	this.render();
	},

  render: function(){
    //sets the top level view element to a row element
    this.el = this.template();
    console.log('el of FaceView', this.el); //retuns: <tr>sup Issaq!</tr>
    return this.el;
  }
});


//<img src="smiley.gif" alt="Smiley face" height="42" width="42">