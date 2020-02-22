export class Employee{
    public EmployeeName: string;
    public WorkTitle: string;
    public ImageUrl: string;
    public ID: string;

    constructor(name:string,workTitle:string,imageUrl:string, ID:string){
        this.EmployeeName = name;
        this.ImageUrl = imageUrl;
        this.WorkTitle = workTitle;
        this.ID = ID;
    }
}