class WorkoutMailer < ApplicationMailer
	def tomorrows_workout
    @workout = params[:workout]
    mail(to: params[:user].email, from: "workout-reminder@boomslangfitness.com",
      subject: "Get ready for your workout tomorrow!")
  end
end
