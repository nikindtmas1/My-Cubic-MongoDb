const mongoose = require('mongoose');
const connectStr = 'mongodb://localhost:27017/cubicle';

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
