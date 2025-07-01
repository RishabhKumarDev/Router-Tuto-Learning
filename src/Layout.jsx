import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
// “We first define a layout in a file, and because of that, the header and footer will be the same;
//  all the content inside will be changed due to the outlet.”
const Layout = () => {
    return ( 
        // When the route changes (e.g. from / to /about), only the component inside <Outlet /> updates. The layout (header/footer/etc.) stays untouched.
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
        
     );
}
 
export default Layout;