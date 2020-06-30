let formGroup: IFormGroup<User> = new FormGroup(<ControlProp<User>>{
    firstName: new FormControl((<ControlState<Date>>new Date())),
}) as IFormGroup<User>;