//Defines a View Class for Face Models
var FaceView = Backbone.View.extend({

	className: 'face-view',

  tagName: 'div', //delete after fiddling

  template: _.template(
  	'<img src="<%=img%>" alt="face" height="150" width="150">' +    
    '<div class ="name-text"><%= name%><div>'
  	),

  
	initialize: function() {
  	this.render();
  	this.model.on('change', this.render, this); //sets the context of this to the ContactView// renders faceview whenever that faceview model is changed
	},

	events: {// should the click event on a face be under the 'face' or 'faces' view?????
		"click img" : function() {
			//console.log('click event is working!');
      // render Contact View for the model that was clicked
      $('body').children().detach();
      var contactView = new ContactView({model: this.model});      
      contactView.render(); //updates the contactView.el property with the 4 div template
      $('body').append(contactView.$el);  //appends contactView to the body in the dom
  	}
	},

  render: function(){
    //sets the top level view element to a row element
    var attributes = this.model.toJSON();
    this.$el.html(this.template(attributes));
  }
});

