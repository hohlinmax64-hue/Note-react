import Input from '../UI/Input.jsx';

export default function FilterBar({input, setInput, select, seSelcet, selectDate, setSelectedDate}) {

    return (
<div className="flex items-center justify-between gap-4 p-4 bg-white border border-gray-200 rounded-2xl shadow-sm">
    <Input
        className="text-base border border-gray-200 rounded-xl px-4 py-3 w-1/3 bg-gray-50 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all duration-200 placeholder:text-gray-400"
        value={input.searchFilter}
        onChange={setInput}
        placeholder={'🔍 Search...'}
    />

    <select
        value={select}
        onChange={(event) => seSelcet(event.target.value)}
        className="px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-700 font-medium text-sm outline-none cursor-pointer hover:border-indigo-300 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all duration-200"
    >
        <option value='All'>All</option>
        <option value='Ideas'>Ideas</option>
        <option value='Work'>Work</option>
        <option value='Personal'>Personal</option>
        <option value='Study'>Study</option>
    </select>

    <select
        value={selectDate}
        onChange={(e) => setSelectedDate(e.target.value)}
        className="px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-700 font-medium text-sm outline-none cursor-pointer hover:border-indigo-300 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all duration-200"
    >
        <option value='Newest'>Newest</option>
        <option value='Old'>Old</option>
    </select>
</div>
    )
}