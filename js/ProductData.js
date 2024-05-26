const ProductData = [
    {
        img: 'https://retrokitshop.com/cdn/shop/products/Skjermbilde2023-01-29153428.png?v=1684539540&width=990',
        name: "AC MILAN",
        price: 100000,
        urlPage: '../ProductDetail/ProductDetail2.html',
    },
    {
        img: 'https://retrokitshop.com/cdn/shop/products/Skjermbilde2023-01-29174729.png?v=1683890991&width=990',
        name: "MANCHESTER UNITED",
        price: 100000,
        urlPage: '../ProductDetail/ProductDetail3.html',
    },
    {
        img: 'https://retrokitshop.com/cdn/shop/products/3fb19b84.jpg?v=1683888377&width=990',
        name: "FC BARCELONA",
        price: 100000,
        urlPage: '../ProductDetail/ProductDetail.html',
    },
    {
        img: 'https://retrokitshop.com/cdn/shop/products/Skjermbilde2023-01-29151039.png?v=1683887821&width=990',
        name: "ARSENAL",
        price: 100000
    },
    {
        img: 'https://retrokitshop.com/cdn/shop/products/b7231be7.jpg?v=1683889219&width=990',
        name: "CHELSEA",
        price: 100000
    },
    {
        img: 'https://retrokitshop.com/cdn/shop/products/ecefb441.jpg?v=1683894122&width=990',
        name: "ENGLAND",
        price: 100000
    },
    {
        img: 'https://retrokitshop.com/cdn/shop/products/5d3ae4ec.jpg?v=1683893824&width=990',
        name: "BRAZIL",
        price: 100000
    },
    {
        img: 'https://retrokitshop.com/cdn/shop/products/75e92678_40630b05-e3c5-44b0-b05f-545b649a4745.jpg?v=1684539043&width=990',
        name: "ARGENTINA",
        price: 100000
    },
    {
        img: 'https://retrokitshop.com/cdn/shop/products/HJEMM.jpg?v=1683892875&width=990',
        name: "BORRUSSIA DORTMUND",
        price: 100000
    },
    {
        img: 'https://retrokitshop.com/cdn/shop/products/Skjermbilde2023-01-29162319.png?v=1683889555&width=990',
        name: "INTER MILAN",
        price: 100000
    },
    {
        img: 'https://retrokitshop.com/cdn/shop/products/3008b966.jpg?v=1683894424&width=990',
        name: "NETHERLAND",
        price: 100000
    },
    {
        img: 'https://retrokitshop.com/cdn/shop/products/e4aaaf4e.jpg?v=1683892017&width=990',
        name: "REAL MADRID",
        price: 100000
    }
]

const productDetailData = {
    FCB: {
        price: 26000,
        name: "FC Barcelona",
        player: [
            {
                value: 1,
                name: "3 (PIQUE)"
            },
            {
                value: 2,
                name: "4 (RAKITIC)"
            },
            {
                value: 3,
                name: "5 (BUSQUETS)"
            },
            {
                value: 4,
                name: "6 (XAVI)"
            },
            {
                value: 5,
                name: "8 (INIESTA)"
            },
            {
                value: 6,
                name: "9 (SUAREZ)"
            },
            {
                value: 7,
                name: "10 (MESSI)"
            },
            {
                value: 8,
                name: "11 (NEYMAR)"
            },
            {
                value: 9,
                name: "18 (JORDI ALBA)"
            },
            {
                value: 10,
                name: "22 (DANI ALVES)"
        },
    ]
    },
    ACM: {
        player: [
            {
                value: 1,
                name: "2 (CAFU)"
            },
            {
                value: 2,
                name: "3 (MALDINI)"
            },
            {
                value: 3,
                name: "8 (GATTUSO)"
            },
            {
                value: 4,
                name: "9 (INZAGHI)"
            },
            {
                value: 5,
                name: "10 (SEEDORF)"
            },
            {
                value: 6,
                name: "13 (NESTA)"
            },
            {
                value: 7,
                name: "21 (PIRLO)"
            },
            {
                value: 8,
                name: "22 (KAKA)"
            },
            {
                value: 9,
                name: "99 (RONALDO)"
            },
            {
                value: 10,
                name: "NO NAME OR NUMBER"
    }
]
    },
    MUN: {
        player: [
            {
                value: 1,
                name: "2 (NEVILLE)"
            },
            {
                value: 2,
                name: "3 (EVRA)"
            },
            {
                value: 3,
                name: "5 (FERDINAND)"
            },
            {
                value: 4,
                name: "7 (RONALDO)"
            },
            {
                value: 5,
                name: "10 (ROONEY)"
            },
            {
                value: 6,
                name: "15 (VIDIC)"
            },
            {
                value: 7,
                name: "17 (NANI)"
            },
            {
                value: 8,
                name: "18 (SCHOLES)"
            },
            {
                value: 9,
                name: "2O (SOLSKJAER)"
            },
            {
                value: 10,
                name: "NO NAME OR NUMBER"
    }
]
    }
}

const sizeProduct = [ 'S', 'M', "L", 'XL', 'XXL'];