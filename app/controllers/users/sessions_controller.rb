# frozen_string_literal: true

class Users::SessionsController < Devise::SessionsController
  # before_action :configure_sign_in_params, only: [:create]
  layout 'time_card'
  
  # GET /resource/sign_in
  def new
    # flash[:alert] = nil
    # flash[:notice] = nil
    uri = URI.parse(request.original_url)
    @gym = Gym.find_by(subdomain: params[:gym])
    @title = "Sign In"
    super
  end

  # POST /resource/sign_in
  def create
    @gym = Gym.find_by(subdomain: params[:gym])
    resource = warden.authenticate!(:scope => :user)
    if resource.account_disabled
      sign_out(resource)

      flash[:alert] = "Please contact your gym. Your account has been disabled."
      redirect_to new_user_session_path(gym: @gym&.subdomain)
    else
      sign_in(:user, resource)
      redirect_to profile_index_path
    end
  end

  # DELETE /resource/sign_out
  def destroy
    user = current_user
    sign_out current_user

    flash[:notice] = "User Successfully Signed Out"
    redirect_to new_user_session_path(gym: user.gym.subdomain)
  end

  # protected

  # If you have extra params to permit, append them to the sanitizer.
  # def configure_sign_in_params
  #   devise_parameter_sanitizer.permit(:sign_in, keys: [:attribute])
  # end
end
