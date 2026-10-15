
export default function Header() {
    return (
        <header className="flex justify-between items-center px-8 py-4 bg-slate-900 border-b border-slate-700/70 shadow-lg">
            <h1 className="text-white text-3xl font-bold tracking-tight cursor-pointer flex items-center gap-3 hover:text-indigo-300 transition-colors duration-200">
        <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-indigo-500/20 border border-indigo-400/20 text-2xl">
            🗒️
        </span>
                <span>
            Notes
            <span className="text-indigo-400">.</span>
        </span>
            </h1>

            <div className="flex items-center gap-3">
        <span className="hidden sm:block text-sm text-slate-400">
            Your thoughts, organized.
        </span>
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-lg font-semibold">
                    ✨
                </div>
            </div>
        </header>
    )
}