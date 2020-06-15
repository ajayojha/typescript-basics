export interface Address {
    countryName: string;
}

export interface Skill {
    name: string;
}

export interface User {

    firstName: string;

    dob: Date;

    address: Address;

    skills: Skill[]

}
let data: any = { firstName: 'John', address: { countryName: "India" }, dob: "10/15/2020", skills: [{ name: 'Angular' }] } 
let formGroup = this.formBuilder.group<User>({
    firstName: [serverData.firstName, Validators.required, Validators.maxLength(10)],
    dob: [new Date(serverData.dob), Validators.required],
    address: this.formBuilder.group<Address>({
        countryName: [serverData.countryName, Validators.required]
    }),
    skills: this.formBuilder.array<Skills[]>([
        this.formBuilder.group<Skill>({
            name: [serverData.skills[0].name, Validators.required]
        })
    ])
})
