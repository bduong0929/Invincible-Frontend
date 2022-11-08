
const Footer = () => {
    return (
        <footer>
            <hr />
            <div className="flex justify-between font-achivo px-52 py-16">
                <div className="flex flex-col gap-5">
                    <h1 className="font-bold text-xl">INVINCIBLE</h1>
                    <p className="text-slate-500">invincible@gmail.com</p>
                </div>

                <div className="flex flex-col gap-5 text-slate-500">
                    <h2>ABOUT</h2>
                    <h2>INSTAGRAM</h2>
                    <h2>CONTACT US</h2>
                </div>

                <div className="flex flex-col gap-5 text-slate-500">
                    <h2>RETURN & EXCHANGES</h2>
                    <h2>TERM & CONDITIONS</h2>
                    <h2>PRIVACY POLICY</h2>
                </div>
            </div>
            <hr />

            <p className="text-slate-500 text-center py-10 text-xs">© 2022, INVINCIBLE</p>
        </footer>
    );
}

export default Footer;
