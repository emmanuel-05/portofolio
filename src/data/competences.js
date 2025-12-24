// src/data/competences.js

// Dans votre fichier competences.js
import { Smartphone, Database, Monitor,  Code2} from 'lucide-react';

export const competences = [
  {
    id: 1,
    icon: Code2,
    title: 'Developpement web',
    description: "Création de sites web interactifs, responsives et performants avec HTML, CSS, JavaScript et frameworks modernes.",
    tags: ['Django', 'NEST', 'JavaScript', 'React', 'Tailwind']
  },
  {
    id: 2,
    icon: Smartphone,
    title: "Developpement d'applications mobiles",
    description: 'Création de logos, chartes graphiques, supports visuels et identité visuelle complète',
    tags: ['illustrator', 'inDesign', 'photoshop', 'canva']
  },
  {
    id: 3,
    icon: Database,
    title: 'Data engenneer',
    description: 'Création de logos, chartes graphiques, supports visuels et identité visuelle complète',
    tags: ['illustrator', 'inDesign', 'photoshop', 'canva']
  },
  {
    id: 4,
    icon: Monitor,
    title: 'Infographie',
    description: 'Création de logos, chartes graphiques, supports visuels et identité visuelle complète',
    tags: ['illustrator', 'inDesign', 'photoshop', 'canva']
  },
]