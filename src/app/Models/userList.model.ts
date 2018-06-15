export class userList{
    public userName:string;
    public users = [];

    constructor(userName: string , users:any)
    {
        this.userName = userName;
        this.users = users;
    }
}
