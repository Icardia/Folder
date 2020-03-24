class RoomChannel < ApplicationCable::Channel
  def subscribed
    #stop_all_streams
    room = Room.find params[:room_id]
    stream_for room

    # or
    # stream_from "room_#{params[:room]}"
  end
end

