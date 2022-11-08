import { FaChevronDown } from "react-icons/fa";
import Clothing from "../../models/Clothing";



interface ClothingProp {
    clothings: Clothing[];
}

const ClothingFilter = ({ clothings }: ClothingProp) => {
    return (
        <div className="flex justify-between item-center mt-10 text-slate-500">
            <div className="flex items-center gap-10">
                <p>Filter: </p>
                <ul className="flex items-center gap-10">
                    <div className="flex items-center gap-2 cursor-pointer">
                        <li>Availability</li>
                        <FaChevronDown />
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer">
                        <li>Size</li>
                        <FaChevronDown />
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer">
                        <li>Price</li>
                        <FaChevronDown />
                    </div>
                </ul>
            </div>
            <div className="flex items-center gap-5 font-achivo text-slate-500">
                <p>Sort by:</p>
                <ul>
                    <div className="flex items-center gap-2 cursor-pointer">
                        <li>Featured</li>
                        <FaChevronDown />
                    </div>
                </ul>
                <p>{clothings.length} products</p>
            </div>
        </div>
    );
}

export default ClothingFilter;