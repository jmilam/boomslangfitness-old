class WodController < ApplicationController
  layout 'nav'
  def new
  	@wod = Wod.new
  	@gym = current_user.gym
  	@workouts = current_user.gym.workouts.map{ |group| [group.name, group.id]}
  end

  def create
  	@wod = Wod.new(wod_params)

  	if @wod.save!
  		flash[:notice] = "Your Popup Workout is ready to go!"
  		redirect_to gym_path(@wod.gym_id)
  	else
  		flash[:alert] = @wod.errors
  		render :new
  	end
  end

  protected

  def wod_params
  	params.require(:wod).permit(:workout_id, :gym_id, :workout_date)
  end
end