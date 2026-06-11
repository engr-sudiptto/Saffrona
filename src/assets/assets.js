// Importing all image to export as an object
import cake from './cake.jpg';
import cake2 from './cake2.jpg';
import cake3 from './cake3.jpg';
import chicken_salad from './chicken_salad.jpg';
import cup_cake from './cup_cake.jpg';
import dessert from './dessert.jpg';
import dessert2 from './dessert2.jpg';
import dessert3 from './dessert3.jpg';
import dessert4 from './dessert4.jpg';
import dessert5 from './dessert5.jpg';
import hero from './hero.jpg';
import noodle from './noodle.jpg';
import noodle2 from './noodle2.jpg';
import noodle3 from './noodle3.jpg';
import pasta from './pasta.jpg';
import pasta2 from './pasta2.jpg';
import pasta3 from './pasta3.jpg';
import pasta4 from './pasta4.jpg';
import pasta5 from './pasta5.jpg';
import pure_vage from './pure_vage.jpg';
import pure_vage2 from './pure_vage2.jpg';
import pure_vage3 from './pure_vage3.jpg';
import pure_vage4 from './pure_vage4.jpg';
import roll from './roll.jpg';
import roll2 from './roll2.jpg';
import roll3 from './roll3.jpg';
import roll4 from './roll4.jpg';
import salad from './salad.jpg';
import salad2 from './salad2.jpg';
import salad3 from './salad3.jpg';
import sandwich from './sandwich.jpg';
import sandwich2 from './sandwich2.jpg';
import sandwich3 from './sandwich3.jpg';
import sandwich4 from './sandwich4.jpg';
import sandwich5 from './sandwich5.jpg';
import saffronaLogo from './saffrona_logo.png';
import vag_salad from './vag_salad.jpg';
import white_pasta from './white_pasta.jpg';
import star from './star.png';
import appStore from './appStore.png'
import playStore from './playStore.png'

// Exporting all images as an object
export const assets = {
  appStore,
  playStore,
  cake,
  cake2,
  cake3,
  chicken_salad,
  cup_cake,
  dessert,
  dessert2,
  dessert3,
  dessert4,
  dessert5,
  hero,
  noodle,
  noodle2,
  noodle3,
  pasta,
  pasta2,
  pasta3,
  pasta4,
  pasta5,
  pure_vage,
  pure_vage2,
  pure_vage3,
  pure_vage4,
  roll,
  roll2,
  roll3,
  roll4,
  salad,
  salad2,
  salad3,
  sandwich,
  sandwich2,
  sandwich3,
  sandwich4,
  sandwich5,
  saffronaLogo,
  vag_salad,
  white_pasta,
  star,
};

export const menuList = [
  {
    menuName: 'Salad',
    menuImage: salad,
  },
  {
    menuName: 'Roll',
    menuImage: roll,
  },
  {
    menuName: 'Dessert',
    menuImage: dessert,
  },
  {
    menuName: 'Sandwich',
    menuImage: sandwich,
  },
  {
    menuName: 'Cake',
    menuImage: cake,
  },
  {
    menuName: 'Pasta',
    menuImage: pasta,
  },
  {
    menuName: 'Noodle',
    menuImage: noodle,
  },
  {
    menuName: 'Pure Veg',
    menuImage: pure_vage,
  },
];

