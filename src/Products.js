const productsArray = [
    {
        id: 'price_1MhA8xSJ0IlIJKWf6yRCHFoW',
        name: 'Doom Eternals',
        price: 599,
        image: 'https://i.pinimg.com/564x/6e/70/0d/6e700dad524abbb4375de685744845c5.jpg',
    },
    {
        id: "price_1MhAAtSJ0IlIJKWfL2rMtB5j",
        name: 'CyberPunks',
        price: 400,
        image: 'https://i.pinimg.com/236x/60/ae/00/60ae00b1fa79f18fd7bb6ae493952c91.jpg',
    },
    {
        id: "price_1MhAG9SJ0IlIJKWfsjyntWyI",
        name: 'Gta 5',
        price: 799,
        image: 'https://i.pinimg.com/236x/bd/4f/57/bd4f57635b07586622ceab55156438c4.jpg',
    },
    {
        id: "price_1MhAGtSJ0IlIJKWfIdMjQneJ",
        name: 'RDR2',
        price: 800,
        image: 'https://i.pinimg.com/236x/99/ff/94/99ff94931e9361201ad10153da34f449.jpg',
    },
    {
        id: "price_1MhAHXSJ0IlIJKWffkt5Os31",
        name: 'Call Of Duty',
        price: 999,
        image: 'https://i.pinimg.com/236x/cb/3b/01/cb3b0148b105af2d212824b1fd3f8f29.jpg',
    },
    {
        id: "price_1MhAI3SJ0IlIJKWfxCDuEujF",
        name: 'PUBG',
        price: 150,
        image: 'https://i.pinimg.com/236x/5d/a9/b5/5da9b5d4870660ad205efbcffe434ada.jpg',
    },
    {
        id: "price_1MhAKGSJ0IlIJKWffIAwvJWq",
        name: 'Gaming Chair',
        price: 5000,
        image: 'https://i.pinimg.com/236x/7a/3a/a6/7a3aa6c952a78c545f41228dbffa974c.jpg',
    },
    {
        id: "price_1MhAKYSJ0IlIJKWf9yb2mcKx",
        name: 'Plant vs Zombies Hoodies',
        price: 100,
        image: 'https://i.pinimg.com/236x/ba/db/8d/badb8d595d1bbdcfe14c77327fd73d34.jpg',
    },
    {
        id: "price_1MhAKnSJ0IlIJKWfOCiIskvt",
        name: 'Gaming Headphones',
        price: 2000,
        image: 'https://i.pinimg.com/236x/aa/b9/00/aab900cef426acbd56857847b14b136c.jpg',
    },
    {
        id: "price_1MhAL0SJ0IlIJKWf0a3V77GP",
        name: 'Gaming Keyboard and Mouse',
        price: 3000,
        image: 'https://i.pinimg.com/236x/bd/95/f2/bd95f2f7d1a9008dd6b4d16bd83222f6.jpg',
    },
    {
        id: "price_1MhALFSJ0IlIJKWfLFIltYuf",
        name: 'Call Of Duty Hoodie',
        price: 900,
        image: 'https://i.pinimg.com/236x/bb/f3/c7/bbf3c7a61117278cfe20c86fd44265ad.jpg',
    },
    {
        id: "price_1MhALTSJ0IlIJKWfjX8KqjXd",
        name: 'PS5',
        price: 20000,
        image: 'https://i.pinimg.com/236x/db/46/ed/db46ed12a6e6bdce2c4bb34135580041.jpg',
    }
];

function getProductData(id) {
    let ProductData = productsArray.find(product =>
        product.id === id)

    if (ProductData === undefined) {
        console.log('product data not found from id ' + id);
        return undefined;
    }

    return ProductData;
}

export { productsArray, getProductData };