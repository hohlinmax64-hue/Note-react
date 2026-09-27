import SearchInput from "../Search/SearchInput.jsx";


export default function Header({input, setInput}) {
    return (
        <header className="flex justify-between items-center p-2 bg-slate-900">
            <h1 className={'text-white text-3xl cursor-pointer'}>
                🗒️ Notes
            </h1>
            <SearchInput input={input} setInput={setInput} />
        </header>
    )
}