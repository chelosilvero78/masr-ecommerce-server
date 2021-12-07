//import mongoose from 'mongoose'
//import dotenv from 'dotenv'
//import colors from 'colors'
//import users from './data/users.js'
const {products}=require('./data/products')
// import User from './models/user'
const Product=require('./models/product') 
//import Order from './models/orderModel.js'
//import connectDB from './config/db.js'

//dotenv.config()

//connectDB()

const importData = async () => {
  try {
    // //eliminar varios
    // await Order.deleteMany()
    // await Product.deleteMany()
    // await User.deleteMany()

    // //creamos los usuarios
    // const createdUsers = await User.insertMany(users)
    // // obtener el _id
    // const adminUser = createdUsers[0]._id
    // // agregar id a la tabla productos 
    // const sampleProducts = products.map((product) => {
    //   return { ...product, user: adminUser }
    // })

    await Product.insertMany(products)

    // console.log('Data Imported!'.green.inverse)
    console.log('Data Imported!')
    process.exit()
  } catch (error) {
    // console.error(`${error}`.red.inverse)
    console.error(`${error}`)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    // console.log('Data Destroyed!'.red.inverse)
    console.log('Data Destroyed!')
    process.exit()
  } catch (error) {
    // console.error(`${error}`.red.inverse)
    console.error(`${error}`)
    process.exit(1)
  }
}

// if (process.argv[2] === '-d') {
//   destroyData()
// } else {
//   importData()
// }

importData()