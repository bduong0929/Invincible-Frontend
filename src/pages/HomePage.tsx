import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div className="flex flex-col items-center">
            <img
                src="https://media.zicxa.com/1514044"
                style={{ width: "100%", height: "900px", objectFit: "cover" }}
            />

            <div
                className="flex flex-col items-center gap-5 absolute"
                style={{ top: "40%" }}>

                <h2
                    className="text-5xl text-white font-bold font-achivo">BE INVINCIBLE
                </h2>

                <Link
                    to={"/collections/all"}
                    className="bg-white px-5 py-3 font-achivo rounded-sm transition-all ease-in hover:bg-slate-600 hover:text-white hover:px-6">SHOP NOW
                </Link>
            </div>
        </div>
    );
}

export default HomePage;