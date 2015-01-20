//Defines a View Class for About page


//list: create a back button contact view
var AboutView = Backbone.View.extend({

	className: 'aboutview',

  template: _.template(
  	'<div class = "about-view-header" > <%=name%>' + "'s" +' About Page' +  '</div>' +
    '<button>Back</button>'
  	),

	initialize: function() {
  	this.render();
  	this.model.on('change', this.render, this); //sets the context of this to the ContactView// renders faceview whenever that faceview model is changed
	},

	events: {// should the click event on a face be under the 'face' or 'faces' view?????
  //create a back button?

		"click img" : function() {
			//console.log('click event is working!');
      // render Contact View for the model that was clicked
      // $('body').children().detach();
      // var contactView = new ContactView({model: this.model});      
      // contactView.render(); //updates the contactView.el property with the 4 div template
      // $('body').append(contactView.$el);  //appends contactView to the body in the dom
  	}
	},

  render: function(){
    //sets the top level view element to a row element
    var attributes = this.model.toJSON();
    this.$el.html(this.template(attributes));
  }
});

