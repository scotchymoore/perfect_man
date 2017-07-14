class Api::RelationshipsController < ApplicationController

  before_action :set_relationship, only: [:show, :update, :destroy]

  def index
    render json: current_user.relationships
  end

  def show
    render json: @relationship
  end

  def create
    relationship = current_user.relationships.create(relationship_params)
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
    params.require(:relationship).permit(:name, :dob, :pob, :misc, :flower, :annv,
    :first_date, :street, :city, :state, :zip, :top_size, :bottom_size, :shoe_size, :bust_size, :height)
  end

  def set_relationship
    @relationship = Relationship.find(params[:id])
  end
end
