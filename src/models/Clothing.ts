import Size from "./Size";

export default class CLothing {
    id: string;
    name: string;
    price: number;
    product_id: string;
    sizes: Size[];

    constructor(id: string, name: string, price: number, product_id: string, sizes: Size[]) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.product_id = product_id;
        this.sizes = sizes;
    }
}