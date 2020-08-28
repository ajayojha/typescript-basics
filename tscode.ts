export class Address {
    @required()
    countryName: string;
}

export class Skill {
    @required()
    name: string;
}

export class User {
    @requried()
    @maxLength(10)
    firstName: string;
    @toDate()
    dob: Date;
    @propObject(Address)
    address: Address;
    @propArray(Skill)
    skills: Skill[]
}