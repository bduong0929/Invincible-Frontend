import { Route, Routes } from "react-router-dom";
import ErrorPage from "../../pages/ErrorPage";
import HomePage from "../../pages/HomePage";
import LoginPage from "../../pages/LoginPage";
import Layout from "./Layout";

{
    /*
     * handles all the routing
     * essentially organizes routing better
     */
}
export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/account/login" element={<LoginPage />} />

                {/* 404 not found page */}
                <Route path="*" element={<ErrorPage />} />
            </Route>
        </Routes>
    );
}