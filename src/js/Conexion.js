import mongoose  from 'mongoose';
import config from '../config';

(async function conexionMongo() {
       try{
        const db = await mongoose.connect(config.mongoUrl);
        console.log(`DataBase: ${db.connection.name}`);
       }catch(error){
        console.log(error);
       }
})();