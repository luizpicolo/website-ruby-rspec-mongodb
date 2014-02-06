ActiveAdmin::Editor.configure do |config|
  # config.s3_bucket = ''
  # config.aws_access_key_id = ''
  # config.aws_access_secret = ''
  # config.storage_dir = 'uploads'
  config.parser_rules['tags']['script'] = {
    'remove' => 0,
    'check_attributes' => {}
  }

  config.parser_rules['tags']['iframe'] = {
    'remove' => 0,
    'check_attributes' => {}
  }
end
