//defines view for contact page

//list: create a back button FacesView
var ContactView = Backbone.View.extend({

	tagName: "div",

	className: "contact-view",

  template: _.template(
    '<button class= "back">Back</button>' +
  	'<div class ="about"> About </div>' +
  	'<div class ="linked-in"> <a href=  <%=linkedin%> >Linkedin</a> </div>' +
  	'<div class = "blog"> <a href=  <%=blog%> >Blog</a>  </div>' +
  	'<div class = "github"> <a href=  <%=github%> >Github</a> </div>'
  ),

	initialize: function() {
  	//this.render();
  	this.model.on('change', this.render, this);//sets the context of this to the ContactView

	},

  render: function(){
    //sets the top level view element to a row element
    console.log('Contact View Trying to Render');
    var attributes = this.model.toJSON();
    this.$el.html(this.template(attributes));
  },

  events: {
	  "click .about" : function() {
		  // render about view for the model that was clicked
		  $('body').children().detach();
		  var aboutView = new AboutView({model: this.model});      
		  aboutView.render(); //updates the aboutView.el property with the 4 div template
		  $('body').append(aboutView.$el);  //appends aboutView to the body in the dom
		},

		"click .back" : function() {
      //render Contact View for the model that was clicked
      console.log('FaceCollection View trying to render from Contact View');
      $('body').children().detach();

        //instantiates a faces collection;
        var facesCollection = new Faces();
        
        //Populates the faces collection with a faceModel with respective data from the personData array;
        personData.forEach(function(person){
            var face = new FaceModel({
                'img': person.img,
                'name': person.name, 
                'about': person.about, 
                'blog': person.blog, 
                'linkedin': person.linkedin, 
                'github': person.github
            });

            facesCollection.add(face);
            //var faceView = new FaceView(face);
        })

      console.log('this.collection in contact view', this.collection)
      var mainView = facesCollection.map(function(faceModel){
    	//creates FaceView for every model in the collection. faceView references the html returned by the FaceView.
    	var faceView = new FaceView({model: faceModel});
    	var faceViewHtml = faceView.$el;
    	$('body').append(faceViewHtml);   
      });
  	}
  }
});

 	 // '<div class ="about"> About </div>' +
   //  '<div class = "blog"> Blog </div>' +
   //  '<div class ="linked-in"> Linkedin </div>' +
   //  '<div class = "github"> Github </div>'

