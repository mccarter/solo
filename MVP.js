//MVP
//declares Appointment model class
var Appointment = Backbone.Model.extend({});
//instantiates appointment model
var appointment = new Appointment();
//sets title of appoinment
appointment.set('title', 'My knee hurts');
//line 7 is equivalent to the following
//var appointment = new Appointment({title: 'My knee hurts'});

//declares a new view class
var AppointmentView = Backbone.View.extend({
  render: function(){
  	//sets the top level view element to an li element
    $(this.el).html('<li>' + this.model.get('title') + '</li>');
  }
});

// creates a view instance for the appointment model
var appointmentView = new AppointmentView({model: appointment});

//Generates the html for the el property
appointmentView.render();

//inserts the view into the DOM for the ID 'app'
$('#app').html(appointmentView.el);


///////////////////////////
//This one calls the Parse server to grab data, and sends it to processData
var getData = function() {
  console.log('Fetching data!');
  $.ajax('https://api.parse.com/1/classes/msgs?order=-createdAt', {
    contentType: 'application/json',
    success: function(data){
      processData(data);
    },
    error: function(data) {
      $('#error').prepend(' oh no').append('!');
    }
  });
}