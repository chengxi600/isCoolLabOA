export interface MenuItemProps {
    id: number,
    title: string,
    image: string,
    description: string,
    price: number,
}

export const riceData: MenuItemProps[] = [
    {
        id: 1,
        title: 'Shrimp and Chorizo Paella',
        image: 'https://static01.nyt.com/images/2023/10/24/multimedia/MB-Paella-Master-Recipe-vwjm/MB-Paella-Master-Recipe-vwjm-master768.jpg?width=1280&quality=75&auto=webp',
        description: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
        price: 10
    },
    {
        id: 2,
        title: 'Chicken and Rice',
        image: 'https://iowagirleats.com/wp-content/uploads/2020/02/One-Pot-Chicken-and-Rice-iowagirleats-Hero1.jpg',
        description: 'Part risotto (without all the stirring) and part soup, this creamy chicken and rice recipe is simple, comforting, and made entirely in one pot with fridge and pantry staples. And lucky for you and me — it tastes nothing like gruel!',
        price: 12
    },
    {
        id: 3,
        title: 'Japanese Omurice',
        image: 'https://www.justonecookbook.com/wp-content/uploads/2024/05/Omurice-8920-I-3.jpg',
        description: 'Japanese omurice (オムライス) is a thin, soft-cooked omelette wrapped around seasoned Japanese ketchup rice (ケチャップライス) or chicken rice (チキンライス). The name itself is a catchy Japanese loanword that blends “omelette” and “rice.”',
        price: 15
    }
]

export const noodleData: MenuItemProps[] = [
    {
        id: 4,
        title: 'Macaroni and Cheese',
        image: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2022%2F03%2F19%2F238691-Simple-Macaroni-And-Cheese-mfs_006.jpg&q=60&c=sc&poi=auto&orient=true&h=512',
        description: 'Quick, easy, and tasty macaroni and cheese dish. Fancy, designer mac and cheese often costs forty or fifty dollars to prepare when you have so many expensive cheeses, but they aren\'t always the best tasting. This simple recipe is cheap and tasty.',
        price: 10
    },
    {
        id: 5,
        title: 'Pad Thai',
        image: 'https://www.recipetineats.com/tachyon/2018/05/Chicken-Pad-Thai_9.jpg?resize=900%2C1260&zoom=1',
        description: 'Pad Thai is stir-fry dish made with rice noodles, shrimp, chicken, or tofu, peanuts, a scrambled egg and bean sprouts. The ingredients are sautéed together in a wok and tossed in a delicious Pad Thai sauce. It’s a common street food in Thailand and one of the most popular menu items at Thai restaurants around the country.',
        price: 12
    },
    {
        id: 6,
        title: '炸酱面',
        image: 'https://omnivorescookbook.com/wp-content/uploads/2022/06/220608_Zha-Jiang-Mian_3.jpg',
        description: 'Zha Jiang Mian (炸酱面), or translated literally, fried sauce noodles, is one of the most classic and famous dishes in Beijing cuisine. It’s not as fancy or well-known as Peking Duck, but if you travel to Beijing, locals will always recommend this dish to you.',
        price: 15
    }
]

export const drinkData: MenuItemProps[] = [
    {
        id: 7,
        title: 'Mojito',
        image: 'https://cdn.loveandlemons.com/wp-content/uploads/2020/07/mojito-recipe-580x754.jpg',
        description: 'If you\'re in the mood for a fun summer drink, this mint mojito recipe is just what you need! It\'s refreshing, delicious, and super easy to make.',
        price: 5
    },
    {
        id: 8,
        title: 'Tiger Sugar Bubble Tea',
        image: 'https://i0.wp.com/southjerseyfoodscene.com/wp-content/uploads/2021/12/Tiger-Sugar-Tiger-Strip-Bubble-Tea.jpg?resize=578%2C720',
        description: 'Our Tiger Sugar drinks not only taste good but tell our unique story with “tiger stripes” that are infused onto all our drinks with unique hand-poured syrups.',
        price: 6
    },
    {
        id: 9,
        title: 'Passion Fruit Iced Tea',
        image: 'https://www.girlgonegourmet.com/wp-content/uploads/2022/04/Passion-Fruit-Iced-Tea-27.jpg',
        description: 'Because we’re feeling all fancy-like and ready to get our refreshing drink game going for the summer, I present to you passion fruit iced tea. It’s the perfect drink for a hot summer day – it’s tropical, sweet, and easier to make than you think!',
        price: 7
    }
]

export const allMenuData = [
    ...riceData,
    ...noodleData,
    ...drinkData
]