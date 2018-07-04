import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Item } from "./item";
import { ItemService } from "./item.service";
import * as ModalPicker from 'nativescript-modal-datetimepicker';

@Component({
    selector: "ns-details",
    moduleId: module.id,
    templateUrl: "./item-detail.component.html",
})
export class ItemDetailComponent implements OnInit {
    item: Item;
 

    public date: string;
    public time: string;

    constructor(
        private itemService: ItemService,
        private route: ActivatedRoute
    ) { 

    }

    ngOnInit(): void {
        const id = +this.route.snapshot.params["id"];
        this.item = this.itemService.getItem(id);
    }

    pickDate() {
        const picker = new ModalPicker.ModalDatetimepicker();
        picker.pickTime({
          title: 'Please enter your birthday',
          theme: 'dark',
          maxDate: new Date(),
          is24HourView: false
        }).then((result) => {
          console.log( result['year'] + '-' + result['month'] + '-' + result['day']);
        }).catch((error) => {
          console.log('Error: ' + error);
        });
      }

    
}
