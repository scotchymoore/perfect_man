class Api::FoodsController < ApplicationController
  before_action :set_relationship
  before_action :set_food, only: [:update, :show, :destroy]

  def index
    render json: @relationship.foods.all
  end

  def show
    render json: @food
  end

  def create
    food = @relationship.foods.create(food_params)
    if food.save
      render json: food
    else
      render json: { errors: food.errors.full_messages.join(',') }, status: 422
    end
  end

  def update
    if @food.update(food_params)
      render json: @food
    else
      render json: { errors: @food.errors.full_messages.join(',') }, status: 422
    end
  end

  def destroy
    @food.destroy
  end
  private
    def set_relationship
      @relationship = Relationship.find(params[:relationship_id])
    end

    def set_food
      @food = @relationship.foods.find(params[:id])
    end

    def food_params
      params.require(:food).permit(:restaurant, :location, :food_type)
    end
end
