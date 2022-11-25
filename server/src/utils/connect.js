const mongoose = require('mongoose')


const dbConnect = async (url) => {
    try {
        await mongoose.connect(url)
        console.log('connected to db')
    } catch (error) {
        console.log(error.message)
    }
}


module.exports={dbConnect}
