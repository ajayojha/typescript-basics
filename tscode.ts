let formGroup: IFormGroup<User> = new FormGroup(<ControlProp<User>>{
    firstName: new FormControl((<ControlState<string>>"")),
}) as IFormGroup<User>;