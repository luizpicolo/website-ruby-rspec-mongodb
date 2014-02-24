FactoryGirl.define do
  factory :article do
    title "Title for Test"
    description	""
    body "Body for Test"
    position_image_highlighted "none"
    status "published"
  end

  factory :tag do
    name "Name for Test"
  end

  factory :slide do
    title "Title for Test"
    link "Link for test"
    image "Image way for test"
  end
end