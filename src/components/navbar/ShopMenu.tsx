import { Link } from "react-router-dom";
import Product from "../../models/Product";

interface ShopMenuProp {
    products: Product[] | null;
    setOpen: Function;
}

const ShopMenu = ({ products, setOpen }: ShopMenuProp) => {
    return (
        <div className="bg-white mt-28 left-0 w-full border absolute">
            <ul className="flex px-52 py-2 gap-10" onMouseLeave={() => setOpen(false)} onClick={() => setOpen(false)}>
                <Link to={"/collections/all"}>Shop All</Link>
                {products?.map((p: any) => (
                    <Link to={`/collections/${p.name.toLocaleLowerCase()}`}>{p.name}</Link>
                ))}
            </ul>
        </div>
    );
}

export default ShopMenu;
