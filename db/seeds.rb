# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
messages = [
  "Hello, good morging my good friend",
  "Hello, I will be a bit late today",
  "Hello, I will buy food for everyone",
  "Bashh! I'm tired like a fool",
  "Hey, the code is full of bugs"
]

messages.each do |greeting|
  Message.create( greeting: greeting)
end