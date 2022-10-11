import { Route, Routes } from "react-router-dom";
import ErrorPage from "../../pages/ErrorPage";
import HomePage from "../../pages/HomePage";
import Layout from "./Layout";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="*" element={<ErrorPage />} />
            </Route>
        </Routes>
    );
}