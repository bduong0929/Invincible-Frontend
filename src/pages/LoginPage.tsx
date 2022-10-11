import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";

{
    /*
     * allow uses to login with username and password
     * also have regex for input validation
     */
}
export default function LoginPage() {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    // const [validUsername, setValidUsername] = useState<boolean>(true);
    // const [validPassword, setValidPassword] = useState<boolean>(true);

    function submit(e: FormEvent) {
        e.preventDefault();

        // if (!UsernameRegex.test(username)) {
        //     setValidUsername(false);
        //     return;
        // } else setValidUsername(true);

        // if (!PasswordRegex.test(password)) {
        //     setValidPassword(false);
        //     return;
        // } else setValidPassword(true);


    }
    return (
        <div className="flex flex-col items-center">
            <form className="m-60 p-20 rounded-md bg-slate-700 shadow-xl text-white" onSubmit={(e) => submit(e)}>
                <h1 className="text-5xl font-bold font-mono">Login...</h1>

                <div className="flex flex-col mt-10 gap-2">
                    <label className="font-mono">Username</label>
                    <input
                        className="px-2 py-1 bg-slate-200 rounded-md shadow-md text-black"
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>

                <div className="flex flex-col mt-5 gap-2">
                    <label className="font-mono">Password</label>
                    <input
                        className="px-2 py-1 bg-slate-200 rounded-md shadow-md text-black"
                        type="password"
                        placeholder="Username"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div className="flex flex-col items-center mt-10 gap-5">
                    <button className="px-2 py-1 bg-white text-black rounded-md font-bold font-mono shadow-sm">SIGN IN</button>
                    <Link to={"/account/signup"} className="text-blue-500 font-mono">Create new account</Link>
                </div>
            </form>
        </div>
    );
}