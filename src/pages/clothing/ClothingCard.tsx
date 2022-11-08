import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CLothing from "../../models/Clothing";

interface ClothingProp {
    clothings: CLothing[];
}

const ClothingCard = ({ clothings }: ClothingProp) => {
    const [picture, setPicture] = useState<string>("");

    const onEnterChangePicture = (pictureName: string) => {
        setPicture(pictureName + "2");
    }

    const onLeaveChangePicture = (pictureName: string) => {
        setPicture(pictureName);
    }

    return (
        <ul className="grid grid-cols-4 gap-10 mt-10 items-center">
            {clothings?.map((c) => (
                <Link to={`/products/${c.id}`}>
                    <div className="flex flex-col gap-5 cursor-pointer hover:shadow-2xl rounded-md">
                        <div className="overflow-hidden">
                            <img className="transition ease-out hover:scale-105" src={require("../../assets/img/tees/" + c.img + ".png")} />
                        </div>
                        <div className="flex flex-col items-center py-5">
                            <li className="font-bold">{c.name}</li>
                            <li className="font-achivo">{"$" + c.price + ".00 USD"}</li>
                        </div>
                    </div>
                </Link>
            ))}
        </ul>
    );
}

export default ClothingCard;