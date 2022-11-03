import CLothing from "./Clothing";

export default class Product {
    id: string;
    name: string;
    clothings: CLothing[];

    constructor(id: string, name: string, clothings: CLothing[]) {
        this.id = id;
        this.name = name;
        this.clothings = clothings;
    }
}