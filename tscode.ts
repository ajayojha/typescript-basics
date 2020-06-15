let formArray = user.controls.skills as FormArray<Skill[]>;
formArray.push(this.formBuilder.group({
    name: ['', Validators.required]
}))