export const foodList = [
  // --- SALAD CATEGORY ---
  {
    _id: '1',
    name: 'Greek Salad',
    image: salad,
    price: 12,
    description:
      'A fresh and healthy classic Greek salad with olives and feta cheese.',
    category: 'Salad',
    rating: 4.5,
  },
  {
    _id: '2',
    name: 'Chicken Salad',
    image: chicken_salad,
    price: 15,
    description:
      'Grilled chicken breast served over crisp greens and garden vegetables.',
    category: 'Salad',
    rating: 4.7,
  },
  {
    _id: '3',
    name: 'Garden Salad',
    image: salad2,
    price: 10,
    description: 'Crisp lettuce, tomatoes, cucumbers, and a light vinaigrette.',
    category: 'Salad',
    rating: 4.2,
  },
  {
    _id: '4',
    name: 'Caesar Salad',
    image: salad3,
    price: 13,
    description:
      'Traditional Caesar salad with crunchy croutons and parmesan cheese.',
    category: 'Salad',
    rating: 4.6,
  },
  {
    _id: '5',
    name: 'Veggie Salad',
    image: vag_salad,
    price: 11,
    description: 'A colorful mix of seasonal vegetables with a tangy dressing.',
    category: 'Salad',
    rating: 4.3,
  },

  // --- ROLL CATEGORY ---
  {
    _id: '6',
    name: 'Spring Roll',
    image: roll,
    price: 8,
    description: 'Crisp, deep-fried wrappers stuffed with seasoned vegetables.',
    category: 'Roll',
    rating: 4.4,
  },
  {
    _id: '7',
    name: 'Chicken Roll',
    image: roll2,
    price: 10,
    description:
      'Tender chicken and spices wrapped in a flaky, golden paratha.',
    category: 'Roll',
    rating: 4.8,
  },
  {
    _id: '8',
    name: 'Egg Roll',
    image: roll3,
    price: 9,
    description:
      'Classic street-style egg roll with crunchy onions and sauces.',
    category: 'Roll',
    rating: 4.5,
  },
  {
    _id: '9',
    name: 'Veg Roll',
    image: roll4,
    price: 7,
    description:
      'Healthy and delicious mixed vegetable filling inside a warm wrap.',
    category: 'Roll',
    rating: 4.1,
  },

  // --- DESSERT CATEGORY ---
  {
    _id: '10',
    name: 'Chocolate Delight',
    image: dessert,
    price: 14,
    description: 'Rich, creamy chocolate dessert to satisfy your sweet tooth.',
    category: 'Dessert',
    rating: 4.9,
  },
  {
    _id: '11',
    name: 'Vanilla Pudding',
    image: dessert2,
    price: 12,
    description: 'Smooth vanilla pudding served with a touch of caramel sauce.',
    category: 'Dessert',
    rating: 4.3,
  },
  {
    _id: '12',
    name: 'Fruit Custard',
    image: dessert3,
    price: 13,
    description:
      'A creamy blend of milk, custard powder, and fresh seasonal fruits.',
    category: 'Dessert',
    rating: 4.6,
  },
  {
    _id: '13',
    name: 'Strawberry Mousse',
    image: dessert4,
    price: 15,
    description: 'Light and airy strawberry mousse made with real fruit puree.',
    category: 'Dessert',
    rating: 4.7,
  },
  {
    _id: '14',
    name: 'Sweet Cream Tart',
    image: dessert5,
    price: 16,
    description:
      'A buttery tart shell filled with sweet, velvety pastry cream.',
    category: 'Dessert',
    rating: 4.5,
  },

  // --- SANDWICH CATEGORY ---
  {
    _id: '15',
    name: 'Club Sandwich',
    image: sandwich,
    price: 12,
    description:
      'Classic double-decker sandwich with layered fillings and fries.',
    category: 'Sandwich',
    rating: 4.6,
  },
  {
    _id: '16',
    name: 'Grilled Cheese Sandwich',
    image: sandwich2,
    price: 9,
    description:
      'Melted premium cheese sandwiched between perfectly toasted bread.',
    category: 'Sandwich',
    rating: 4.4,
  },
  {
    _id: '17',
    name: 'Chicken Sandwich',
    image: sandwich3,
    price: 14,
    description: 'Juicy chicken breast with lettuce, tomato, and mayo.',
    category: 'Sandwich',
    rating: 4.7,
  },
  {
    _id: '18',
    name: 'Veggie Sandwich',
    image: sandwich4,
    price: 10,
    description:
      'Loaded with fresh, crunchy veggies and a spread of mint chutney.',
    category: 'Sandwich',
    rating: 4.2,
  },
  {
    _id: '19',
    name: 'BBQ Chicken Sandwich',
    image: sandwich5,
    price: 15,
    description:
      'Shredded chicken tossed in smoky BBQ sauce, served in fresh bread.',
    category: 'Sandwich',
    rating: 4.8,
  },

  // --- CAKE CATEGORY ---
  {
    _id: '20',
    name: 'Chocolate Cake',
    image: cake,
    price: 18,
    description: 'Decadent chocolate cake layered with rich chocolate fudge.',
    category: 'Cake',
    rating: 4.9,
  },
  {
    _id: '21',
    name: 'Red Velvet Cake',
    image: cake2,
    price: 20,
    description: 'Soft, velvety red cake with a smooth cream cheese frosting.',
    category: 'Cake',
    rating: 4.8,
  },
  {
    _id: '22',
    name: 'Black Forest Cake',
    image: cake3,
    price: 19,
    description:
      'Traditional German cake with whipped cream, cherries, and chocolate shavings.',
    category: 'Cake',
    rating: 4.7,
  },
  {
    _id: '23',
    name: 'Creamy Cupcake',
    image: cup_cake,
    price: 5,
    description:
      'Delightful mini cupcake topped with colorful frosting and sprinkles.',
    category: 'Cake',
    rating: 4.5,
  },

  // --- PASTA CATEGORY ---
  {
    _id: '24',
    name: 'Tomato Pasta',
    image: pasta,
    price: 14,
    description: 'Pasta tossed in a rich, flavorful Italian tomato sauce.',
    category: 'Pasta',
    rating: 4.4,
  },
  {
    _id: '25',
    name: 'Arrabbiata Pasta',
    image: pasta2,
    price: 15,
    description:
      'Spicy pasta dish made with garlic, tomatoes, and dried red chili peppers.',
    category: 'Pasta',
    rating: 4.5,
  },
  {
    _id: '26',
    name: 'Creamy Mushroom Pasta',
    image: pasta3,
    price: 16,
    description:
      'Perfectly cooked pasta drenched in a rich, velvety mushroom cream sauce.',
    category: 'Pasta',
    rating: 4.8,
  },
  {
    _id: '27',
    name: 'Baked Pasta',
    image: pasta4,
    price: 17,
    description:
      'Oven-baked pasta with layers of meat, sauce, and melted mozzarella.',
    category: 'Pasta',
    rating: 4.7,
  },
  {
    _id: '28',
    name: 'Pesto Pasta',
    image: pasta5,
    price: 16,
    description:
      'Pasta coated in a fresh basil pesto sauce, garlic, and pine nuts.',
    category: 'Pasta',
    rating: 4.6,
  },
  {
    _id: '29',
    name: 'White Sauce Pasta',
    image: white_pasta,
    price: 15,
    description:
      'Deliciously creamy pasta prepared in a rich Alfredo white sauce.',
    category: 'Pasta',
    rating: 4.7,
  },

  // --- NOODLE CATEGORY ---
  {
    _id: '30',
    name: 'Chow Mein Noodles',
    image: noodle,
    price: 12,
    description:
      'Stir-fried noodles with crisp vegetables and traditional Asian sauces.',
    category: 'Noodle',
    rating: 4.4,
  },
  {
    _id: '31',
    name: 'Spicy Ramen',
    image: noodle2,
    price: 14,
    description: 'Hot and fiery noodle soup served with a rich, savory broth.',
    category: 'Noodle',
    rating: 4.8,
  },
  {
    _id: '32',
    name: 'Hakka Noodles',
    image: noodle3,
    price: 13,
    description:
      'Indo-Chinese style stir-fried noodles cooked on a high flame.',
    category: 'Noodle',
    rating: 4.5,
  },

  // --- PURE VEG CATEGORY ---
  {
    _id: '33',
    name: 'Veg Platter',
    image: pure_vage,
    price: 16,
    description:
      'A wholesome combination of pure vegetarian dishes and flatbread.',
    category: 'Pure Veg',
    rating: 4.6,
  },
  {
    _id: '34',
    name: 'Paneer Tikka Curry',
    image: pure_vage2,
    price: 15,
    description:
      'Grilled paneer cubes cooked in a rich, aromatic tomato gravy.',
    category: 'Pure Veg',
    rating: 4.8,
  },
  {
    _id: '35',
    name: 'Mix Veg Curry',
    image: pure_vage3,
    price: 12,
    description:
      'A vibrant medley of seasonal vegetables cooked with Indian spices.',
    category: 'Pure Veg',
    rating: 4.3,
  },
  {
    _id: '36',
    name: 'Dal Makhani Platter',
    image: pure_vage4,
    price: 14,
    description:
      'Slow-cooked black lentils in a creamy, buttery gravy served fresh.',
    category: 'Pure Veg',
    rating: 4.7,
  },
];



