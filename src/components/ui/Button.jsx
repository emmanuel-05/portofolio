
function Button({children}) {
  return (
    <button className="px-6 py-3 border-2 border-black hover:bg-black hover:text-white transition">
      {children}
    </button>
  )
}

export default Button

