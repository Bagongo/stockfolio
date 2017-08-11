class FriendshipsController < ApplicationController

  def destroy
    friend_to_destroy_id = params[:id]
    friendship_to_destroy = Friendship.where("user_id = ? AND friend_id = ?", current_user.id, friend_to_destroy_id)
    friendship_to_destroy.destroy(friendship_to_destroy[0].id)
    respond_to do |format|
      format.html { redirect_to my_friends_path, notice: 'Friend was successfully removed from friends list.' }
      format.json { head :no_content }
    end
  end

end