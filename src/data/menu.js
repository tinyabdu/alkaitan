// Central menu data. Edit here; the UI renders from this file.
// SAMPLE dishes and prices: replace with the approved menu before launch.
// `dietary` should only list tags that have been verified by the kitchen
// (e.g. ['Vegetarian']). Leave empty if unsure.

export const categories = ['Starters', 'Mains', 'Desserts', 'Drinks']

export const menuItems = [
  { id: 's1', category: 'Starters', name: 'Soup of the day', description: 'Ask your server what the kitchen has made today. Served with warm bread.', price: 3500, image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=640&q=80', featured: false, dietary: [] },
  { id: 's2', category: 'Starters', name: 'Garden salad', description: 'Crisp leaves, tomato, cucumber and a light house dressing.', price: 3000, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=640&q=80', featured: false, dietary: [] },
  { id: 's3', category: 'Starters', name: 'Crispy bites platter', description: 'A shareable plate of golden fried bites with dipping sauces.', price: 4500, image: 'https://images.unsplash.com/photo-1581574709729-767c9b70a45c?w=640&q=80', featured: false, dietary: [] },

  { id: 'm1', category: 'Mains', name: 'Grilled chicken plate', description: 'Marinated chicken, grilled and served with rice and seasonal sides.', price: 8500, image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=640&q=80', featured: true, dietary: [] },
  { id: 'm2', category: 'Mains', name: 'Slow-cooked beef', description: 'Tender beef in a rich sauce, served with your choice of side.', price: 9500, image: 'https://images.unsplash.com/photo-1558030006-450675393462?w=640&q=80', featured: true, dietary: [] },
  { id: 'm3', category: 'Mains', name: 'Seafood platter', description: 'A generous mix of seafood, grilled and served with sauce and sides.', price: 14000, image: 'https://images.unsplash.com/photo-1599084993091-18e7b8b5e1c9?w=640&q=80', featured: true, dietary: [] },
  { id: 'm4', category: 'Mains', name: 'Vegetable stew', description: 'Slow-simmered vegetables in a savoury sauce, served with rice.', price: 6500, image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=640&q=80', featured: false, dietary: [] },

  { id: 'd1', category: 'Desserts', name: 'Chocolate cake', description: 'A rich slice of chocolate cake with cream.', price: 3500, image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=640&q=80', featured: false, dietary: [] },
  { id: 'd2', category: 'Desserts', name: 'Fruit and cream', description: 'Fresh seasonal fruit with whipped cream.', price: 3000, image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=640&q=80', featured: false, dietary: [] },

  { id: 'k1', category: 'Drinks', name: 'Fresh juice', description: 'Pressed to order. Ask for today\u2019s flavours.', price: 2500, image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=640&q=80', featured: false, dietary: [] },
  { id: 'k2', category: 'Drinks', name: 'Mint lemonade', description: 'Fresh lemon and mint over ice.', price: 2000, image: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=640&q=80', featured: false, dietary: [] },
  { id: 'k3', category: 'Drinks', name: 'Coffee', description: 'Hot coffee, made to order.', price: 2000, image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=640&q=80', featured: false, dietary: [] },
]
