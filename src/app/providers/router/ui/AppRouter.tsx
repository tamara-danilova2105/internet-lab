import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { MainPage } from "../../../../pages/MainPage";
import { Footer } from "@/entities/Footer";

const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<MainPage />} />
            </Routes>
            <Footer />
        </Suspense>
    );
};

export default AppRouter;