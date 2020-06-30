let formArray: IFormArray<Skill> = new FormArray([
    new FormGroup(<ControlProp<Skill>>{
        name: new FormControl((<ControlState<string>>""))
    }) as IFormGroup<Skill>
])