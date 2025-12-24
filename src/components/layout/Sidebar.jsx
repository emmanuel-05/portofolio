import { MailCheck } from 'lucide-react';
import { Phone } from 'lucide-react';
import { MapPinHouse } from 'lucide-react';
import { Linkedin  } from 'lucide-react';


function Sidebar() {
  return (
    <aside className="w-[300px] fixed h-screen p-6">
      {/* <aside className="w-[300px] fixed h-screen p-6"> */}
      {/* En-tête Menu */}
      {/* <div className="mb-8">
        <h2 className="text-2xl font-bold">Menu</h2>
        <div className="h-1 w-12 bg-red-500 mt-2"></div>
      </div> */}
      <div className="inline-block mb-10">
            <h2 className="text-2xl font-bold">Menu</h2>
            <div className="h-1 w-full bg-red-500 mt-2"></div>
      </div>

      {/* Navigation */}
      <nav className="mb-12">
        <ul className="space-y-9">
          <div className="block mb-6">
            <li><a href="#accueil" className="hover:text-red-500">ACCUEIL</a></li>
            <div className="h-0.25 w-full bg-gray mt-2"></div>
          </div>
          <div className="block mb-6">
            <li><a href="#accueil" className="hover:text-red-500">DESIGN</a></li>
            <div className="h-0.25 w-full bg-gray mt-2"></div>
          </div>
          <div className="block mb-6">
            <li><a href="#accueil" className="hover:text-red-500">MODELISATION 3D</a></li>
            <div className="h-0.25 w-full bg-gray mt-2"></div>
          </div>
          <div className="block mb-6">
            <li><a href="#accueil" className="hover:text-red-500">SITE WEB</a></li>
            <div className="h-0.25 w-full bg-gray mt-2"></div>
          </div>
          <div className="block mb-6">
            <li><a href="#accueil" className="hover:text-red-500">CREATION DE VISUEL</a></li>
            <div className="h-0.25 w-full bg-gray mt-2"></div>
          </div>

        </ul>
      </nav>
      
      {/* Section Contact */}
      <div>
        <div className="inline-block mb-10">
            <h2 className="text-2xl font-bold">Contact</h2>
            <div className="h-1 w-full bg-red-500 mt-2"></div>
        </div>
        
        <div className="space-y-5">
          <div className="flex items-center gap-2">
            <span><MailCheck color='red'/></span>
            <a href="mailto:gnamien.em@gmail.com">gnamien.em@gmail.com</a>
          </div>
          
          <div className="flex items-center gap-2">
            <span><Phone color='red'/></span>
            <span className="text-sm">+225 01 40 44 71 46</span>
          </div>
          
          <div className="flex items-center gap-2">
            <span><MapPinHouse color='red'/></span>
            <span className="text-sm">Treicheville, CI</span>
          </div>
          
          <div className="flex items-center gap-2">
            <span><Linkedin color='red'/></span>
            <span className="text-sm">LinkedIn</span>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar