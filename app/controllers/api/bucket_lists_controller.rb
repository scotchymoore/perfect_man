class Api::BucketListsController < ApplicationController
  before_action :set_bucket_list, only: [ :show, :update, :destroy]
  before_action :set_relationship

  def index
    render json: @relationship.bucket_lists.all
  end

  def show
    render json: @bucket_list
  end

  def create
    bucket_list = @relationship.bucket_list.create(bucket_list_params)
      if bucket_list.save
        render json: bucket_list
      else
        render json: { errors: bucket_list.errors.full_messages.join(',') }, status: 422
      end
  end

  def update
    if @bucket_list.update(bucket_list_params)
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
      @relationship = Relationship.find(params[:relationship_id])
    end

    def set_bucket_list
      @bucket_list = relationship.bucket_list.find(params[:id])
    end

    def bucket_list_params
      params.require(:bucket_list).permit(:bucket_list_item, :location)
    end
end
