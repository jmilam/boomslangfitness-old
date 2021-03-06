class DailyLogController < ApplicationController
  layout :choose_layout

  def choose_layout
    if current_user.nutrition_only
      "nutrition"
    else
      "application"
    end
  end

  def index
    @gym = current_user.gym
    @daily_logs = current_user.daily_logs.order(created_at: :desc)
    @today_log = current_user.daily_logs.find_by(calendar_date: Time.current.to_date)
  end

  def edit
    @gym = current_user.gym
    @daily_log = DailyLog.find(params[:id])
    @foods = Food.all.order(:name).group_by(&:category)
    @food_categories = Category.food_categories
    @icons = ["fa fa-egg", "fa fa-carrot", "", "fa fa-cheese"]
    @favorite_foods = DailyLog.where(calendar_date: Date.today.beginning_of_week..(Date.today.beginning_of_week + 7)).map(&:foods).flatten.uniq[0..14]
    @meals = @gym.food_groups.includes(:food_group_pairings)
  end

  def show
    @gym = current_user.gym

    @daily_log = DailyLog.find(params[:id])
    @user = current_user
    @remaining_tdee = @user.tdee - (@daily_log&.total_calories || 0)

    @daily_log_foods = @daily_log.daily_log_foods.includes(:food).group_by(&:food_id)
    macros_total = {protein: 0, carbs: 0, fats: 0}
    @daily_log_foods.values.flatten.each do |dlf|
      macros_total[:protein] += dlf.food.protein
      macros_total[:carbs] += dlf.food.carbs
      macros_total[:fats] += dlf.food.fat
    end

    @macros = [
      ['Macro Nutrient', 'Percentage'],
      ['Carbs',     macros_total[:carbs]],
      ['Fat',      macros_total[:fats]],
      ['Protein',  macros_total[:protein]]
    ]
  end

  def new
    @gym = current_user.gym
    @daily_log = current_user.daily_logs.find_or_initialize_by(calendar_date: Time.current.to_date)
    @foods = Food.all.order(:name).group_by(&:category)
    @food_categories = Category.food_categories
    @icons = ["fa fa-egg", "fa fa-carrot", "", "fa fa-cheese"]
    @favorite_foods = DailyLog.where(calendar_date: Date.today.beginning_of_week..(Date.today.beginning_of_week + 7)).map(&:foods).flatten.uniq[0..14]
    @meals = @gym.food_groups.includes(:food_group_pairings)
  end

  def create
    begin
      @daily_log = current_user.daily_logs.new(calendar_date: Time.current.to_date)
      params[:selected_food_ids].split(',').delete_if(&:empty?).each do |food_id|
        @daily_log.daily_log_foods.new(food_id: food_id, qty: 1)
      end

      flash[:notice] = "Successfully logged food."
      @daily_log.save!
    rescue ActiveRecord::RecordInvalid => error
      flash[:alert] = "There was an error when logging your food: #{error}"
    ensure
      redirect_to daily_log_path(@daily_log.id)
    end
  end

  def update
    begin
      @daily_log = DailyLog.find(params[:id])
      params[:selected_food_ids].split(',').delete_if(&:empty?).each do |food_id|
        @daily_log.daily_log_foods.create!(food_id: food_id, qty: 1)
      end

      flash[:notice] = "Successfully logged food."
    rescue ActiveRecord::RecordInvalid => error
      flash[:alert] = "There was an error when logging your food: #{error}"
    ensure
      redirect_to daily_log_path(@daily_log.id)
    end
  end

  def destroy_daily_log_food
    @daily_log_food = DailyLogFood.find(params[:id])
    
    if params[:all]
      @daily_log_foods = DailyLogFood.where(daily_log_id: @daily_log_food.daily_log_id, food_id: @daily_log_food.food_id)
      @daily_log_foods.destroy_all
    else
      @daily_log_food.destroy!
    end

    flash[:notice] = "Food removed from today's log"
    redirect_to daily_log_path(@daily_log_food.daily_log_id)
  end

  def edit_daily_log_foods
    @daily_log = DailyLog.find(params[:daily_log_id])
    @daily_log_foods = @daily_log.daily_log_foods.includes(:food).where(food_id: params[:id])
  end


 end