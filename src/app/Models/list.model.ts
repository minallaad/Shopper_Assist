export class Item{
   public name:string;
   public isPresent:boolean;
   public updatedBy :string;

   constructor(name: string , isPresent:boolean , updatedBy:string)
   {
       this.name = name;
       this.isPresent =isPresent;
       this.updatedBy = updatedBy;

   }
}