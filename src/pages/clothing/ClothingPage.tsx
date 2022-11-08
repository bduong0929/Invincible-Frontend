import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import INV_API from "../../ApiConfig";
import ChevronDownIcon from "../../assets/icons/ChevronDownIcon";
import Clothing from "../../models/Clothing";
import Size from "../../models/Size";
import LoadingPage from "../LoadingPage";

const ClothingPage = () => {
    const { id } = useParams();
    const [clothing, setClothing] = useState<Clothing | null>(null);
    const [size, setSize] = useState<string>("");
    const [dropdown, setDropDown] = useState<boolean>(false);

    useEffect(() => {
        getClothingById(id!);
    }, [])

    const getClothingById = async (id: string) => {
        console.log(id);
        await INV_API.get(`/products/clothings/id?id=${id}`)
            .then((resp) => setClothing(resp.data))
            .catch((e) => console.log(e))
    }

    return (
        clothing ?
            <div className="flex px-52 py-10 gap-10">
                <div>
                    <img style={{ width: "700px" }} src={require("../../assets/img/tees/" + clothing?.img + ".png")} />
                </div>
                <div className="flex flex-col gap-5 font-achivo">
                    <h1 className="font-bold text-3xl">{clothing.name}</h1>
                    <h2 className="text-xl">${clothing.price}.00 USD</h2>
                    <div className="flex flex-col gap-2 cursor-pointer">
                        <div className="flex items-center gap-2" onClick={() => setDropDown(!dropdown)}>
                            <button>Size</button>
                            <ChevronDownIcon />
                        </div>
                        {dropdown && <DropDown options={clothing.sizes} setSize={setSize} />}
                    </div>
                    <button className="w-96 py-3 bg-slate-500 text-white rounded-sm hover:shadow-xl transition-all ease-in-out">Add to cart</button>
                </div>
            </div>
            : <LoadingPage />
    );
}

export default ClothingPage;


interface DropDownProp {
    options: Size[];
    setSize: Function;
}

const DropDown = ({ options, setSize }: DropDownProp) => {
    return (
        <div className="border-2 border-black">
            <ul>
                {options.map((o) => (
                    <li className="border px-5 py-2 hover:bg-gray-100" onClick={() => setSize(o.size)}>{o.size}</li>
                ))}
            </ul>
        </div>
    );
}