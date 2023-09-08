import User from "../../entities/user/User";

export interface IApiUserControllerCalls {
    // getAuthentication():Promise<void>;
    // getCallback():Promise<void>;
    getUserData(): Promise<User>;
    getUserTopGenres(): Promise<string[]>;
}