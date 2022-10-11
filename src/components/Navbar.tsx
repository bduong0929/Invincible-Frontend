import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div>
            <nav className="flex justify-between p-5">
                <ul className="">
                    <Link to={"/workouts"} className="font-mono">Workouts</Link>
                </ul>
                <Link to={"/"} className="font-mono font-bold italic">INVINCIBLE</Link>
                <ul>
                    <Link to={"/account/login"} className="font-mono">Login</Link>
                </ul>
            </nav>
        </div>
    );
}