# frozen_string_literal: true

class Users::RegistrationsController < Devise::RegistrationsController
  # before_action :configure_sign_up_params, only: [:create]
  # before_action :configure_account_update_params, only: [:update]
  layout 'sign_up'
  # GET /resource/sign_up
  def new
    @gym = params.dig(:user, :gym_id).blank? ? Gym.find_by(subdomain: params[:gym]) : Gym.find(params.dig(:user, :gym_id))
    @user = @gym.users.new(email: params.dig(:user, :email), not_a_robot: false)
    @regularity = User.regularities
    @goals = User.goals
    @gyms = Gym.all

    respond_to do |format|
      format.html
    end
  rescue StandardError => error
    @error = true
  end

  # POST /resource
  def create
    begin
      @user = User.new(user_sign_up_params)
      @gym = @user.gym
      # @user.nutrition_only = true if @user.gym.subdomain == "project49"
      default_workout = @user.gym&.workouts&.find_by(user_default: true)
      @user.current_workout = default_workout&.id

      if @user.save
        Inbox.create(user_id: @user.id)
        sign_in @user

        if @user.gym.name == "Boomslang Fitness"
          UserMailer.with(user: @user).welcome_email.deliver_now
        end
        flash[:notice] = "Please fill out remainder of information and get started working out. Click on image placeholder to complete all user information or click Start Workout to get started now."
        redirect_to profile_index_path
      else
        error_message = ''
        error_message = error_message.dup

        @user.errors.messages.each do |key, value|
          next if key.to_s.include?('gym_id')
          error_message << "* #{key.capitalize}"

          value.each do |val|
            error_message << " #{val}\n"
          end
        end

        flash[:alert] = error_message
        @regularity = ['1 day week', '2 day week', '3 day week', '4 day week', '5 day week']
        @goals = ['Fat Loss', 'Lean Mass Gain', 'Maintain', 'Other']
        @gyms = Gym.all

        render :new
      end
    end

    def update
    end
  end

  # GET /resource/edit
  # def edit
  #   super
  # end

  # PUT /resource
  # def update
  #   super
  # end

  # DELETE /resource
  # def destroy
  #   super
  # end

  # GET /resource/cancel
  # Forces the session data which is usually expired after sign
  # in to be expired now. This is useful if the user wants to
  # cancel oauth signing in/up in the middle of the process,
  # removing all OAuth session data.
  # def cancel
  #   super
  # end

  protected

  # If you have extra params to permit, append them to the sanitizer.

  def user_sign_up_params
    params.require(:user).permit(:first_name, :last_name, :height, :weight, :username, :password,
                                 :phone_number, :email, :regularity_id, :goal_id, :gym_id, :pin, :trainer,
                                 :not_a_robot, :tdee)
  end

  # If you have extra params to permit, append them to the sanitizer.
  # def configure_account_update_params
  #   devise_parameter_sanitizer.permit(:account_update, keys: [:attribute])
  # end

  # The path used after sign up.
  # def after_sign_up_path_for(resource)
  #   super(resource)
  # end

  # The path used after sign up for inactive accounts.
  # def after_inactive_sign_up_path_for(resource)
  #   super(resource)
  # end
end
