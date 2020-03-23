
/*$(function() {
  $('[data-channel-subscribe="room"]').each(function(index, element) {
    
    var $element = $(element),
        room_id = $element.data('room-id')
        messageTemplate = $('[data-role="message-template"]');

    $element.animate({ scrollTop: $element.prop("scrollHeight")}, 1000)        

    App.cable.subscriptions.create(
      {
        channel: "RoomChannel",
        room: room_id
      },
      {
        received: function(data) {
          var content = messageTemplate.children().clone(true, true);
          content.find('[data-role="user-avatar"]').attr('src', data.user_avatar_url);
          content.find('[data-role="message-text"]').text(data.message);
          content.find('[data-role="message-date"]').text(data.updated_at);
          $element.append(content);
          $element.animate({ scrollTop: $element.prop("scrollHeight")}, 1000);
        }
      }
    );
  });
});*/

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

      $('#new_message').each(function(){
        this.reset();
      });

      var content = $('#msg_temp').children().clone(true, true);
      content.find('[data-role="message-text"]').text(data.message);
      content.find('[data-role="message-date"]').text(data.updated_at);
      
      $('#rm').append(content);
      $("#rm").animate({ scrollTop: $("#rm").prop("scrollHeight")}, 500);
    });
    


    /*var messageTemplate = $('[data-role="message-template"]');
    var content = messageTemplate.children().clone(true, true);
    content.find('[data-role="message-text"]').text(data.message);
    content.find('[data-role="message-date"]').text(data.updated_at);
    document.getElementById('rm').append(content);
    document.getElementById('rm').animate({ scrollTop: $element.prop("scrollHeight")}, 1000);*/
  }
});
});