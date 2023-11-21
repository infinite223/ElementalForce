import { Client, Databases, ID } from 'appwrite';

export const DATABASE_ID = "6557c6fc6b9c583de93c"
const client = new Client();

client
    // .setEndpointRealtime('wss://cloud.appwrite.io/v1/realtime')
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('6557be66d78dca1cc1dd')
    .headers

    client.subscribe(`account`, response => {
        console.log(response.channels, "tutaj")

      });

export const databases = new Databases(client);

export default client;