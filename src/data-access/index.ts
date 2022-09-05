import mongoose from "mongoose";

let uri: any;
const isString = typeof process.env.MONGODB_ATLAS === "string";
if (isString) {
    uri = process.env.MONGODB_ATLAS;
}
const dbConnector = async () => {
    try {
        let uri: any;
        const isString = typeof process.env.MONGODB_ATLAS === "string";
        if (isString) {
            uri = process.env.MONGODB_ATLAS;
        }
        await mongoose.connect(uri);
        /* eslint-disable no-console */
        console.log("database conected");
    } catch (error) {
        /* eslint-disable no-console */
        console.log(error);
    }
};

export default dbConnector;
