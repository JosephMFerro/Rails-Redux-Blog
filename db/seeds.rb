10.times do 
  Blog.create(
    name: "Test Blog",
    body: "Test Blog Body...",
  )
end

puts "SUCCESS"
puts "----------------------"
puts "10 Blog Posts Created"