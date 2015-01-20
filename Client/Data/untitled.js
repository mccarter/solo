// // SongQueueView.js - Defines a backbone view class for the song queue.
// var SongQueueView = Backbone.View.extend({

//   tagName: "table",

//   initialize: function() {
//     this.collection.on('add remove', this.render, this);
//     this.render();
//   },

//   render: function() {
//     this.$el.children().detach();

//     return this.$el.html('<th>Song Queue</th>').append(
//       this.collection.map(function(song){
//         return new SongQueueEntryView({model: song}).render();
//       })
//     );
//   }

// });

// // SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
// var SongQueueEntryView = Backbone.View.extend({

//   tagName: 'tr',

//   template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

//   events: {
//     'click': function() {
//       this.model.dequeue();
//     }
//   },

//   render: function(){
//     return this.$el.html(this.template(this.model.attributes));
//   }

// });


// // SongModel.js - Defines a backbone model class for songs.
// var SongModel = Backbone.Model.extend({

//   play: function(){
//     // Triggering an event here will also trigger the event on the collection
//     this.trigger('play', this);
//   },

//   enqueue: function(){
//     this.trigger('enqueue', this);
//   },

//   dequeue: function(){
//     this.trigger('dequeue', this);
//   },

//   ended: function(){
//     this.trigger('ended', this);
//   }

// });


// // App.js - Defines a backbone model class for the whole app.
// var AppModel = Backbone.Model.extend({

//   initialize: function(params){
//     this.set('currentSong', null);
//     this.set('songQueue', new SongQueue());

//     /* Note that 'this' is passed as the third argument. That third argument is
//     the context. The 'play' handler will always be bound to that context we pass in.
//     In this example, we're binding it to the App. This is helpful because otherwise
//     the 'this' we use that's actually in the funciton (this.set('currentSong', song)) would
//     end up refering to the window. That's just what happens with all JS events. The handlers end up
//     getting called from the window (unless we override it, as we do here). */

//     // NOTE: since the song model is present in both the library
//     // and songQueue collections, you can attach a listener to either
//     // and still receive the play event.
//     // Some people might find it easier to conceptualize the songQueue
//     // approach. HOWEVER: the tests won't pass!
//     // DON'T attach listeners to both otherwise you will get 2 play events!

//     // this.get('songQueue').on('play', function(song){
//     params.library.on('play', function(song){
//       this.set('currentSong', song);
//     }, this);

//     params.library.on('enqueue', function(song){
//       this.get('songQueue').add(song);
//     }, this);

//     this.get('songQueue').on('stop', function(){
//       this.set('currentSong', null);
//     }, this);
//   }

// });


// <!DOCTYPE html>
// <html>
//   <body>
//     <!-- Scripts may be placed anywhere on a page. But FYI, they block rendering of elements
//      below them until after the scripts load-->
//     <script src="bower_components/jquery/jquery.min.js"></script>
//     <script src="bower_components/underscore/underscore.js"></script>
//     <script src="bower_components/backbone/backbone.js"></script>

//     <script src="data/data.js"></script>

//     <script src="models/SongModel.js"></script>
//     <script src="collections/Songs.js"></script>
//     <script src="collections/SongQueue.js"></script>
//     <script src="models/AppModel.js"></script>

//     <script src="views/PlayerView.js"></script>
//     <script src="views/LibraryView.js"></script>
//     <script src="views/LibraryEntryView.js"></script>
//     <script src="views/SongQueueView.js"></script>
//     <script src="views/SongQueueEntryView.js"></script>
//     <script src="views/AppView.js"></script>

//     <script>
//       $(function(){
//         // set up model objects
//         var library = new Songs(songData);
//         var app = new AppModel({library: library});

//         // build a view for the top level of the whole app
//         var appView = new AppView({model: app});

//         // put the view onto the screen
//         $('body').append(appView.render());
//       });
//     </script>
//   </body>
// </html>
