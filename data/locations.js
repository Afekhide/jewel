const locations = [
        {
            "country": "San Francisco",
            "images": ["/images/outside2.jpg", "/images/outside1.jpg"],
            "propertyCount": 1
        },

        {
            "country": "South Carolina",
            "images": [ "/images/outside4.jpg","/images/outside3.jpg"],
            "propertyCount": 3
        },

        {
            "country": "New York",
            "images": ["/images/outside5.jpg", "/images/room5.jpg"],
            "propertyCount": 10
        }
    ]


export const interiors = [
    {
        "country": "Dallas, Texas",
        "name": "Luminal Veges",
        "price": {
            dollar: 14_00,
            cents: 0,
        },
        "images": ['/images/room1.jpg', "/images/kitchen.jpg", "/images/room5.jpg"],
        propertyCount: 2,
    },

    {
        "country": "Lafayette, Louisiana",
        "name": "La Quinta",
        "price": {
            dollar: 54_00,
            cents: 28,
        },
        "images": ['/images/kitchen3.jpg', "/images/kitchen2.jpg", "/images/room3.jpg"],
        propertyCount: 4,
    },
]


export default locations;