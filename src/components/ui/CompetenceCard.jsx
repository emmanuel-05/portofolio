function CompetenceCard({ icon, title, description, tags }) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition">
      {/* Icône en losange */}
      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 bg-white border-2 border-gray-200 rotate-45 flex items-center justify-center">
          <span className="text-2xl -rotate-45">{icon}</span>
        </div>
      </div>
      
      <h3 className="text-lg font-bold mb-3 text-center">{title}</h3>
      <p className="text-sm text-gray-600 mb-4 text-center">{description}</p>
      
      <div className="flex flex-wrap gap-2 justify-center">
        {tags.map((tag, index) => (
          <span 
            key={index}
            className="text-xs text-red-500"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export default CompetenceCard