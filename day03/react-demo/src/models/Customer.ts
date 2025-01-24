export class Customer {
    id: number;
    name: string;
    email: string;
    phone: string;

    constructor(name: string, email: string, phone: string) {
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
}