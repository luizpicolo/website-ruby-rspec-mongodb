FactoryGirl.define do
  factory :article do
    title "Title for Test"
    description ""
    body "Body for Test"
    position_image_highlighted = ""
  end

  factory :tag do
    name "Name for Test"
  end
end