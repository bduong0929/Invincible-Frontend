import { FaChevronDown } from "react-icons/fa";

const ClothingFilter = () => {
    return (
        <div className="flex item-center mt-10 gap-10 text-slate-500">
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
    );
}

export default ClothingFilter;