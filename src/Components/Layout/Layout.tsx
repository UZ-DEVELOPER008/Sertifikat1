import {FC, PropsWithChildren} from 'react'
import Navbar from '../Navbar/navbar'
import Footer from '../footer/footer'

const Layout:FC <PropsWithChildren> = ({children}) => {
    return(
        <>
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Layout