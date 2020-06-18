100.times do
  Book.create(
    title: Faker::Book.title,
    author: Faker::Book.author,
    summary: Faker::Lorem.paragraph
  )
end

puts "100 Books Seeded"