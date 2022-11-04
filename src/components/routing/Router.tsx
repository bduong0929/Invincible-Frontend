import { Route, Routes } from "react-router-dom";
import ClothingPage from "../../pages/clothing/ClothingPage";
import ErrorPage from "../../pages/ErrorPage";
import HomePage from "../../pages/HomePage";
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
                <Route path="/collections/:name" element={<ClothingPage />} />

                {/* 404 not found page */}
                <Route path="*" element={<ErrorPage />} />
            </Route>
        </Routes>
    );
}