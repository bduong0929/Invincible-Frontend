import Size from "./Size";

export default class Clothing {
    id: string;
    img: string;
    name: string;
    price: number;
    sizes: Size[];

    constructor(id: string, img: string, name: string, price: number, sizes: Size[]) {
        this.id = id;
        this.img = img;
        this.name = name;
        this.price = price;
        this.sizes = sizes;
    }
}