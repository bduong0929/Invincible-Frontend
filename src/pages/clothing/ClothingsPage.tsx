import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import INV_API from "../../ApiConfig";
import Clothing from "../../models/Clothing";
import LoadingPage from "../LoadingPage";
import ClothingCard from "./ClothingCard";
import ClothingFilter from "./ClothingFilter";

const ClothingPage = () => {
    const { name } = useParams();
    const [clothings, setClothings] = useState<Clothing[] | null>(null);

    useEffect(() => {
        getClothingByName(name!)
    }, [name]);


    const getClothingByName = async (name: string) => {
        if (name === "all") {
            await INV_API.get("/products/clothings")
                .then((resp) => setClothings(resp.data))
                .catch((e) => console.log(e));
        } else {
            await INV_API.get("products/name?name=" + name)
                .then((resp) => resp.data.map((p: any) => setClothings(p.clothings)))
                .catch((e) => console.log(e));
        }
    }

    return (
        <div className="px-52 pb-10">
            {clothings ?
                <>
                    <h1 className="font-bold text-4xl font-achivo mt-10">{name?.toUpperCase()}</h1>
                    <ClothingFilter clothings={clothings} />
                    <ClothingCard clothings={clothings} />
                </> : <LoadingPage />}
        </div>
    );
}

export default ClothingPage;