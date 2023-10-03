import {MongoClient} from 'mongodb'

export async function DBconnection(){
  try {
    const client = new MongoClient(process.env.MANGOS_URL)
    await client.connect()
    const db = client.db('luckypizza')
    return db
  } catch (error) {
    console.log(error);
  }
}