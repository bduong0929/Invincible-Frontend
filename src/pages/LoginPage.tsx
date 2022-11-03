import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { UsernameRegex } from "../components/Regex";

export default function LoginPage() {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [validUsername, setIsValidUsername] = useState<boolean>(true);

    function submit(e: FormEvent) {
        e.preventDefault();
        
        if (!UsernameRegex.test(username)) {
            setIsValidUsername(false);
            return;
        } else setIsValidUsername(true);

        setUsername("");
        setPassword("");
    }

    return (
        <form onSubmit={(e) => submit(e)}>
            <div className="flex flex-col items-center">
                <div>
                    <h1 className="font-bold text-5xl font-mono mt-60">LOGIN...</h1>
                </div>

                <div className="flex flex-col">
                    <label className="mt-5 font-mono">Username</label>
                    <input className="px-3 py-2 bg-slate-100 rounded-md shadow-xl font-mono" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    {!validUsername ? <label className="font-mono text-red-500 mt-1">Please enter a valid username</label> : null }

                    <label className="mt-10 font-mono">Password</label>
                    <input className="px-3 py-2 bg-slate-100 rounded-md shadow-xl font-mono" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div className="flex flex-col gap-5">
                    <button className="mt-10 bg-gradient-to-r from-slate-300 to-blue-200 px-2 py-1 rounded-md font-bold shadow-xl">LOGIN</button>
                    <Link to={"/account/register"} className="text-blue-500">Create new account?</Link>
                </div>
            </div>
        </form>
    );
}