import Footer from "../Footer";
import Navbar from "../Navbar";

function Layout(props) {
    return (
        <>
            <Navbar />
                <container>
                    {props.children}
                </container>
            <Footer />
            
        </>
    )

}

export default Layout;