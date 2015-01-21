//Defines a View Class for About page


//list: create a back button contact view
var AboutView = Backbone.View.extend({

	className: 'aboutview',

  template: _.template(
    '<button class = "back-button">Back</button>' +
    '<div class = "about-view-header" > <p> <%=name%>' + "'s" +' About Page' +  '</p></div>' +
    '<div class = "about-view-bio" > <p><%=about%>' + '</p></div>' 
  	),

	initialize: function() {
  	this.render();
  	this.model.on('change', this.render, this); //sets the context of this to the ContactView// renders faceview whenever that faceview model is changed
	},

	events: {// should the click event on a face be under the 'face' or 'faces' view?????
  //create a back button?

		"click .back-button" : function() {
       //render Contact View for the model that was clicked
       console.log('Contact View trying to render from About View')
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

