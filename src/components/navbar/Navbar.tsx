import { useEffect, useRef, useState } from "react";
import { FaShoppingBag, FaSearch, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import INV_API from "../../ApiConfig";
import Product from "../../models/Product";
import ShopMenu from "./ShopMenu";

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

    const onLeaveShopMenu = () => {
        clearTimeout(setTimeout(() => {
            setOpen(false);
        }, 1000));
    }

    return (
        <div>
            {/* nav bar */}
            <nav className="flex justify-between items-center border" >
                {/* dropdown list */}
                <ul className="flex items-center px-52 py-7 gap-5 list-none">
                    <Link
                        to={"/"}
                        className="font-bodoni text-5xl text-slate-600">INVINCIBLE
                    </Link>

                    {/* shop dropdown */}
                    <li
                        className="flex items-center gap-2"
                        onMouseEnter={() => setOpen(true)}
                        onMouseLeave={onLeaveShopMenu}> Shop
                        {!open ? <FaChevronDown /> : <FaChevronUp />}
                        {open && <ShopMenu products={products} setOpen={setOpen} />}
                    </li>

                    <Link
                        to={"/about"}
                        onClick={() => setOpen(false)}>About
                    </Link>
                </ul>

                {/* icon list */}
                <ul className="flex px-52 gap-5">
                    <button className="text-2xl"><FaSearch /></button>

                    <Link
                        to={"/cart"}
                        className="text-2xl"><FaShoppingBag />
                    </Link>
                </ul>
            </nav>
        </div>
    );
}
