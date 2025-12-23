// components/layout/Layout.jsx
import Sidebar from './Sidebar'
import MainContent from './MainContent'
import Footer from './Footer'

function Layout({ children }) {
    return (
    <div>
        <div className="flex min-h-screen">
            <Sidebar />  {/* Composant avec du contenu */}
            <MainContent>
                {children}
            </MainContent>  {/* Zone pour le contenu principal */}
        </div>
        <div>
            <Footer/>
        </div>
    </div>
    
  )
}

export default Layout