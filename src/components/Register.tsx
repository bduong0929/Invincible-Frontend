
export default function Register() {
    return (
        <div className="mt-60">
            <h1 className="mb-10 font-mono text-5xl">Register...</h1>

            <div className="flex flex-col gap-2">
                <label className="font-mono">Username</label>
                <input className="px-2 py-1 font-mono bg-slate-200 rounded-md shadow-xl" type="text" placeholder="Username" />
            </div>

            <div className="flex flex-col mt-5 gap-2">
                <label className="font-mono">Password</label>
                <input className="px-2 py-1 font-mono bg-slate-200 rounded-md shadow-xl" type="password" placeholder="Password" />
            </div>

            <div className="flex flex-col mt-5 gap-2">
                <label className="font-mono">Confirm Password</label>
                <input className="px-2 py-1 font-mono bg-slate-200 rounded-md shadow-xl" type="password" placeholder="Confirm Password" />
            </div>

            <div>
                <button className="mt-10 px-2 py-1 bg-green-400 rounded-md font-mono font-bold shadow-md">CREATE ACCOUNT</button>
            </div>
        </div>
    );
}