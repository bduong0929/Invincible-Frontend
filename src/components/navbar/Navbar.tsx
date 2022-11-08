import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import INV_API from "../../ApiConfig";
import Product from "../../models/Product";
import ChevronDownIcon from "../../assets/icons/ChevronDownIcon";
import ChevronUpIcon from "../../assets/icons/ChevronUpIcon";
import SearchIcon from "../../assets/icons/SearchIcon";
import ShoppingIconBag from "../../assets/icons/ShoppingBagIcon";
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
                        {!open ? <ChevronDownIcon /> : <ChevronUpIcon />}
                        {open && <ShopMenu products={products} setOpen={setOpen} />}
                    </li>

                    <Link
                        to={"/about"}
                        onClick={() => setOpen(false)}>About
                    </Link>
                </ul>

                {/* icon list */}
                <ul className="flex px-52 gap-5">
                    <button className="text-2xl"><SearchIcon /></button>

                    <Link
                        to={"/cart"}
                        className="text-2xl"><ShoppingIconBag />
                    </Link>
                </ul>
            </nav>
        </div>
    );
}
