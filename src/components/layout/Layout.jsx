// components/layout/Layout.jsx
import { useState } from 'react'
import Sidebar from './Sidebar'
import MainContent from './MainContent'
import Footer from './Footer'
/* layout de base contenant le menu et les contact */
function Layout({ children }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    return (
    <div >

        <div className="flex min-h-screen ">
            <Sidebar 
                isOpen={isSidebarOpen}                    // ← Passe le state
                onClose={() => setIsSidebarOpen(false)}  // ← Fonction pour fermer le sidebar
            />

            <MainContent 
                isOpen={isSidebarOpen} 
            >  {/*  ← Passe le state */}
                {children}
            </MainContent>

            {/* Bouton burger (visible quand sidebar fermée) */}
            {!isSidebarOpen && (
                <button
                onClick={() => setIsSidebarOpen(true)}
                className="fixed top-6 left-6 z-50 bg-white p-3 rounded-lg shadow-lg hover:shadow-xl transition"
                >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                </button>
            )} 
        </div>

        <div>
            <Footer/>
        </div>
    </div>
    
  )
}

export default Layout