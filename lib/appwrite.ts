import {
    Account,
    Databases,
    Avatars,
    Storage, Client,
} from "appwrite";

export const config = {
    endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
    projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
    databaseId: process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID,
}
export const client = new Client();
client
    .setEndpoint(config.endpoint!)
    .setProject(config.projectId!)

export const avatar = new Avatars(client);
export const account = new Account(client);
// export const databases = new Databases(client);
// export const storage = new Storage(client);

export async function getCurrentUser() {
    try {
        const result = await account.get();
        if (result.$id) {
            const userAvatar = avatar.getInitials(result.name);

            return {
                ...result,
                avatar: userAvatar.toString(),
            };
        }

        return null;
    } catch (error) {
        console.log(error);
        return null;
    }
}