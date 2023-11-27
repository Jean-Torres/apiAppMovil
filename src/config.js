import{config} from 'dotenv';
config()

export default {
    mongoUrl: process.env.mongo_url,
}