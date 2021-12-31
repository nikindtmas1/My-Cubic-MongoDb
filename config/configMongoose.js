const mongoose = require('mongoose');
//const connectStr = 'mongodb://localhost:27017/cubicle';
const connectStr = 'mongodb+srv://cluster0.3bvrs.mongodb.net/myFirstDatabase?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority';

module.exports = (app) => {

    async function main(){

        await mongoose.connect(connectStr, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    
        console.log('Data base connected!');
    }
    main();

}
