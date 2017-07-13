3.times do
  user = User.create!(name: Faker::Internet.user_name, email: Faker::Internet.free_email, password: 'topsecret', password_confirmation: 'topsecret')
  3.times do
    relationship = user.relationships.create!( name: Faker::LordOfTheRings.character, dob: '01/01/1969',
                                               misc: 'put important stuff here', flower: 'poison oak', annv: '01/01/2016',
                                               first_date: '12/13/1999', street: Faker::Address.street_name, city: Faker::Address.city,
                                               state: Faker::Address.state, zip: Faker::Address.zip_code, top_size: "Med",
                                               bottom_size: '6', shoe_size: '7', bust_size: "34-C", height: "5'6")
    3.times do
      relationship.bucket_lists.create!(location: Faker::LordOfTheRings.location, bucket_list_item: Faker::Lorem.sentence)
    end
  end
end
