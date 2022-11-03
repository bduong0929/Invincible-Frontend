import { Outlet } from "react-router";

{
    /*
     * Layout is the parent of all the routing
     * this allows us to protect certain routes from being access
     * if the user is not an admin etc. they cannot see the children route (Outlet)
     */
}
export default function Layout() {
    return (
        <main className="App">
            {/* children routes */}
            <Outlet />
        </main>
    );
}