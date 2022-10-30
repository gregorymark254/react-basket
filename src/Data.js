let allProducts = [
{
    id: 1,
    title: 'Carrots ',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMoTJVF7SHWI0M09MEdF3uiffP65o_isC-ZQ&usqp=CAU',
    price: 30,
    count: 1,
    isInterest: false,
    category: 'Vegetables',
},
{
    id: 2,
    title: 'Egg Plant',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAfKHgP1HzEF3d60BC5VeRYp337YavrQd9LA&usqp=CAU',
    price: 10,
    count: 1,
    isInterest: false,
    category: 'Vegetables'
},
{
    id: 3,
    title: 'Broccoli',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMn4Q3XN3Eb2SoWXi8iilsM7zVtXp9aJuddw&usqp=CAU',
    price: 30,
    count: 1,
    isInterest: false,
    category: 'Vegetables'
},
{
    id: 4,
    title: 'Spinach',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrRKA6LKKkhUOdFFMJQ3QDnQoX_dfikv7Kbw&usqp=CAU',
    price: 20,
    count: 1,
    isInterest: false,
    category: 'Vegetables'
},
{
    id: 5,
    title: 'Lady Fingers',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNpzPizVKpkyLLkmWsHztkY71mI9b-jWB2jG9Fsgb1shF8s6iEs_2VyyZwrcu3TpfqTp8&usqp=CAU',
    price: 30,
    count: 1,
    isInterest: false,
    category: 'Vegetables'
},
{
    id: 6,
    title: 'White Carrots',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUgj-mrT9ulkZSO3uw9LiDPbY-9IYRxuWoUzAZKiLBRFr9y0yqU8Q1xjS_yccAmkM2R88&usqp=CAU',
    price: 30,
    count: 1,
    isInterest: false,
    category: 'Vegetables'
},
{
    id: 7,
    title: 'Pears',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8UjGMPvn971pi_EhIoCUhGdEBW5hnV_mfgA&usqp=CAU',
    price: 5,
    count: 1,
    isInterest: false,
    category: 'Fruits'
},
{
    id: 8,
    title: 'Banana',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT68b0O5wgNnMvg2hrPVjD4cRADRiFNcmXHvQ&usqp=CAU',
    price: 10,
    count: 1,
    isInterest: false,
    category: 'Fruits'
},
{
    id: 9,
    title: 'Orange',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNa4ca-4JlwKZ1VSIDgkqwPJwNbu95U_Q47A&usqp=CAU',
    price: 5,
    count: 1,
    isInterest: false,
    category: 'Fruits'
},
{
    id: 10,
    title: 'Grapes',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPIeTrjx_THf27I0_M-q2umQIFYV63G68iyg&usqp=CAU',
    price: 50,
    count: 1,
    isInterest: false,
    category: 'Fruits'
},
{
    id: 11,
    title: 'Pinapples',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkd2GplUKvhcqEuivmZHZrvm9iXbRRZgmb1A&usqp=CAU',
    price: 50,
    count: 1,
    isInterest: false,
    category: 'Fruits'
},
{
    id: 12,
    title: 'Ovacado',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwgMy4XdTkdm_i4g-9cDvP5sbhC2CUdGjqfg&usqp=CAU',
    price: 30,
    count: 1,
    isInterest: false,
    category: 'Fruits'
},
{
    id: 13,
    title: 'Pawpaw',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM-Cs0C6AqVD3sgrtR-nnWJODr842gupe4Zg&usqp=CAU',
    price: 40,
    count: 1,
    isInterest: false,
    category: 'Fruits'
},
{
    id: 14,
    title: 'Strawberry',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNxkQfX1RYRUEnmtkb3ezSl9X8p4JzEJOtZQ&usqp=CAU',
    price: 30,
    count: 1,
    isInterest: false,
    category: 'Fruits'
},
{
    id: 15,
    title: 'Mangos',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqY0ZBgw1Em86qK6ahsMmqoL1jjARqaO6tYA&usqp=CAU',
    price: 10,
    count: 1,
    isInterest: false,
    category: 'Fruits'
},
{
    id: 16,
    title: 'Coconuts',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSs3abpT8yPIEep2lLPnBXTmuCon41tYUh1w&usqp=CAU',
    price: 35,
    count: 1,
    isInterest: false,
    category: 'Nuts'
},
{
    id: 17,
    title: 'Peanuts',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKOKGWmd-O3wdBNsmWckzfhCX5mkYGGGwprg&usqp=CAU',
    price: 100,
    count: 1,
    isInterest: false,
    category: 'Nuts'
},
{
    id: 18,
    title: 'Marcona Almond',
    image: 'https://www.jessicagavin.com/wp-content/uploads/2020/09/types-of-nuts-marcona-almonds.jpg',
    price: 70,
    count: 1,
    isInterest: false,
    category: 'Nuts'
},
{
    id: 19,
    title: 'Almonds ',
    image: 'https://www.jessicagavin.com/wp-content/uploads/2020/09/types-of-nuts-almonds.jpg',
    price: 30,
    count: 1,
    isInterest: false,
    category: 'Nuts'
},
{
    id: 20,
    title: 'Brazil Nuts',
    image: 'https://www.jessicagavin.com/wp-content/uploads/2020/09/types-of-nuts-brazil-nuts.jpg',
    price: 30,
    count: 1,
    isInterest: false,
    category: 'Nuts'
},
{
    id: 21,
    title: 'Cashew Nuts',
    image: 'https://www.jessicagavin.com/wp-content/uploads/2020/09/types-of-nuts-cashews.jpg',
    price: 50,
    count: 1,
    isInterest: false,
    category: 'Nuts'
},
{
    id: 22,
    title: 'Chestnuts',
    image: 'https://www.jessicagavin.com/wp-content/uploads/2020/09/types-of-nuts-chestnuts.jpg',
    price: 40,
    count: 1,
    isInterest: false,
    category: 'Nuts'
},
{
    id: 23,
    title: 'Hazel Nuts',
    image: 'https://www.jessicagavin.com/wp-content/uploads/2020/09/types-of-nuts-hazelnuts.jpg',
    price: 20,
    count: 1,
    isInterest: false,
    category: 'Nuts'
},
{
    id: 24,
    title: 'Macademia Nuts',
    image: 'https://www.jessicagavin.com/wp-content/uploads/2020/09/types-of-nuts-macadamia.jpg',
    price: 60,
    count: 1,
    isInterest: false,
    category: 'Nuts'
},
{
    id: 25,
    title: 'Peacans',
    image: 'https://www.jessicagavin.com/wp-content/uploads/2020/09/types-of-nuts-pecans.jpg',
    price: 20,
    count: 1,
    isInterest: false,
    category: 'Nuts'
},
{
    id: 26,
    title: 'Walnuts',
    image: 'https://www.jessicagavin.com/wp-content/uploads/2020/09/types-of-nuts-walnuts.jpg',
    price: 30,
    count: 1,
    isInterest: false,
    category: 'Nuts'
},
{
    id: 27,
    title: 'Kidney Beans',
    image: 'https://www.wellcurve.in/blog/wp-content/uploads/2021/05/Kidney-beans.jpg',
    price: 100,
    count: 1,
    isInterest: false,
    category: 'Beans'
},
{
    id: 28,
    title: 'Black Beans',
    image: 'https://www.wellcurve.in/blog/wp-content/uploads/2021/05/Black-Beans.jpg',
    price: 80,
    count: 1,
    isInterest: false,
    category: 'Beans'
},
{
    id: 29,
    title: 'Chickpeas',
    image: 'https://www.wellcurve.in/blog/wp-content/uploads/2021/05/Chickpeas.jpg',
    price: 50,
    count: 1,
    isInterest: false,
    category: 'Beans'
},{
    id: 30,
    title: 'Soy Beans',
    image: 'https://www.wellcurve.in/blog/wp-content/uploads/2021/05/Soybeans.jpg',
    price: 100,
    count: 1,
    isInterest: false,
    category: 'Beans'
},{
    id: 31,
    title: 'Pinto Beans',
    image: 'https://www.wellcurve.in/blog/wp-content/uploads/2021/05/Pinto-Beans.jpg',
    price: 90,
    count: 1,
    isInterest: false,
    category: 'Beans'
},
{
    id: 32,
    title: 'Lentils',
    image: 'https://www.wellcurve.in/blog/wp-content/uploads/2021/05/Lentils.jpg',
    price: 60,
    count: 1,
    isInterest: false,
    category: 'Beans'
},
{
    id: 33,
    title: 'Navy',
    image: 'https://www.jessicagavin.com/wp-content/uploads/2020/05/types-of-beans-navy-600x400.jpg',
    price: 60,
    count: 1,
    isInterest: false,
    category: 'Beans'
},{
    id: 34,
    title: 'Peas',
    image: 'https://www.jessicagavin.com/wp-content/uploads/2020/05/types-of-beans-split-peas-600x400.jpg',
    price: 60,
    count: 1,
    isInterest: false,
    category: 'Beans'
},{
    id: 35,
    title: 'Fava Beans',
    image: 'https://www.jessicagavin.com/wp-content/uploads/2020/05/types-of-beans-fava-600x400.jpg',
    price: 60,
    count: 1,
    isInterest: false,
    category: 'Beans'
},
]

export default allProducts