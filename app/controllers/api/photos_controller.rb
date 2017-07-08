class Api::PhotosController < ApplicationController

  def create
    auth = {
      cloud_name: ENV['CLOUD_NAME'],
      api_key: ENV['API_KEY'],
      api_secret: ENV['API_SECRET']
    }

    photo_name = params.keys.first
    photo = params[photo_name]

    cloud_photo = Cloudinary::Uploader.upload(photo, auth)

    updated_user = User.update(image: cloud_photo['url'])
    render json: updated_user
  end
end
