require "sinatra"

get "/" do
	"Hi guys!"
end

get "/home" do
	erb :home
end

get "/index" do
	erb :index
end

get "/gallery" do
	erb :gallery
end

get "/personal" do
	erb :personal
end

get "/contact" do
	erb :contact
end