const fs = require('fs');

const restaurants = [
    {
        "id": "1",
        "name": "Moksa Brewing",
        "priceRange": "$$",
        "imageSrc": "/images/1-Moksa.jpg",
        "imageDescription": "A photo of two beer",
        "description": "Famous Lager",
        "menu": [
            {
                "item": "Ale",
                "price": 9
            },
            {
                "item": "Blonde",
                "price": 4
            },
            {
                "item": "Lager",
                "price": 15
            }
        ]
    },
    {
        "id": "2",
        "name": "Out of Bounds Brewing Company",
        "priceRange": "$",
        "imageSrc": "/images/2-outofbounds.jpg",
        "imageDescription": "A photo of a flight of beers",
        "description": "Amazing Ales",
        "menu": [
            {
                "item": "IPA",
                "price": 4
            },
            {
                "item": "Stout",
                "price": 4
            },
            {
                "item": "Pilsener",
                "price": 6
            }
        ]
    },
    {
        "id": "3",
        "name": "The Monk’s Cellar",
        "priceRange": "$$",
        "imageSrc": "/images/3-Monks.jpg",
        "imageDescription": "A photo of a cold beer",
        "description": "Try our old fashion",
        "menu": [
            {
                "item": "Amber",
                "price": 10
            },
            {
                "item": "Brown",
                "price": 12
            },
            {
                "item": "Old fashioned",
                "price": 15
            }
        ]
    },
    {
        "id": "4",
        "name": "Loomis Basin Brewing Company",
        "priceRange": "$$",
        "imageSrc": "/images/4-Loomis.jpg",
        "imageDescription": "A photo of a cold beer",
        "description": "Great IPAs",
        "menu": [
            {
                "item": "IPA",
                "price": 7
            },
            {
                "item": "Stout",
                "price": 7
            },
            {
                "item": "Blonde",
                "price": 7
            }
        ]
    },
    {
        "id": "5",
        "name": "Palm Tree Brewing",
        "priceRange": "$$$",
        "imageSrc": "/images/5-Palm.jpg",
        "imageDescription": "A photo of a cold beer",
        "description": "Beer to relax",
        "menu": [
            {
                "item": "Pilsner",
                "price": 8
            },
            {
                "item": "Honey Mead",
                "price": 3
            },
            {
                "item": "Lager",
                "price": 15
            }
        ]
    },
    {
        "id": "6",
        "name": "Kathrin’s Biergarten",
        "priceRange": "$",
        "imageSrc": "/images/6-Kathrins.jpg",
        "imageDescription": "A photo of a cold beer",
        "description": "Feel at home at Kathrin's",
        "menu": [
            {
                "item": "IPA",
                "price": 7
            },
            {
                "item": "Wheat",
                "price": 6
            },
            {
                "item": "Stout",
                "price": 5
            }
        ]
    },
    {
        "id": "7",
        "name": "Boneshaker Public House",
        "priceRange": "$$$$",
        "imageSrc": "/images/7-Boneshaker.jpg",
        "imageDescription": "A photo of a cold beer",
        "description": "World famous beer",
        "menu": [
            {
                "item": "Double IPA",
                "price": 25
            },
            {
                "item": "Porter",
                "price": 27
            },
            {
                "item": "Crown Ambassador Reserve",
                "price": 70
            }
        ]
    },
    {
        "id": "8",
        "name": "Rocklin Brewfest",
        "priceRange": "$$",
        "imageSrc": "/images/8-Rocklin.jpg",
        "imageDescription": "A photo of a cold beer",
        "description": "Good times!",
        "menu": [
            {
                "item": "American Lager",
                "price": 12
            },
            {
                "item": "Wheat",
                "price": 15
            },
            {
                "item": "Porter",
                "price": 5
            }
        ]
    },
    {
        "id": "9",
        "name": "The Filling Station",
        "priceRange": "$$$",
        "imageSrc": "/images/9-FillingStation.png",
        "imageDescription": "A photo of a cold beer",
        "description": "Take one togo!",
        "menu": [
            {
                "item": "IPA",
                "price": 20
            },
            {
                "item": "American Lager",
                "price": 20
            },
            {
                "item": "Ale",
                "price": 18
            }
        ]
    },
    {
        "id": "10",
        "name": "BJ’s Restaurant & Brewhouse",
        "priceRange": "$",
        "imageSrc": "/images/10-bjs.jpg",
        "imageDescription": "A photo of a cold beer",
        "description": "Good food, good beer, good times",
        "menu": [
            {
                "item": "Red",
                "price": 8
            },
            {
                "item": "IPA",
                "price": 1
            },
            {
                "item": "American Lager",
                "price": 1
            }
        ]
    }
];

fs.writeFileSync('./content/restaurants.json', JSON.stringify(restaurants));
try {
  fs.mkdirSync('./content/restaurants');
} catch (e) {
  if (e.code !== 'EEXIST') throw e;
}
restaurants.forEach(restaurant => {
  fs.writeFileSync(
    `./content/restaurants/${restaurant.id}.json`,
    JSON.stringify(restaurant),
  );
});
