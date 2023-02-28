import CustomHead from "./Head"
import Footer from "./Footer"


export default function MainLayout({ children }) {
    return (
        <>
        <CustomHead />
        {/* <Header /> */}
        <main>{children}</main>
        {/* <footer> Enourmous Chat App 2023</footer> */}
        <Footer />
        </>
    )
    }