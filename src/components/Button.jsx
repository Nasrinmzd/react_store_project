
function Button({children}) {
    return (
        <button className="bg-gradient-to-r from-indigo-400 via-indigo-500 to-indigo-600 px-5 py-2 rounded">
            {children}
        </button>
    )
}

export default Button
