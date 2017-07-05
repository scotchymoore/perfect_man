class Api::RelationshipsController < ApplicationController

  before_action :set_relationship only: [:show, :update, :destroy]
  
  def index
    render json: Relationship.all
  end

  def show
    render json: @relationship
  end

  def create
    relationship = Relationship.create(relationship_params)
      if relationship.save
        render json: relationship
      else
        render json: { errors: relationship.errors.full_messages.join(',') }, status: 422
      end
  end

  def update
    if @relationship.update(relationship_params)
        render json: @relationship
      else
        render json: { errors: @relationship.errors.full_messages.join(',') }, status: 422
      end
  end

  def destroy
    @relationship.destroy
  end

private

  def relationship_params
    params.require(:relationship).permit(:name, :dob, :place_of_birth, :misc, :flower, :anniversary,
    :first_date, :street, :city, :state, :zip, :top_size, :bottom_size, :shoe_size, :bust_size, :height)
  end

  def set_relationship
    @relationship = Relationship.find(params[:id])
  end
end
