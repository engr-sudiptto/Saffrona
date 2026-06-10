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