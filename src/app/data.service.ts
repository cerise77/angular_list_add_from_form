export class DataService{

    private data: string[] = [ "Incomplete task 1", "Incomplete task 2",  "Incomplete task 3"];

    getData(): string[] {

        return this.data;
    }
    addData(name: string){

        this.data.push(name);
    }
}
