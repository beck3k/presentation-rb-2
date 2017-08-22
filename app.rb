require('sinatra')

get "/" do
	"Whee"
end

get "/viewer" do
	@content = File.open(params['name'] + ".html", 'r')
	@fullscreen = params['fullscreen']
	@slide = params['slide']
	erb :viewer
end
