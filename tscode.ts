import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, } from "@angular/forms"
import { IFormBuilder, IFormGroup } from "@rxweb/types"
import { User } from './user'; import { Address } from './address'; import { Skill } from './skill';

@Component({...})
export class UserComponent implements OnInit {
    formGroup: IFormGroup<User>;
    formBuilder: IFormBuilder;

    constructor(formBuilder: FormBuilder) {
        this.formBuilder = formBuilder;
    }

    ngOnInit() {
        this.formGroup = this.formBuilder.group<User>({
            firstName: ['', [Validators.required]],
            address: this.formBuilder.group<Address>({
                countryName: ["", Validators.required]
            }),
            skills: this.formBuilder.array<Skill>([
                this.formBuilder.group({
                    name: ["", Validators.required]
                })
            ])
        });
    }
}
