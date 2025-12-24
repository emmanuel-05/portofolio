
function Button({children, href}) {
  return (
    <a href={href} target="_blank" className="px-6 py-3 border-2 border-black hover:bg-black hover:text-white transition">
      {children}
    </a>
  )
}

export default Button

