//face collection view
var FaceCollectionView = Backbone.View.extend({

  tagName: "table",

  render: function() {
    this.$el.children().detach();

    return this.$el.html('<th>Face Collection View</th>').append(
      this.collection.map(function(face){
        return new FaceView({model: FaceModel}).render();
      })
    );
  }
}); 