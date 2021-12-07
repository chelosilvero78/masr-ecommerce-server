
    //---  Modelo de Productos ----
    // title: {type: String,trim: true,required: true,maxlength: 32,text: true}
    // slug: {type: String,unique: true,lowercase: true,index: true}
    // description: {type: String,required: true,maxlength: 2000,text: true}
    // price: {type: Number,required: true,trim: true,maxlength: 32},
    // category: {type: ObjectId,ref: "Category",},
    // subs: [{type: ObjectId,ref: "Sub"} ],
    // quantity: Number,
    // sold: {type: Number,default: 0}
    // images: {type: Array,}
    // shipping: {type: String,enum: ["Yes", "No"]},
    // color: {type: String,enum: ["Black", "Brown", "Silver", "White", "Blue"]},
    // brand: {type: String,enum: ["Apple", "Samsung", "Microsoft", "Lenovo", "ASUS"]},
    // ratings: [{star: Number,postedBy: { type: ObjectId, ref: "User" }      } ],


const products = [
  {
    title: 'Airpods Wireless Bluetooth Headphones',
    description:
    'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    price: 89.99,
    category: 'Electronics',
    quantity: 100,
    image: `[     
        {
            "public_id": ${Date.now()},
            "url" : "https://res.cloudinary.com/dgqdsrggs/image/upload/v1638797610/airpods_oikxel.jpg"
        }
    ]`,
    brand: 'Apple',
    shipping: "Yes",
    color: "White"
  },
  {
    title: 'iPhone 11 Pro 256GB Memory',
    description:
    'Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life',
    price: 599.99,
    category: 'Electronics',
    quantity: 80,
    image: `[ 
        {
            "public_id": ${Date.now()},
            "url" : "https://res.cloudinary.com/dgqdsrggs/image/upload/v1638797611/phone_ovhn2i.jpg"
        }
    ]`,
    brand: 'Apple',
    shipping: "Yes",
    color: "White"
  },
  {
    title: 'Cannon EOS 80D DSLR Camera',
    description:
    'Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design',
    price: 929.99,
    category: 'Electronics',
    quantity: 20,
    image: `[ 
        {
            "public_id": ${Date.now()},
            "url" : "https://res.cloudinary.com/dgqdsrggs/image/upload/v1638797611/camera_gexkqc.jpg"
        }
    ]`,
    brand: 'Cannon',
    shipping: "Yes",
    color: "Black"
  },
  {
    title: 'Sony Playstation 4 Pro White Version',
    description:
    'The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music',
    price: 399.99,
    category: 'Electronics',
    quantity: 150,
    image: `[ 
        {
            "public_id": ${Date.now()},
            "url" : "https://res.cloudinary.com/dgqdsrggs/image/upload/v1638797611/playstation_hknmgd.jpg"
        }
    ]`,
    brand: 'Sony',
    shipping: "Yes",
    color: "White",
    brand: "Apple"
  },
  {
    title: 'Logitech G-Series Gaming Mouse',
    description:
    'Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience',
    price: 49.99,
    category: 'Electronics',
    quantity: 100,
    image: `[ 
        {
            "public_id": ${Date.now()},
            "url" : "https://res.cloudinary.com/dgqdsrggs/image/upload/v1638797612/mouse_ocymdf.jpg"
        }
    ]`,
    brand: 'Logitech',
    shipping: "Yes",
    color: "White"
  },
  {
    title: 'Amazon Echo Dot 3rd Generation',
    description:
    'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
    price: 29.99,
    category: 'Electronics',
    quantity: 40,
    image: `[ 
        {
            "public_id": ${Date.now()},
            "url" : "https://res.cloudinary.com/dgqdsrggs/image/upload/v1638797610/airpods_oikxel.jpg"
        }
    ]`,
    brand: 'Amazon',
    shipping: "Yes",
    color: "White"
  },
]

export default products


//cloudinary.v2.api.resource('airpods_oikxel', (error, resultado)=> {console.log (resultado, error);});
//---
//curl https://api.cloudinary.com/v1_1/<CLOUD_NAME>/image/upload -X POST --data 'file=<FILE>&timestamp=<TIMESTAMP>&api_key=<API_KEY>&signature=<SIGNATURE>'