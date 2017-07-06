class Api::BucketListsController < ApplicationController
  before_action :set_relationship only: [:show, :update, :destroy]


  def index
    render json: BucketList.all
  end

  def show
    render json: @bucket_list
  end

  def create
    bucket_list = BucketList.create(relationship_params)
      if bucket_list.save
        render json: bucket_list
      else
        render json: { errors: bucket_list.errors.full_messages.join(',') }, status: 422
      end
  end

  def update
    if @bucket_list.update(relationship_params)
        render json: @bucket_list
      else
        render json: { errors: @bucket_list.errors.full_messages.join(',') }, status: 422
      end
  end

  def destroy
    @bucket_list.destroy
    render json: {message: 'Item Deleted'}
  end

  private

    def set_relationship
      @bucket_list = BucketList.find(params[:id])
    end

    def bucket_list_params
      params.require(:relationship).permit(:bucket_list_item, :location)
    end
end
