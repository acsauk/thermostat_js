require 'sinatra'
require 'json'

set :public_folder, proc { File.join(root) }

get '/time.json' do
  headers 'Access-Control-Allow-Origin' => '*'
  #File.read(File.join("index.html"))
  { time: Time.now.to_s, city: "London", temp: 20, psm: true }.to_json
end
