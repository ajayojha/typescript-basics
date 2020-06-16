let user = this.formBuilder.group({
    firstName: [serverData.firstName, Validators.required, Validators.maxLength(10)],
    dob: [new Date(serverData.dob), Validators.required],
    address: this.formBuilder.group({
        countryName: [serverData.countryName, Validators.required]
    }),
    skills: this.formBuilder.array([
        this.formBuilder.group({
            name: [serverData.skills[0].name, Validators.required]
        })
    ])
})