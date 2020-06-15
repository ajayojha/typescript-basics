let data: any = { firstName: 'John', address: { countryName: "India" }, dob: "10/15/2020", skills: [{ name: 'Angular' }] }

let user = this.formBuilder.group<User>({
    firstName: [serverData.firstName, Validators.required, Validators.maxLength(10)],
    dob: [new Date(serverData.dob), Validators.required],
    address: this.formBuilder.group<Address>({
        countryName: [serverData.countryName, Validators.required]
    }),
    skills: this.formBuilder.array<Skill[]>([
        this.formBuilder.group<Skill>({
            name: [serverData.skills[0].name, Validators.required]
        })
    ])
})
