import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import { Separator } from "@radix-ui/react-separator";
function Layout() {
    return (
        <div className="max-w-md mx-auto bg-white rounded-xl border border-1 borderColor ring-orange-500 mt-10">
            <Header />
            <Separator />
            <Outlet />
        </div>
    )
}
export default Layout