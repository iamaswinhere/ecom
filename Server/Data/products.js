const products = [
  // Electronics
  {
    name: 'Airpods Wireless Bluetooth Headphones',
    imageUrl: '/images/airpods.jpg',
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly. High-quality AAC audio offers immersive listening experience. Built-in microphone allows you to take calls while working.',
    category: 'Electronics',
    price: 89.99,
    stock: 10,
  },
  {
    name: 'iPhone 16 128GB Silver',
    imageUrl: '/images/iphone16.jpg',
    description:
      'Introducing the latest iPhone with A18 Bionic chip, improved camera system, and longer battery life.',
    category: 'Electronics',
    price: 699.99,
    stock: 7,
  },
  {
    name: 'Sony WH-1000XM5 Noise Cancelling Headphones',
    imageUrl: '/images/sony_wh1000xm5.jpg',
    description:
      'Industry-leading noise cancellation, exceptional sound quality, and lightweight design for all-day comfort.',
    category: 'Electronics',
    price: 349.99,
    stock: 5,
  },
   {
    name: 'Samsung 65" QLED 4K Smart TV',
    imageUrl: '/images/samsung_tv.jpg',
    description:
      'Quantum Dot technology delivers over a billion shades of color. Quantum Processor 4K drives intuitive performance.',
    category: 'Electronics',
    price: 999.99,
    stock: 3,
  },
  {
    name: 'Logitech MX Master 3S Wireless Mouse',
    imageUrl: '/images/logitech_mouse.jpg',
    description:
      'Advanced wireless mouse with MagSpeed scrolling, 8K DPI sensor, and quiet clicks.',
    category: 'Electronics',
    price: 99.99,
    stock: 15,
  },
   {
    name: 'Anker PowerCore 20000mAh Power Bank',
    imageUrl: '/images/anker_powerbank.jpg',
    description:
      'High-capacity portable charger with PowerIQ technology for fast charging.',
    category: 'Electronics',
    price: 49.99,
    stock: 20,
  },
   {
    name: 'GoPro HERO12 Black Action Camera',
    imageUrl: '/images/gopro.jpg',
    description:
      'Waterproof action camera with 5.3K video, HyperSmooth 6.0 stabilization, and improved battery life.',
    category: 'Electronics',
    price: 399.99,
    stock: 8,
  },
  {
    name: 'Kindle Paperwhite (16 GB)',
    imageUrl: '/images/kindle.jpg',
    description:
      'Now with a 6.8” display and thinner borders, adjustable warm light, up to 10 weeks of battery life, and 20% faster page turns.',
    category: 'Electronics',
    price: 139.99,
    stock: 12,
  },
   {
    name: 'Bose SoundLink Revolve+ Portable Bluetooth Speaker',
    imageUrl: '/images/bose_speaker.jpg',
    description:
      'Delivers deep, loud, and immersive sound, with true 360-degree coverage. Water-resistant.',
    category: 'Electronics',
    price: 299.00,
    stock: 6,
  },
  {
    name: 'Apple Watch Series 9 GPS',
    imageUrl: '/images/apple_watch.jpg',
    description:
      'The ultimate device for a healthy life. Advanced sensors, new S9 SiP, and brighter display.',
    category: 'Electronics',
    price: 399.00,
    stock: 9,
  },

  // Clothing
  {
    name: 'Men\'s Classic Cotton T-Shirt',
    imageUrl: '/images/mens_tshirt.jpg',
    description:
      'A comfortable and classic fit t-shirt made from 100% premium cotton.',
    category: 'Clothing',
    price: 19.99,
    stock: 50,
  },
  {
    name: 'Women\'s High-Waisted Jeans',
    imageUrl: '/images/womens_jeans.jpg',
    description:
      'Stylish high-waisted jeans with a comfortable stretch fabric. Perfect for casual wear.',
    category: 'Clothing',
    price: 49.99,
    stock: 30,
  },
  {
    name: 'Unisex Hoodie Sweatshirt',
    imageUrl: '/images/hoodie.jpg',
    description:
      'Soft and warm hoodie with a front pouch pocket. Available in various colors.',
    category: 'Clothing',
    price: 39.99,
    stock: 40,
  },
  {
    name: 'Running Shoes - Lightweight',
    imageUrl: '/images/running_shoes.jpg',
    description:
      'Breathable mesh running shoes with cushioned sole for comfort during workouts.',
    category: 'Clothing',
    price: 79.99,
    stock: 25,
  },
  {
    name: 'Formal Blazer - Slim Fit',
    imageUrl: '/images/blazer.jpg',
    description:
      'A modern slim-fit blazer suitable for business or formal occasions.',
    category: 'Clothing',
    price: 129.99,
    stock: 15,
  },
   {
    name: 'Summer Floral Dress',
    imageUrl: '/images/summer_dress.jpg',
    description:
      'Lightweight and flowy floral print dress, perfect for warm weather.',
    category: 'Clothing',
    price: 59.99,
    stock: 22,
  },
  {
    name: 'Men\'s Leather Belt',
    imageUrl: '/images/leather_belt.jpg',
    description:
      'Genuine leather belt with a classic buckle design.',
    category: 'Clothing',
    price: 29.99,
    stock: 35,
  },
  {
    name: 'Pack of 5 Cotton Socks',
    imageUrl: '/images/socks.jpg',
    description:
      'Comfortable and durable crew socks made from a cotton blend.',
    category: 'Clothing',
    price: 14.99,
    stock: 60,
  },
  {
    name: 'Winter Scarf - Wool Blend',
    imageUrl: '/images/scarf.jpg',
    description:
      'Soft and warm scarf made from a comfortable wool blend.',
    category: 'Clothing',
    price: 24.99,
    stock: 28,
  },
  {
    name: 'Denim Jacket - Trucker Style',
    imageUrl: '/images/denim_jacket.jpg',
    description:
      'Classic trucker style denim jacket, a versatile wardrobe staple.',
    category: 'Clothing',
    price: 69.99,
    stock: 18,
  },


  // Home & Kitchen
  {
    name: 'Instant Pot Duo 7-in-1 Electric Pressure Cooker',
    imageUrl: '/images/instant_pot.jpg',
    description:
      'Combines 7 kitchen appliances in one: pressure cooker, slow cooker, rice cooker, steamer, sauté pan, yogurt maker, and warmer.',
    category: 'Home & Kitchen',
    price: 79.00,
    stock: 11,
  },
  {
    name: 'Keurig K-Elite Coffee Maker',
    imageUrl: '/images/keurig.jpg',
    description:
      'Single serve K-Cup pod coffee brewer with iced coffee capability.',
    category: 'Home & Kitchen',
    price: 149.99,
    stock: 9,
  },
  {
    name: 'Luxury Hotel Style Bath Towels (Set of 4)',
    imageUrl: '/images/towels.jpg',
    description:
      'Plush and absorbent 100% cotton bath towels for a spa-like experience.',
    category: 'Home & Kitchen',
    price: 34.99,
    stock: 45,
  },
  {
    name: 'Robot Vacuum Cleaner with Wi-Fi',
    imageUrl: '/images/robot_vacuum.jpg',
    description:
      'Smart robot vacuum with app control and self-charging capabilities.',
    category: 'Home & Kitchen',
    price: 199.99,
    stock: 7,
  },
  {
    name: 'Nonstick Cookware Set (10-Piece)',
    imageUrl: '/images/cookware.jpg',
    description:
      'Durable nonstick pots and pans set for everyday cooking.',
    category: 'Home & Kitchen',
    price: 89.99,
    stock: 14,
  },
  {
    name: 'Electric Kettle - Stainless Steel',
    imageUrl: '/images/electric_kettle.jpg',
    description:
      'Fast boiling 1.7L electric kettle with auto shut-off feature.',
    category: 'Home & Kitchen',
    price: 29.99,
    stock: 30,
  },
  {
    name: 'Memory Foam Pillow',
    imageUrl: '/images/pillow.jpg',
    description:
      'Ergonomic memory foam pillow for neck support and comfortable sleep.',
    category: 'Home & Kitchen',
    price: 39.99,
    stock: 25,
  },
  {
    name: 'Air Fryer XL 5.8 Quart',
    imageUrl: '/images/air_fryer.jpg',
    description:
      'Cook your favorite foods with little to no oil. Large capacity for families.',
    category: 'Home & Kitchen',
    price: 99.99,
    stock: 10,
  },
  {
    name: 'Spice Rack Organizer with 16 Jars',
    imageUrl: '/images/spice_rack.jpg',
    description:
      'Revolving countertop spice rack with pre-filled spice jars.',
    category: 'Home & Kitchen',
    price: 24.99,
    stock: 33,
  },
  {
    name: 'Weighted Blanket (15 lbs)',
    imageUrl: '/images/weighted_blanket.jpg',
    description:
      'Designed to provide gentle pressure, mimicking the feeling of being held or hugged.',
    category: 'Home & Kitchen',
    price: 59.99,
    stock: 19,
  },

  // Books
  {
    name: 'Atomic Habits by James Clear',
    imageUrl: '/images/atomic_habits.jpg',
    description:
      'An easy & proven way to build good habits & break bad ones.',
    category: 'Books',
    price: 16.99,
    stock: 50,
  },
  {
    name: 'The Midnight Library by Matt Haig',
    imageUrl: '/images/midnight_library.jpg',
    description:
      'A novel about choices, regrets, and the infinite possibilities of life.',
    category: 'Books',
    price: 14.99,
    stock: 40,
  },
  {
    name: 'Sapiens: A Brief History of Humankind by Yuval Noah Harari',
    imageUrl: '/images/sapiens.jpg',
    description:
      'A groundbreaking narrative of humanity\'s creation and evolution.',
    category: 'Books',
    price: 18.99,
    stock: 30,
  },
  {
    name: 'Dune by Frank Herbert',
    imageUrl: '/images/dune.jpg',
    description:
      'The epic science fiction masterpiece set on the desert planet Arrakis.',
    category: 'Books',
    price: 10.99,
    stock: 60,
  },
  {
    name: 'Where the Crawdads Sing by Delia Owens',
    imageUrl: '/images/crawdads.jpg',
    description:
      'A heartbreaking coming-of-age story and a surprising tale of possible murder.',
    category: 'Books',
    price: 12.99,
    stock: 35,
  },
  {
    name: 'The Psychology of Money by Morgan Housel',
    imageUrl: '/images/psychology_money.jpg',
    description:
      'Timeless lessons on wealth, greed, and happiness.',
    category: 'Books',
    price: 15.99,
    stock: 45,
  },
  {
    name: 'Project Hail Mary by Andy Weir',
    imageUrl: '/images/project_hail_mary.jpg',
    description:
      'An irresistible interstellar adventure as only Andy Weir could deliver.',
    category: 'Books',
    price: 17.99,
    stock: 28,
  },
  {
    name: 'Becoming by Michelle Obama',
    imageUrl: '/images/becoming.jpg',
    description:
      'The intimate, powerful, and inspiring memoir by the former First Lady of the United States.',
    category: 'Books',
    price: 19.99,
    stock: 22,
  },
   {
    name: 'Educated: A Memoir by Tara Westover',
    imageUrl: '/images/educated.jpg',
    description:
      'An unforgettable memoir about a young woman who, kept out of school, leaves her survivalist family and goes on to earn a PhD from Cambridge University.',
    category: 'Books',
    price: 15.50,
    stock: 33,
  },
  {
    name: 'The Lord of the Rings by J.R.R. Tolkien',
    imageUrl: '/images/lotr.jpg',
    description:
      'The epic high-fantasy novel by J.R.R. Tolkien, often published as a single volume.',
    category: 'Books',
    price: 24.99,
    stock: 25,
  },

  // Sports & Outdoors
  {
    name: 'Yoga Mat - Non Slip',
    imageUrl: '/images/yoga_mat.jpg',
    description:
      'High-density TPE yoga mat providing excellent cushioning and grip.',
    category: 'Sports & Outdoors',
    price: 24.99,
    stock: 40,
  },
  {
    name: 'Adjustable Dumbbells Set',
    imageUrl: '/images/dumbbells.jpg',
    description:
      'Space-saving adjustable dumbbells, perfect for home workouts.',
    category: 'Sports & Outdoors',
    price: 199.99,
    stock: 10,
  },
  {
    name: 'Camping Tent - 4 Person',
    imageUrl: '/images/camping_tent.jpg',
    description:
      'Water-resistant dome tent, easy to set up for camping trips.',
    category: 'Sports & Outdoors',
    price: 89.99,
    stock: 15,
  },
  {
    name: 'Insulated Water Bottle - 32 oz',
    imageUrl: '/images/water_bottle.jpg',
    description:
      'Stainless steel insulated bottle keeps drinks cold for 24 hours or hot for 12 hours.',
    category: 'Sports & Outdoors',
    price: 19.99,
    stock: 50,
  },
  {
    name: 'Basketball - Official Size',
    imageUrl: '/images/basketball.jpg',
    description:
      'Durable composite leather basketball suitable for indoor and outdoor play.',
    category: 'Sports & Outdoors',
    price: 29.99,
    stock: 30,
  },
  {
    name: 'Resistance Bands Set (5 Levels)',
    imageUrl: '/images/resistance_bands.jpg',
    description:
      'Set of loop resistance bands for strength training, physical therapy, and home fitness.',
    category: 'Sports & Outdoors',
    price: 12.99,
    stock: 60,
  },
  {
    name: 'Hiking Backpack - 50L',
    imageUrl: '/images/hiking_backpack.jpg',
    description:
      'Large capacity backpack with multiple compartments, suitable for hiking and travel.',
    category: 'Sports & Outdoors',
    price: 69.99,
    stock: 20,
  },
  {
    name: 'Sleeping Bag - 3 Season',
    imageUrl: '/images/sleeping_bag.jpg',
    description:
      'Comfortable sleeping bag suitable for spring, summer, and fall camping.',
    category: 'Sports & Outdoors',
    price: 49.99,
    stock: 25,
  },
   {
    name: 'Bike Helmet - Adult',
    imageUrl: '/images/bike_helmet.jpg',
    description:
      'Adjustable and ventilated bike helmet for safety and comfort.',
    category: 'Sports & Outdoors',
    price: 34.99,
    stock: 35,
  },
  {
    name: 'Jump Rope - Speed Cable',
    imageUrl: '/images/jump_rope.jpg',
    description:
      'Adjustable speed jump rope for cardio exercise and fitness training.',
    category: 'Sports & Outdoors',
    price: 9.99,
    stock: 70,
  },
];

module.exports = products;