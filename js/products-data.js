// Products Data Organized by Categories
const productsData = {
    laddu: {
        name: "LADDU",
        icon: "fas fa-cookie-bite",
        products: [
            { id: 1, name: "Karuppu Ulundhu", pieces: "5 per box", price: "₹40" },
            { id: 2, name: "Kambu", pieces: "5 per box", price: "₹40" },
            { id: 3, name: "Ragi", pieces: "5 per box", price: "₹40" },
            { id: 4, name: "Karuppu Kavuni", pieces: "5 per box", price: "₹40" },
            { id: 5, name: "Sigappu Kavuni", pieces: "5 per box", price: "₹40" },
            { id: 6, name: "Simili", pieces: "5 per box", price: "₹40" },
            { id: 7, name: "Karuppu Ellu", pieces: "5 per box", price: "₹40" },
            { id: 8, name: "Vellai Ellu", pieces: "5 per box", price: "₹40" },
            { id: 9, name: "Pottu Kadalai", pieces: "5 per box", price: "₹40" },
            { id: 10, name: "Pacha Payiru", pieces: "5 per box", price: "₹40" },
            { id: 11, name: "Dry Fruits", pieces: "5 per box", price: "₹40" }
        ]
    },
    thuvayalThokku: {
        name: "THUVAYAL & THOKKU",
        icon: "fas fa-mortar-pestle",
        products: [
            { id: 1, name: "Tomato", price100g: "₹35", priceKg: "₹350" },
            { id: 2, name: "Pudina", price100g: "₹35", priceKg: "₹350" },
            { id: 3, name: "Kariveppilai", price100g: "₹35", priceKg: "₹350" },
            { id: 4, name: "Pirandai", price100g: "₹35", priceKg: "₹350" },
            { id: 5, name: "Murungai", price100g: "₹35", priceKg: "₹350" },
            { id: 6, name: "Kothamalli", price100g: "₹35", priceKg: "₹350" },
            { id: 7, name: "Vaatharayam", price100g: "₹35", priceKg: "₹350" },
            { id: 8, name: "Vallarai", price100g: "₹35", priceKg: "₹350" },
            { id: 9, name: "Garlic", price100g: "₹35", priceKg: "₹350" },
            { id: 10, name: "Ginger", price100g: "₹35", priceKg: "₹350" },
            { id: 11, name: "Murungai Kuzhambu", price100g: "₹35", priceKg: "₹350" },
            { id: 12, name: "Paaraagka", price100g: "₹35", priceKg: "₹350" },
            { id: 13, name: "Veg Thokku", price100g: "₹35", priceKg: "₹350" },
            { id: 14, name: "Mango", price100g: "₹35", priceKg: "₹350" },
            { id: 15, name: "Lemon", price100g: "₹35", priceKg: "₹350" }
        ]
    },
    malt: {
        name: "MALT VARIETIES",
        icon: "fas fa-seedling",
        products: [
            { id: 1, name: "ABC", price100g: "₹70", priceKg: "₹700" },
            { id: 2, name: "Ragi", price100g: "₹70", priceKg: "₹700" },
            { id: 3, name: "Sevvazhai", price100g: "₹70", priceKg: "₹700" },
            { id: 4, name: "Sirudhaniya Sathu Maavu", price100g: "₹70", priceKg: "₹700" }
        ]
    },
    powderMasala: {
        name: "POWDER / MASALA",
        icon: "fas fa-pepper-hot",
        products: [
            { id: 1, name: "Turmeric Powder", price100g: "₹40", priceKg: "₹400" },
            { id: 2, name: "Chilli Powder", price100g: "₹30", priceKg: "₹300" },
            { id: 3, name: "Thaniya Powder", price100g: "₹30", priceKg: "₹300" },
            { id: 4, name: "Milagu Powder", price100g: "₹87", priceKg: "₹870" },
            { id: 5, name: "Seeraga Powder", price100g: "₹40", priceKg: "₹400" },
            { id: 6, name: "Vendhaya Powder", price100g: "₹95", priceKg: "₹950" },
            { id: 7, name: "Kuli Milagu Powder", price100g: "₹30", priceKg: "₹300" },
            { id: 8, name: "Rasam Powder", price100g: "₹35", priceKg: "₹350" },
            { id: 9, name: "Sambar Powder", price100g: "₹45", priceKg: "₹450" },
            { id: 10, name: "Kari Masala Powder", price100g: "₹45", priceKg: "₹450" },
            { id: 11, name: "Chicken Masala", price100g: "₹40", priceKg: "₹400" },
            { id: 12, name: "Mutton Masala", price100g: "₹40", priceKg: "₹400" },
            { id: 13, name: "Garam Masala", price100g: "₹45", priceKg: "₹450" },
            { id: 14, name: "Biriyani Masala", price100g: "₹45", priceKg: "₹450" },
            { id: 15, name: "Fish Kuzhambu Masala", price100g: "₹35", priceKg: "₹350" },
            { id: 16, name: "Fish Fry Masala", price100g: "₹35", priceKg: "₹350" },
            { id: 17, name: "Chicken 65 Masala", price100g: "₹45", priceKg: "₹450" },
            { id: 18, name: "Idly Powder", price100g: "₹35", priceKg: "₹350" }
        ]
    },
    paruppuPodi: {
        name: "PARUPPU PODI",
        icon: "fas fa-leaf",
        products: [
            { id: 1, name: "Murungai", price100g: "₹40", priceKg: "₹400" },
            { id: 2, name: "Kariveppilai", price100g: "₹40", priceKg: "₹400" },
            { id: 3, name: "Thoothuvalai", price100g: "₹40", priceKg: "₹400" },
            { id: 4, name: "Pirandai", price100g: "₹40", priceKg: "₹400" },
            { id: 5, name: "Sundakkai", price100g: "₹40", priceKg: "₹400" },
            { id: 6, name: "Mudakkathan", price100g: "₹40", priceKg: "₹400" },
            { id: 7, name: "Vallarai", price100g: "₹40", priceKg: "₹400" },
            { id: 8, name: "Pudina", price100g: "₹40", priceKg: "₹400" },
            { id: 9, name: "Kothamalli", price100g: "₹40", priceKg: "₹400" },
            { id: 10, name: "Paarkarai", price100g: "₹40", priceKg: "₹400" },
            { id: 11, name: "Thuthu Keerai", price100g: "₹40", priceKg: "₹400" },
            { id: 12, name: "Aavaramboo", price100g: "₹40", priceKg: "₹400" }
        ]
    },
    nonVegPickle: {
        name: "NON-VEG PICKLE",
        icon: "fas fa-drumstick-bite",
        products: [
            { id: 1, name: "Prawn", price250g: "₹499", price500g: "₹899", priceKg: "₹1299" },
            { id: 2, name: "Mutton", price250g: "₹749", price500g: "₹1100", priceKg: "₹1399" },
            { id: 3, name: "Chicken", price250g: "₹449", price500g: "₹799", priceKg: "₹1199" },
            { id: 4, name: "Fish", price250g: "₹549", price500g: "₹999", priceKg: "₹1199" },
            { id: 5, name: "Dry Fish", price250g: "₹299", price500g: "₹499", priceKg: "₹799" }
        ]
    },
    parampariyaPalagaram: {
        name: "PARAMPARIYA PALAGARAM",
        icon: "fas fa-bread-slice",
        products: [
            { id: 1, name: "Adhirasam", priceKg: "₹250" },
            { id: 2, name: "Murukku", priceKg: "₹250" },
            { id: 3, name: "Somasi", priceKg: "₹250" },
            { id: 4, name: "Rava Laddu", priceKg: "₹250" }
        ]
    },
    napkins: {
        name: "NAPKINS",
        icon: "fas fa-tshirt",
        products: [
            { 
                id: 1, 
                name: "MAZHINI Nee", 
                sizes: [
                    { size: "XL", pieces: "7 pcs", price: "₹80" },
                    { size: "XXL", pieces: "7 pcs", price: "₹100" }
                ]
            }
        ]
    },
    millet: {
        name: "MILLET PRODUCTS",
        icon: "fas fa-wheat-awn",
        products: [
            { 
                id: 1, 
                name: "Millet Idly Maavu",
                varieties: [
                    { type: "Samai", price: "₹130" },
                    { type: "Thinai", price: "₹110" },
                    { type: "Varagu", price: "₹130" },
                    { type: "Kuthiraivali", price: "₹140" },
                    { type: "Ragi", price: "₹110" }
                ]
            },
            { 
                id: 2, 
                name: "Millet Dosa Mix",
                varieties: [
                    { type: "Samai", price: "₹220" },
                    { type: "Thinai", price: "₹180" },
                    { type: "Varagu", price: "₹205" },
                    { type: "Kuthiraivali", price: "₹230" },
                    { type: "Ragi", price: "₹180" }
                ]
            },
            { 
                id: 3, 
                name: "Millet Kulipaniyaram",
                varieties: [
                    { type: "Samai", price: "₹198" },
                    { type: "Thinai", price: "₹168" },
                    { type: "Varagu", price: "₹190" },
                    { type: "Kuthiraivali", price: "₹199" },
                    { type: "Ragi", price: "₹160" }
                ]
            },
            { 
                id: 4, 
                name: "Millet Kuzhaiputtu",
                varieties: [
                    { type: "Samai", price: "₹198" },
                    { type: "Thinai", price: "₹168" },
                    { type: "Varagu", price: "₹190" },
                    { type: "Kuthiraivali", price: "₹190" },
                    { type: "Ragi", price: "₹160" }
                ]
            },
            { 
                id: 5, 
                name: "Millet Idiyappam",
                varieties: [
                    { type: "Samai", price: "₹198" },
                    { type: "Thinai", price: "₹168" },
                    { type: "Varagu", price: "₹190" },
                    { type: "Kuthiraivali", price: "₹190" },
                    { type: "Ragi", price: "₹160" }
                ]
            },
            { 
                id: 6, 
                name: "Millet Venpongal",
                varieties: [
                    { type: "Samai", price: "₹289" },
                    { type: "Thinai", price: "₹259" },
                    { type: "Varagu", price: "₹281" },
                    { type: "Kuthiraivali", price: "₹290" }
                ]
            },
            { 
                id: 7, 
                name: "Millet Pal-Kozhukattai",
                varieties: [
                    { type: "Samai", price: "₹198" },
                    { type: "Thinai", price: "₹168" },
                    { type: "Varagu", price: "₹190" },
                    { type: "Kuthiraivali", price: "₹190" },
                    { type: "Ragi", price: "₹160" }
                ]
            },
            { 
                id: 8, 
                name: "Millet Kozhukattai",
                varieties: [
                    { type: "Samai", price: "₹198" },
                    { type: "Thinai", price: "₹168" },
                    { type: "Varagu", price: "₹190" },
                    { type: "Kuthiraivali", price: "₹190" },
                    { type: "Ragi", price: "₹160" }
                ]
            },
            { 
                id: 9, 
                name: "Vendhaya Kali Mix",
                varieties: [
                    { type: "Samai", price: "₹185" },
                    { type: "Thinai", price: "₹162" },
                    { type: "Varagu", price: "₹175" },
                    { type: "Kuthiraivali", price: "₹192" }
                ]
            },
            { 
                id: 10, 
                name: "Kambu Kali Mix",
                varieties: [
                    { type: "Samai", price: "₹175" }
                ]
            },
            { 
                id: 11, 
                name: "Mapillai Samba Puttu Mix",
                varieties: [
                    { type: "Samai", price: "₹185" }
                ]
            },
            { 
                id: 12, 
                name: "Karunguruvai Puttu Mix",
                varieties: [
                    { type: "Samai", price: "₹190" }
                ]
            },
            { 
                id: 13, 
                name: "Karuppu Kavuni Puttu Mix",
                varieties: [
                    { type: "Samai", price: "₹260" }
                ]
            },
            { 
                id: 14, 
                name: "Segappu Kavuni Health Mix",
                varieties: [
                    { type: "Samai", price: "₹210" }
                ]
            },
            { 
                id: 15, 
                name: "Mapillai Samba Health Mix",
                varieties: [
                    { type: "Samai", price: "₹220" }
                ]
            },
            { 
                id: 16, 
                name: "Karuppu Kavuni Health Mix",
                varieties: [
                    { type: "Samai", price: "₹295" }
                ]
            },
            { 
                id: 17, 
                name: "Karunguruvai Health Mix",
                varieties: [
                    { type: "Samai", price: "₹230" }
                ]
            }
        ]
    }
};