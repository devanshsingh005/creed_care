import { Outlet } from "react-router-dom";
import Footer from "../features/home/footer/footer";
import Navbar from "../features/home/navbar/Navbar";

export const MainLayout = ({ children }: { children?: React.ReactNode }) => {
    return (
        <div>
            <Navbar />
            {children || <Outlet />}
            <Footer />
        </div>

    );
}
