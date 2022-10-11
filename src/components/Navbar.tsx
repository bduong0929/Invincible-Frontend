import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";

export default function Navbar() {
    return (
        <div>
            <nav className="flex justify-between px-10 py-5">
                <ul className="">
                    <Link to={"/workouts"} className="font-mono">Workouts</Link>
                </ul>
                <Link to={"/"} className="font-mono font-bold italic">INVINCIBLE</Link>
                <ul className="">
                    <Link to={"/account/login"} className="font-mono"><FaUser /></Link>
                </ul>
            </nav>
        </div>
    );
}