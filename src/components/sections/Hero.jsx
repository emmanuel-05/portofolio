/* Section "Bienvenue */
// src/components/sections/Hero.jsx
import Button from "../ui/Button"
function Hero() {
  return (
    <section className="pt-0 pb-12 ">
      {/* En-tête */}
      <div className="mb-12 ml-15">
        <h1 className="text-4xl font-bold mb-4">
          Bienvenue sur mon portfolio !
        </h1>
        
        <p className="text-gray-600 mb-6 max-w-3x2 mr-20">
          Je suis une créative passionnée par la modélisation 3D, le design graphique, 
          le web design et l'intégration dans Unreal Engine. Je vous invite à explorer 
          un aperçu de mes projets, de mes compétences, et de mon univers visuel.
        </p>
        <Button>TÉLÉCHARGER MON CV</Button>
      </div>
      <div className="mx-auto h-0.5 w-full bg-black"></div>
    </section>
  )
}

export default Hero