import mongoose from "mongoose";

const cntmongoDB = async () => {

    mongoose.connection.on('connected', ()=>{
        console.log('Mongodb connection successfully');
    })

    await mongoose.connect(`${process.env.mongoDB_URI}/e-commerce`)

}

export default cntmongoDB;




// import mongoose from "mongoose";

// const cntmongoDB = async () => {
//     try {
//         // Set up event listeners first
//         mongoose.connection.on('connected', () => {
//             console.log('MongoDB connection successful');
//         });
        
//         mongoose.connection.on('error', (err) => {
//             console.error('MongoDB connection error:', err);
//         });

//         // Attempt connection
//         await mongoose.connect(`${process.env.MONGODB_URI}/e-commerce`);
        
//     } catch (err) {
//         console.error('Failed to connect to MongoDB:', err);
//         throw err; // Re-throw the error if you want calling code to handle it
//     }
// }

// export default cntmongoDB;
