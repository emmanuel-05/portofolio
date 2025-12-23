/* (Menu + Contact) */

function Sidebar() {
  return (
    <aside className="w-[300px] fixed h-screen p-6">
      {/* En-tête Menu */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold">Menu</h2>
        <div className="h-1 w-12 bg-red-500 mt-2"></div>
      </div>
      
      {/* Navigation */}
      <nav className="mb-12">
        <ul className="space-y-9">
          <li><a href="#accueil" className="hover:text-red-500">ACCUEIL</a></li>
          <li><a href="#design" className="hover:text-red-500">DESIGN</a></li>
          <li><a href="#modelisation" className="hover:text-red-500">MODELISATION 3D</a></li>
          <li><a href="#visuel" className="hover:text-red-500">CREATION DE VISUEL</a></li>
          <li><a href="#web" className="hover:text-red-500">SITE WEB</a></li>
        </ul>
      </nav>
      
      {/* Section Contact */}
      <div>
        <h3 className="text-xl font-bold mb-4">Contact</h3>
        <div className="h-1 w-12 bg-red-500 mb-4"></div>
        
        <div className="space-y-5">
          <div className="flex items-center gap-2">
            <span>📧</span>
            <span className="text-sm">gnagnamien-em@gmail.com</span>
          </div>
          
          <div className="flex items-center gap-2">
            <span>📞</span>
            <span className="text-sm">+225 01 40 44 71 46</span>
          </div>
          
          <div className="flex items-center gap-2">
            <span>📍</span>
            <span className="text-sm">Treicheville, CI</span>
          </div>
          
          <div className="flex items-center gap-2">
            <span>💼</span>
            <span className="text-sm">LinkedIn</span>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar