import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import INV_API from "../../ApiConfig";
import Clothing from "../../models/Clothing";
import LoadingPage from "../LoadingPage";
import ClothingFilter from "./ClothingFilter";

const ClothingPage = () => {
    const { name } = useParams();
    const [clothings, setClothings] = useState<Clothing[] | null>(null);

    useEffect(() => {
        getClothingByName()
    }, [name]);

    useEffect(() => {
        console.log(clothings);
    })

    const getClothingByName = async () => {
        await INV_API.get(`/products/name?name=${name}`)
            .then((resp) => resp.data.map((p: any) => setClothings(p.clothings)))
            .catch((e) => console.log(e));
    }

    return (
        <div className="px-52">
            {clothings ?
                <>
                    <h1 className="font-bold text-4xl font-achivo mt-10">{name?.toUpperCase()}</h1>
                    <ClothingFilter />
                    <ul className="flex flex-wrap mt-20 gap-5 items-center">
                        {clothings?.map((c) => (
                            <div className="flex flex-col gap-5 cursor-pointer">
                                <img className="w-80" src={require("../../assets/img/tees/" + c.img + ".png")} alt="" />
                                <li className="font-bold">{c.name}</li>
                                <li className="font-achivo">{"$" + c.price + ".00 USD"}</li>
                            </div>
                        ))}
                    </ul>
                </> : <LoadingPage />}
        </div>
    );
}

export default ClothingPage;