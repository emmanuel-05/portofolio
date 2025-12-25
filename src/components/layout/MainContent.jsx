// src/components/layout/MainContent.jsx
import CompetenceCard from '../ui/CompetenceCard'
import { competences } from '../../data/competences'
import Hero from "../sections/Hero"

function MainContent({ isOpen, onClose }) {
  return (
    
      <main className={`
      ${isOpen ? 'ml-[300px]' : 'ml-0'} flex-1 min-h-screen bg-red-50 p-8 overflow-y-auto`}
      >
      <div className="max-w-6xl mx-auto">
   
    
        <Hero />
        <div className="inline-block mb-10">
            <h2 className="text-2xl font-bold">Domaines de compétences</h2>
            <div className="h-1 w-full bg-red-500 mt-2"></div>
        </div>
      
        {/* Grille de compétences */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {competences.map((comp) => (
            <CompetenceCard
                key={comp.id}
                icon={comp.icon}
                title={comp.title}
                description={comp.description}
                tags={comp.tags}
            />
            ))}
        </div>
      </div>
    </main>
  )
}

export default MainContent