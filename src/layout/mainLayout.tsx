import NavbarComponent from "../components/navbarComponent.tsx";
import {Outlet} from "react-router";
import FooterComponent from "../components/footerComponent.tsx";



const MainLayout = () => {
    return (
        <>
            <NavbarComponent></NavbarComponent>
            <Outlet></Outlet>
            <FooterComponent></FooterComponent>
        </>
    );
};



export default MainLayout;
