import { Component, ChangeDetectionStrategy} from '@angular/core';
import {DataService} from './data.service';
import {DataServiceComplete} from './dataCo.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';


@Component({
    selector: 'my-app',
    templateUrl: './html/app.component.html',
    styleUrls: ['./css/style.css'],
    providers: [DataService, DataServiceComplete],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent{
    items: string[] = [];
    itemCos: string[] = [];
    name: string;
    myForm : FormGroup;

    constructor(private dataService: DataService, private dataServiceComplete: DataServiceComplete){
      this.myForm = new FormGroup({
            "Name": new FormControl("", [Validators.required, Validators.pattern("^[а-яА-ЯёЁa-zA-Z0-9]+$")])
        });

    }

    ngOnInit(){
        this.items = this.dataService.getData();

        this.itemCos = this.dataServiceComplete.getDataComplete();
    }


    addItem(){
        this.dataService.addData(this.myForm.value.Name);
    }

}
