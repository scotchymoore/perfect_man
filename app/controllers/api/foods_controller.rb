class Api::FoodsController < ApplicationController
  before_action :set_relationship
  before_action :set_food, only: [:update, :destroy]

  def index
    render json: @relationship.food.all
  end

  def show
    render json: @food
  end

  def create
    food = @relationship.foods.create(food_params)
    if food.save
      render json: food
    else
      render_errors(food)
    end
  end

  def update
    if @food.update(complete: !@food.complete)
      render json: @food
    else
      render_errors(@food)
    end
  end

  def destroy
    @food.destroy
    render json: { message: 'Food Deleted' }

  private
    def set_relationship
      @relationship = Relationship.find(params[:relationship_id])
    end
    
    def set_food
      @food = Food.find(params[:id])
    end

    def food_params
      params.require(:food).permit(:type, :complete)
    end
end