// ================ food menu details ============ 
export const foodMenuDetails = [
  // === SALAD CATEGORY ===
  {
    _id: '1',
    name: 'Greek Salad',
    image: salad,
    price: 12,
    description: 'A fresh and healthy classic Greek salad with olives and feta cheese.',
    category: 'Salad',
    rating: 4.5,
    details: {
      ingredients: ['Cucumbers', 'Tomatoes', 'Feta Cheese', 'Kalamata Olives', 'Red Onions', 'Olive Oil', 'Oregano'],
      calories: '180 kcal',
      prepTime: '10-15 mins',
      servingSize: '1 Bowl',
      isVeg: true,
      spicyLevel: 'Non-Spicy',
      chefSpecial: false
    }
  },
  {
    _id: '2',
    name: 'Chicken Salad',
    image: chicken_salad,
    price: 15,
    description: 'Grilled chicken breast served over crisp greens and garden vegetables.',
    category: 'Salad',
    rating: 4.7,
    details: {
      ingredients: ['Grilled Chicken Breast', 'Romaine Lettuce', 'Cherry Tomatoes', 'Croutons', 'Parmesan', 'Caesar Dressing'],
      calories: '350 kcal',
      prepTime: '15-20 mins',
      servingSize: '1 Bowl',
      isVeg: false,
      spicyLevel: 'Mild',
      chefSpecial: true
    }
  },
  {
    _id: '3',
    name: 'Garden Salad',
    image: salad2,
    price: 10,
    description: 'Crisp lettuce, tomatoes, cucumbers, and a light vinaigrette.',
    category: 'Salad',
    rating: 4.2,
    details: {
      ingredients: ['Mixed Greens', 'Sliced Cucumbers', 'Roma Tomatoes', 'Carrots', 'House Vinaigrette'],
      calories: '120 kcal',
      prepTime: '10 mins',
      servingSize: '1 Bowl',
      isVeg: true,
      spicyLevel: 'Non-Spicy',
      chefSpecial: false
    }
  },
  {
    _id: '4',
    name: 'Caesar Salad',
    image: salad3,
    price: 13,
    description: 'Traditional Caesar salad with crunchy croutons and parmesan cheese.',
    category: 'Salad',
    rating: 4.6,
    details: {
      ingredients: ['Romaine Lettuce', 'Garlic Croutons', 'Parmesan Cheese', 'Classic Caesar Dressing', 'Black Pepper'],
      calories: '290 kcal',
      prepTime: '12 mins',
      servingSize: '1 Bowl',
      isVeg: true,
      spicyLevel: 'Non-Spicy',
      chefSpecial: false
    }
  },
  {
    _id: '5',
    name: 'Veggie Salad',
    image: vag_salad,
    price: 11,
    description: 'A colorful mix of seasonal vegetables with a tangy dressing.',
    category: 'Salad',
    rating: 4.3,
    details: {
      ingredients: ['Bell Peppers', 'Broccoli', 'Sweet Corn', 'Red Cabbage', 'Lemon-Herb Dressing'],
      calories: '140 kcal',
      prepTime: '15 mins',
      servingSize: '1 Bowl',
      isVeg: true,
      spicyLevel: 'Non-Spicy',
      chefSpecial: false
    }
  },

  // === ROLL CATEGORY ===
  {
    _id: '6',
    name: 'Spring Roll',
    image: roll,
    price: 8,
    description: 'Crisp, deep-fried wrappers stuffed with seasoned vegetables.',
    category: 'Roll',
    rating: 4.4,
    details: {
      ingredients: ['Spring Roll Pastry', 'Shredded Cabbage', 'Carrots', 'Glass Noodles', 'Soy Sauce', 'Sesame Oil'],
      calories: '210 kcal',
      prepTime: '15 mins',
      servingSize: '2 Pieces',
      isVeg: true,
      spicyLevel: 'Mild',
      chefSpecial: false
    }
  },
  {
    _id: '7',
    name: 'Chicken Roll',
    image: roll2,
    price: 10,
    description: 'Tender chicken and spices wrapped in a flaky, golden paratha.',
    category: 'Roll',
    rating: 4.8,
    details: {
      ingredients: ['Flaky Paratha Wrap', 'Spiced Shredded Chicken', 'Sliced Onions', 'Green Chilis', 'Mint Chutney'],
      calories: '420 kcal',
      prepTime: '15-20 mins',
      servingSize: '1 Roll',
      isVeg: false,
      spicyLevel: 'Medium',
      chefSpecial: true
    }
  },
  {
    _id: '8',
    name: 'Egg Roll',
    image: roll3,
    price: 9,
    description: 'Classic street-style egg roll with crunchy onions and sauces.',
    category: 'Roll',
    rating: 4.5,
    details: {
      ingredients: ['Tortilla/Paratha', 'Fried Egg', 'Sliced Onions', 'Cucumber', 'Tomato Ketchup', 'Chili Sauce'],
      calories: '310 kcal',
      prepTime: '10 mins',
      servingSize: '1 Roll',
      isVeg: false,
      spicyLevel: 'Medium',
      chefSpecial: false
    }
  },
  {
    _id: '9',
    name: 'Veg Roll',
    image: roll4,
    price: 7,
    description: 'Healthy and delicious mixed vegetable filling inside a warm wrap.',
    category: 'Roll',
    rating: 4.1,
    details: {
      ingredients: ['Wheat Wrap', 'Mashed Potatoes', 'Green Peas', 'Carrots', 'Spices', 'Mayo'],
      calories: '260 kcal',
      prepTime: '12 mins',
      servingSize: '1 Roll',
      isVeg: true,
      spicyLevel: 'Mild',
      chefSpecial: false
    }
  },

  // === DESSERT CATEGORY ===
  {
    _id: '10',
    name: 'Chocolate Delight',
    image: dessert,
    price: 14,
    description: 'Rich, creamy chocolate dessert to satisfy your sweet tooth.',
    category: 'Dessert',
    rating: 4.9,
    details: {
      ingredients: ['Dark Chocolate', 'Heavy Cream', 'Cocoa Powder', 'Sugar', 'Vanilla Extract'],
      calories: '450 kcal',
      prepTime: '10 mins',
      servingSize: '1 Cup',
      isVeg: true,
      spicyLevel: 'Non-Spicy',
      chefSpecial: true
    }
  },
  {
    _id: '11',
    name: 'Vanilla Pudding',
    image: dessert2,
    price: 12,
    description: 'Smooth vanilla pudding served with a touch of caramel sauce.',
    category: 'Dessert',
    rating: 4.3,
    details: {
      ingredients: ['Whole Milk', 'Vanilla Bean Paste', 'Sugar', 'Cornstarch', 'Caramel Drizzle'],
      calories: '280 kcal',
      prepTime: '15 mins',
      servingSize: '1 Serving',
      isVeg: true,
      spicyLevel: 'Non-Spicy',
      chefSpecial: false
    }
  },
  {
    _id: '12',
    name: 'Fruit Custard',
    image: dessert3,
    price: 13,
    description: 'A creamy blend of milk, custard powder, and fresh seasonal fruits.',
    category: 'Dessert',
    rating: 4.6,
    details: {
      ingredients: ['Milk', 'Custard Powder', 'Apple Cubes', 'Banana', 'Pomegranate Seeds', 'Grapes'],
      calories: '220 kcal',
      prepTime: '20 mins',
      servingSize: '1 Bowl',
      isVeg: true,
      spicyLevel: 'Non-Spicy',
      chefSpecial: false
    }
  },
  {
    _id: '13',
    name: 'Strawberry Mousse',
    image: dessert4,
    price: 15,
    description: 'Light and airy strawberry mousse made with real fruit puree.',
    category: 'Dessert',
    rating: 4.7,
    details: {
      ingredients: ['Fresh Strawberry Puree', 'Gelatin', 'Wipped Cream', 'Powdered Sugar'],
      calories: '310 kcal',
      prepTime: '15 mins',
      servingSize: '1 Glass',
      isVeg: true,
      spicyLevel: 'Non-Spicy',
      chefSpecial: true
    }
  },
  {
    _id: '14',
    name: 'Sweet Cream Tart',
    image: dessert5,
    price: 16,
    description: 'A buttery tart shell filled with sweet, velvety pastry cream.',
    category: 'Dessert',
    rating: 4.5,
    details: {
      ingredients: ['Flour Crust', 'Butter', 'Egg Yolks', 'Pastry Cream', 'Glazed Berries'],
      calories: '380 kcal',
      prepTime: '25 mins',
      servingSize: '1 Slice',
      isVeg: false,
      spicyLevel: 'Non-Spicy',
      chefSpecial: false
    }
  },

  // === SANDWICH CATEGORY ===
  {
    _id: '15',
    name: 'Club Sandwich',
    image: sandwich,
    price: 12,
    description: 'Classic double-decker sandwich with layered fillings and fries.',
    category: 'Sandwich',
    rating: 4.6,
    details: {
      ingredients: ['White Bread Slices', 'Smoked Turkey/Chicken', 'Toasted Bacon', 'Lettuce', 'Tomato', 'Mayonnaise'],
      calories: '520 kcal',
      prepTime: '15 mins',
      servingSize: 'Full Sandwich + Fries',
      isVeg: false,
      spicyLevel: 'Mild',
      chefSpecial: false
    }
  },
  {
    _id: '16',
    name: 'Grilled Cheese Sandwich',
    image: sandwich2,
    price: 9,
    description: 'Melted premium cheese sandwiched between perfectly toasted bread.',
    category: 'Sandwich',
    rating: 4.4,
    details: {
      ingredients: ['Sourdough Bread', 'Cheddar Cheese', 'Mozzarella Cheese', 'Salted Butter'],
      calories: '410 kcal',
      prepTime: '10 mins',
      servingSize: '1 Piece',
      isVeg: true,
      spicyLevel: 'Non-Spicy',
      chefSpecial: false
    }
  },
  {
    _id: '17',
    name: 'Chicken Sandwich',
    image: sandwich3,
    price: 14,
    description: 'Juicy chicken breast with lettuce, tomato, and mayo.',
    category: 'Sandwich',
    rating: 4.7,
    details: {
      ingredients: ['Brioche Bun', 'Pan-Seared Chicken Breast', 'Lettuce', 'Tomato Slices', 'Garlic Mayo'],
      calories: '460 kcal',
      prepTime: '15 mins',
      servingSize: '1 Burger Bun Style',
      isVeg: false,
      spicyLevel: 'Mild',
      chefSpecial: false
    }
  },
  {
    _id: '18',
    name: 'Veggie Sandwich',
    image: sandwich4,
    price: 10,
    description: 'Loaded with fresh, crunchy veggies and a spread of mint chutney.',
    category: 'Sandwich',
    rating: 4.2,
    details: {
      ingredients: ['Brown Bread', 'Cucumber Slices', 'Beetroot', 'Onions', 'Spicy Mint Chutney', 'Sandwich Masala'],
      calories: '230 kcal',
      prepTime: '10 mins',
      servingSize: '1 Piece',
      isVeg: true,
      spicyLevel: 'Medium',
      chefSpecial: false
    }
  },
  {
    _id: '19',
    name: 'BBQ Chicken Sandwich',
    image: sandwich5,
    price: 15,
    description: 'Shredded chicken tossed in smoky BBQ sauce, served in fresh bread.',
    category: 'Sandwich',
    rating: 4.8,
    details: {
      ingredients: ['Sub Baguette Bread', 'Pulled Chicken breast', 'Smoky BBQ Sauce', 'Pickled Jalapenos', 'Melted Provolone'],
      calories: '580 kcal',
      prepTime: '20 mins',
      servingSize: '1 Footlong Sub',
      isVeg: false,
      spicyLevel: 'Medium',
      chefSpecial: true
    }
  },

  // === CAKE CATEGORY ===
  {
    _id: '20',
    name: 'Chocolate Cake',
    image: cake,
    price: 18,
    description: 'Decadent chocolate cake layered with rich chocolate fudge.',
    category: 'Cake',
    rating: 4.9,
    details: {
      ingredients: ['Cocoa Powder', 'Flour', 'Buttermilk', 'Belgian Chocolate Fudge', 'Espresso Powder'],
      calories: '540 kcal',
      prepTime: '10 mins',
      servingSize: '1 Slice',
      isVeg: true,
      spicyLevel: 'Non-Spicy',
      chefSpecial: true
    }
  },
  {
    _id: '21',
    name: 'Red Velvet Cake',
    image: cake2,
    price: 20,
    description: 'Soft, velvety red cake with a smooth cream cheese frosting.',
    category: 'Cake',
    rating: 4.8,
    details: {
      ingredients: ['Cocoa', 'Beetroot Extract/Red Color', 'Cream Cheese Frosting', 'Vanilla', 'Butter'],
      calories: '510 kcal',
      prepTime: '10 mins',
      servingSize: '1 Slice',
      isVeg: true,
      spicyLevel: 'Non-Spicy',
      chefSpecial: false
    }
  },
  {
    _id: '22',
    name: 'Black Forest Cake',
    image: cake3,
    price: 19,
    description: 'Traditional German cake with whipped cream, cherries, and chocolate shavings.',
    category: 'Cake',
    rating: 4.7,
    details: {
      ingredients: ['Chocolate Sponge Layers', 'Sour Cherries', 'Kirsch/Cherry Syrup', 'Whipped Cream', 'Chocolate Curls'],
      calories: '490 kcal',
      prepTime: '12 mins',
      servingSize: '1 Slice',
      isVeg: false,
      spicyLevel: 'Non-Spicy',
      chefSpecial: false
    }
  },
  {
    _id: '23',
    name: 'Creamy Cupcake',
    image: cup_cake,
    price: 5,
    description: 'Delightful mini cupcake topped with colorful frosting and sprinkles.',
    category: 'Cake',
    rating: 4.5,
    details: {
      ingredients: ['Vanilla Sponge', 'Buttercream Frosting', 'Rainbow Sprinkles'],
      calories: '190 kcal',
      prepTime: '5 mins',
      servingSize: '1 Piece',
      isVeg: true,
      spicyLevel: 'Non-Spicy',
      chefSpecial: false
    }
  },

  // === PASTA CATEGORY ===
  {
    _id: '24',
    name: 'Tomato Pasta',
    image: pasta,
    price: 14,
    description: 'Pasta tossed in a rich, flavorful Italian tomato sauce.',
    category: 'Pasta',
    rating: 4.4,
    details: {
      ingredients: ['Penne Pasta', 'San Marzano Tomatoes', 'Garlic', 'Fresh Basil', 'Olive Oil', 'Parmesan'],
      calories: '380 kcal',
      prepTime: '15 mins',
      servingSize: '1 Plate',
      isVeg: true,
      spicyLevel: 'Mild',
      chefSpecial: false
    }
  },
  {
    _id: '25',
    name: 'Arrabbiata Pasta',
    image: pasta2,
    price: 15,
    description: 'Spicy pasta dish made with garlic, tomatoes, and dried red chili peppers.',
    category: 'Pasta',
    rating: 4.5,
    details: {
      ingredients: ['Penne Pasta', 'Crushed Tomatoes', 'Garlic Flakes', 'Dried Red Chili Peppers', 'Parsley'],
      calories: '390 kcal',
      prepTime: '15 mins',
      servingSize: '1 Plate',
      isVeg: true,
      spicyLevel: 'Hot',
      chefSpecial: false
    }
  },
  {
    _id: '26',
    name: 'Creamy Mushroom Pasta',
    image: pasta3,
    price: 16,
    description: 'Perfectly cooked pasta drenched in a rich, velvety mushroom cream sauce.',
    category: 'Pasta',
    rating: 4.8,
    details: {
      ingredients: ['Fettuccine Pasta', 'Button Mushrooms', 'Heavy Cream', 'Garlic', 'White Wine Reduction', 'Parmesan'],
      calories: '590 kcal',
      prepTime: '20 mins',
      servingSize: '1 Plate',
      isVeg: true,
      spicyLevel: 'Non-Spicy',
      chefSpecial: true
    }
  },
  {
    _id: '27',
    name: 'Baked Pasta',
    image: pasta4,
    price: 17,
    description: 'Oven-baked pasta with layers of meat, sauce, and melted mozzarella.',
    category: 'Pasta',
    rating: 4.7,
    details: {
      ingredients: ['Rigatoni Pasta', 'Minced Beef Sauce', 'Marinara', 'Mozzarella Cheese', 'Ricotta'],
      calories: '670 kcal',
      prepTime: '25 mins',
      servingSize: '1 Baking Dish Bowl',
      isVeg: false,
      spicyLevel: 'Mild',
      chefSpecial: false
    }
  },
  {
    _id: '28',
    name: 'Pesto Pasta',
    image: pasta5,
    price: 16,
    description: 'Pasta coated in a fresh basil pesto sauce, garlic, and pine nuts.',
    category: 'Pasta',
    rating: 4.6,
    details: {
      ingredients: ['Spaghetti', 'Fresh Basil Leaves', 'Pine Nuts', 'Garlic', 'Extra Virgin Olive Oil', 'Pecorino Romano'],
      calories: '460 kcal',
      prepTime: '15 mins',
      servingSize: '1 Plate',
      isVeg: true,
      spicyLevel: 'Non-Spicy',
      chefSpecial: false
    }
  },
  {
    _id: '29',
    name: 'White Sauce Pasta',
    image: white_pasta,
    price: 15,
    description: 'Deliciously creamy pasta prepared in a rich Alfredo white sauce.',
    category: 'Pasta',
    rating: 4.7,
    details: {
      ingredients: ['Penne Pasta', 'Butter', 'Heavy Whipping Cream', 'Garlic Paste', 'Black Pepper', 'Parmesan'],
      calories: '540 kcal',
      prepTime: '15-18 mins',
      servingSize: '1 Plate',
      isVeg: true,
      spicyLevel: 'Non-Spicy',
      chefSpecial: false
    }
  },

  // === NOODLE CATEGORY ===
  {
    _id: '30',
    name: 'Chow Mein Noodles',
    image: noodle,
    price: 12,
    description: 'Stir-fried noodles with crisp vegetables and traditional Asian sauces.',
    category: 'Noodle',
    rating: 4.4,
    details: {
      ingredients: ['Egg Noodles', 'Shredded Cabbage', 'Bell Peppers', 'Dark Soy Sauce', 'Oyster Sauce', 'Garlic'],
      calories: '410 kcal',
      prepTime: '15 mins',
      servingSize: '1 Plate',
      isVeg: false,
      spicyLevel: 'Mild',
      chefSpecial: false
    }
  },
  {
    _id: '31',
    name: 'Spicy Ramen',
    image: noodle2,
    price: 14,
    description: 'Hot and fiery noodle soup served with a rich, savory broth.',
    category: 'Noodle',
    rating: 4.8,
    details: {
      ingredients: ['Ramen Noodles', 'Spicy Gochujang Broth', 'Soft Boiled Egg', 'Nori Sheet', 'Chili Oil', 'Scallions'],
      calories: '520 kcal',
      prepTime: '20 mins',
      servingSize: '1 Large Soup Bowl',
      isVeg: false,
      spicyLevel: 'Hot',
      chefSpecial: true
    }
  },
  {
    _id: '32',
    name: 'Hakka Noodles',
    image: noodle3,
    price: 13,
    description: 'Indo-Chinese style stir-fried noodles cooked on a high flame.',
    category: 'Noodle',
    rating: 4.5,
    details: {
      ingredients: ['Wheat Noodles', 'French Beans', 'Carrots', 'Capsicum', 'White Pepper', 'Vinegar', 'Szechuan Sauce'],
      calories: '380 kcal',
      prepTime: '12 mins',
      servingSize: '1 Plate',
      isVeg: true,
      spicyLevel: 'Medium',
      chefSpecial: false
    }
  },

  // === PURE VEG CATEGORY ===
  {
    _id: '33',
    name: 'Veg Platter',
    image: pure_vage,
    price: 16,
    description: 'A wholesome combination of pure vegetarian dishes and flatbread.',
    category: 'Pure Veg',
    rating: 4.6,
    details: {
      ingredients: ['Jeera Rice', 'Butter Roti', 'Mix Veg Sabzi', 'Dal Fry', 'Salad', 'Gulab Jamun'],
      calories: '720 kcal',
      prepTime: '25-30 mins',
      servingSize: '1 Thali (Platter)',
      isVeg: true,
      spicyLevel: 'Medium',
      chefSpecial: false
    }
  },
  {
    _id: '34',
    name: 'Paneer Tikka Curry',
    image: pure_vage2,
    price: 15,
    description: 'Grilled paneer cubes cooked in a rich, aromatic tomato gravy.',
    category: 'Pure Veg',
    rating: 4.8,
    details: {
      ingredients: ['Cottage Cheese (Paneer)', 'Yogurt Marination', 'Tandoori Masala', 'Cashew Paste', 'Tomato Puree', 'Kasturi Methi'],
      calories: '480 kcal',
      prepTime: '20 mins',
      servingSize: '1 Bowl',
      isVeg: true,
      spicyLevel: 'Medium',
      chefSpecial: true
    }
  },
  {
    _id: '35',
    name: 'Mix Veg Curry',
    image: pure_vage3,
    price: 12,
    description: 'A vibrant medley of seasonal vegetables cooked with Indian spices.',
    category: 'Pure Veg',
    rating: 4.3,
    details: {
      ingredients: ['Cauliflower', 'Green Peas', 'Carrots', 'Beans', 'Onion-Tomato Gravy', 'Garam Masala'],
      calories: '310 kcal',
      prepTime: '20 mins',
      servingSize: '1 Bowl',
      isVeg: true,
      spicyLevel: 'Medium',
      chefSpecial: false
    }
  },
  {
    _id: '36',
    name: 'Dal Makhani Platter',
    image: pure_vage4,
    price: 14,
    description: 'Slow-cooked black lentils in a creamy, buttery gravy served fresh.',
    category: 'Pure Veg',
    rating: 4.7,
    details: {
      ingredients: ['Black Lentils (Urad Dal)', 'Kidney Beans (Rajma)', 'Amul Butter', 'Fresh Cream', 'Kashmiri Chili'],
      calories: '550 kcal',
      prepTime: '25 mins',
      servingSize: 'Dal Bowl with 2 Laccha Paratha',
      isVeg: true,
      spicyLevel: 'Mild',
      chefSpecial: true
    }
  }
];