const mongoose = require('mongoose')

const connectDB =  async () =>{
    try {
        await mongoose.connect(process.env.MONGO_CONNECT,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
       
        })
        console.log('Data base connected')
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}
module.exports = connectDB ;









// mongoose.connect(process.env.MONGO_CONNECT,
// { useNewUrlParser: true, useUnifiedTopology: true });


// mongoose.connection.on('connected', function () {
//     console.log("Mongoose is connected");
// });

// mongoose.connection.on('disconnected', function () {
//     console.log("Mongoose is disconnected");
//     process.exit(1);
// });

// mongoose.connection.on('error', function (err) {
//     console.log('Mongoose connection error: ', err);
//     process.exit(1);
// });

// process.on('SIGINT', function () {
//     console.log("app is terminating");
//     mongoose.connection.close(function () {
//         console.log('Mongoose default connection closed');
//         process.exit(0);
//     });
// });
