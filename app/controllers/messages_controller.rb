class MessagesController < ApplicationController
    before_action :load_entities
    def create
        @room_message = Message.create room: @room, name: "Anonymous",  message: params.dig(:message, :message)
        RoomChannel.broadcast_to @room, @room_message
    end

    protected
    def load_entities
        @room = Room.find params.dig(:message, :room_id)
    end
end
