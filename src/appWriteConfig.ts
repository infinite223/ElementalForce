import { Client, Databases, ID } from 'appwrite';

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('6557be66d78dca1cc1dd');

export const databases = new Databases(client);

export default client;