import bcrypt from 'bcryptjs';
const data = {
    users:[
        {
            name:'Angela',
            email: 'admin@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
        },
        {
            name:'Lily',
            email: 'user@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
        },
    ],
    products:[
        {
            _id: "1",
            name: "Storet Leather Dress",
            category: "Dresses",
            image: "/images/p1.JPG",
            price: 100,
            countInStock: 1,
            brand: "Storet",
            rating: 4.5,
            numReviews: 10,
            description: "high quality product"
        },
        {
            _id: "2",
            name: "SVDZ Tennis Skirt",
            category: "Skirts",
            image: "/images/p2.JPG",
            price: 60,
            countInStock: 1,
            brand: "SVDZ",
            rating: 4.5,
            numReviews: 10,
            description: "high quality product"
        },
        {
            _id: "3",
            name: "Express Plaid Dress",
            category: "Dresses",
            image: "/images/p3.JPG",
            price: 70,
            countInStock: 1,
            brand: "Express",
            rating: 4.5,
            numReviews: 10,
            description: "high quality product"
        },
        {
            _id: "4",
            name: "Meshki Polo Dress",
            category: "Dresses",
            image: "/images/p4.JPG",
            price: 80,
            countInStock: 2,
            brand: "Meshki",
            rating: 4.5,
            numReviews: 10,
            description: "high quality product"
        },
        {
            _id: "5",
            name: "Verge Girl Mini Dress",
            category: "Dresses",
            image: "/images/p5.JPG",
            price: 80,
            countInStock: 0,
            brand: "Verge Girl",
            rating: 4.5,
            numReviews: 10,
            description: "high quality product"
        },
        {
            _id: "6",
            name: "Self-Portraint Midi Dress",
            category: "Dresses",
            image: "/images/p6.JPG",
            price: 350,
            countInStock: 1,
            brand: "Self-Portraint",
            rating: 4.5,
            numReviews: 10,
            description: "high quality product"
        },
        {
            _id: "7",
            name: " Maje Tweed Dress",
            category: "Dresses",
            image: "/images/p7.JPG",
            price: 150,
            countInStock: 1,
            brand: "Maje",
            rating: 4.5,
            numReviews: 10,
            description: "high quality product"
        },
        {
            _id: "8",
            name: "M-Kae Midi Skirt",
            category: "Skirt",
            image: "/images/p8.JPG",
            price: 90,
            countInStock: 1,
            brand: "M-Kaet",
            rating: 4.5,
            numReviews: 10,
            description: "high quality product"
        },
    ],
};
export default data;