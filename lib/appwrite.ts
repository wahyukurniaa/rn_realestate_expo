import {
    Account,
    Databases,
    Avatars,
    Storage,
} from "appwrite";

// export const client = new Client();
// client
//     .setEndpoint(config.endpoint!)
//     .setProject(config.projectId!)
//     .setPlatform(config.platform!);
//
// export const avatar = new Avatars(client);
// export const account = new Account(client);
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