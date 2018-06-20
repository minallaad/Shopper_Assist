export class userList{
    public userName:string;
    public users :any = [];
    //public newusers:object

    constructor(userName: string , users:object)
    {
        this.userName = userName;
        this.users = users;

    }
}
