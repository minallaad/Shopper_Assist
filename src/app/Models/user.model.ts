export class User{
    username:string;
    password:string;
    email:string;
    hash: string;
    salt: string;

    constructor(username: string , password:string , email:string , hash:string,salt:string)
    {
        this.username = username;
        this.password =password;
        this.email = email;
        this.hash = hash;
        this.salt = salt;

    }
}