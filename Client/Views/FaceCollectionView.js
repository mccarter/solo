//face collection view
var FaceCollectionView = Backbone.View.extend({

  tagName: "table",
 
  initialize: function() {
  	//this.render();
  },

  render: function() {
    this.$el.children().detach();

    var mainView = this.collection.models.map(function(faceModel){
    	//creates FaceView for every model in the collection. faceView references the html returned by the FaceView.
    	var faceView = new FaceView({model: faceModel});
    	var faceViewHtml = faceView.el;
    	console.log('faceViewHtml', faceViewHtml);
    	console.log('faceView.render()', faceView.render());
    	return faceViewHtml;    
      });
    	console.log('MainView', mainView);
    	console.log('FaceCollectionView', this.$el.html(mainView));
    	return this.$el.html(mainView);

  }
}); 


  // render: function () {
  //   var contents = this.collection.map(function(fish) {
  //     return fish.template(fish.attributes);
  //   });

  //   this.$el.html(contents);
  //   console.log(this.$el);

  //   return this.$el;
  // }


  //   this.collection.models.forEach(function(faceModel){
  //   	//creates FaceView for every model in the collection. faceView references the html returned by the FaceView.
  //   	var faceView = new FaceView({model: faceModel});
  //   	var faceViewHtml = faceView.el;
  //   	console.log('faceView HTML: ', faceView.el);
  //   	console.log('this.$el of FaceCollectionVeiew', this.$el);
  //   	this.$el.append(faceViewHtml);
  //   	$('body').append(this.$el);
  //     });
  // }


  // render: function () {
  //   var contents = this.collection.map(function(fish) {
  //     return fish.template(fish.attributes);
  //   });

  //   this.$el.html(contents);

  //   return this.$el;

//this.collection?
//how to get face collection view to render?

// var PondView = Backbone.View.extend({
// 	/* Fill out your solution here */
//   tagName: 'table',
//   template: _.template('<tr><td><%= name %></td><td><img src="<%=image%>"></td></tr>'),


//   initialize: function () {
//     this.render();
//     this.collection.on('change', this.render, this);
//   },

//   render: function () {
//     this.$el.html('');

//     for (var i = 0; i < this.collection.length; i++) {
//       var fish = this.collection.at(i);
//       var html = this.template(fish.attributes);
//       this.$el.append(html);
//       $('body').append(this.$el);
//     }
//   }
// });
