class Api::DateActivitiesController < ApplicationController
  before_action :set_relationship
  before_action :set_date_activity, only: [:show, :update, :destroy]

  def index
    render json: @relationship.date_activities.all
  end

  def show
    render json: @date_activity
  end

  def create
    date_activity = @relationship.date_activities.create(date_activity_params)
    if date_activity.save
      render json: date_activity
    else
      render json: { errors: date_activity.errors.full_messages.join(',') }, status: 422
    end
  end

  def update
    if @date_activity.update(date_activity_params)
        render json: @date_activity
      else
        render json: { errors: @date_activity.errors.full_messages.join(',') }, status: 422
      end
  end

  # def update
  #   if @date_activity.update(complete: !@date_activity.complete)
  #     render json: @date_activity
  #   else
  #     render_errors(@date_activity)
  #   end
  # end

  def destroy
    @date_activity.destroy
  end

  private
  def set_relationship
    @relationship = Relationship.find(params[:relationship_id])
  end

    def set_date_activity
      @date_activity = @relationship.date_activities.find(params[:id])
    end

    def date_activity_params
      params.require(:date_activity).permit(:activity, :location)
    end
end
