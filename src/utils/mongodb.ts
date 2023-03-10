import mongoose from 'mongoose';

const { DB_URI, DB_MONGODB } = process.env;

if (!DB_URI) throw new Error('MONGODB_URI not defined');
if (!DB_MONGODB) throw new Error('MONGODB_DB not defined');

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(`${DB_URI}/${DB_MONGODB}`)
      .then((mongoose) => mongoose);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
