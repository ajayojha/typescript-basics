export interface Address {
    countryName: string;
}

export interface Skill {
    name: string;
}

export class User {
    firstName: string;
    dob: Date;
    address: Address;
    skills: Skill[]
}