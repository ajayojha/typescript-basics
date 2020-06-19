import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, } from "@angular/forms"
import { IFormBuilder, IFormGroup } from "@rxweb/types"
import { User } from './user'; import { Address } from './address'; import { Skill } from './skill';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    formGroup: FormGroup;
    formBuilder: FormBuilder;

    constructor(formBuilder: FormBuilder) {
        this.formBuilder = formBuilder;
    }

    ngOnInit() {
        this.formGroup = this.formBuilder.group({
            firstName: ['', [Validators.required]],
            address: this.formBuilder.group({
                countryName: ["", Validators.required]
            }),
            skills: this.formBuilder.array([
                this.formBuilder.group({
                    name: ["", Validators.required]
                })
            ])
        });
    }
}
