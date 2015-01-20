//face collection view
var FaceCollectionView = Backbone.View.extend({

  tagName: 'table',
  className: 'faces-view',
 
  initialize: function() {
  	this.render();
  	//this.model.on('change', this.render, this); //sets the context of this to the ContactView
  },

  events: {
  	
  	},
 
  render: function() {
    this.$el.children().detach();
  
    var mainView = this.collection.models.map(function(faceModel){
    	//creates FaceView for every model in the collection. faceView references the html returned by the FaceView.
    	var faceView = new FaceView({model: faceModel});
    	var faceViewHtml = faceView.$el;
    	return faceViewHtml;    
      });
    	this.$el.html(mainView);
  }
 
}); 



  //alternative modular code that I could not get working!
  // render: function() {
  //   this.$el.children().detach();
  //   this.collection.forEach(this.addOne, this);
  // }
  
  // addOne: function(faceModel){
  // 	console.log('addOne is being called')
  // 	var faceView = new FaceView({model: faceModel});
  // 	console.log('faceView Backbone Object:  ', faceView);
  //   console.log('value of this.$el', this.$el);
  // 	this.$el.append(faceView.render().el);
  // },