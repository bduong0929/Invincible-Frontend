import { useEffect, useRef, useState } from "react";
import { FaShoppingBag, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import INV_API from "../ApiConfig";
import Product from "../models/Product";

export default function Navbar() {
    const [open, setOpen] = useState<boolean>(false);
    const [products, setProducts] = useState<Product[] | null>(null);

    useEffect(() => {
        getAllProducts();
    }, [])

    async function getAllProducts() {
        await INV_API.get("/products")
            .then((resp) => setProducts(resp.data))
            .catch((e) => alert(e.response.headers.data.message));
    }

    return (
        <div>
            <nav className="flex justify-between">
                <ul className="flex px-52 py-10 gap-5">
                    <Link to={"/"} className="font-bodoni text-5xl text-slate-600" onClick={(e) => setOpen(false)}>INVINCIBLE</Link>
                    <button className="hover:underline" onClick={(e) => setOpen(!open)}>Shop</button>
                    <Link to={"/about"} className="py-3" onClick={(e) => setOpen(false)}>About</Link>
                </ul>
                <ul className="flex px-52 py-10 gap-5">
                    <Link to={"/cart"} className="pt-3 text-2xl"><FaShoppingBag /></Link>
                    <button className="text-2xl"><FaSearch /></button>
                </ul>
            </nav>
            <hr />
            <nav>
                {open && <ShopDropDown products={products} open={open} setOpen={setOpen} />}
            </nav>
        </div>
    );
}

function ShopDropDown({ products, open, setOpen }: any) {
    if (!open) return null;

    return (
        <div>
            <ul className="flex px-52 py-2 gap-10" onClick={(e) => e.stopPropagation()}>
                {products?.map((p: any) => (
                    <Link to={`/collections/${p.name.toLocaleLowerCase()}`} onClick={() => setOpen(false)}>{p.name}</Link>
                ))}
            </ul>
        </div>
    );
}