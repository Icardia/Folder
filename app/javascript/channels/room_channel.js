
import consumer from "./consumer"
$(document).on('turbolinks:load', function () {    
consumer.subscriptions.create({channel: "RoomChannel",
  room_id:$('#rm').attr('data-room-id') }, {
 
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    // Called when there's incoming data on the websocket for this channel
    
    jQuery(document).ready(function(){
      //alert($('#new_message').length)
      //$('<p>' + data['message'] + '</p>').appendTo('#new_message');
      alert('a');
      $('#new_message').each(function(){
        this.reset();
      });

      var content = $('#msg_temp').children().clone(true, true);
      content.find('[data-role="message-text"]').text(data.message);
      content.find('[data-role="message-date"]').text(data.updated_at);
      
      $('#rm').append(content);
      $("#rm").animate({ scrollTop: $("#rm").prop("scrollHeight")}, 500);
    });
  }
});
});