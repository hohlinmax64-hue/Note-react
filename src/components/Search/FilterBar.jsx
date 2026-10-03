import Input from '../UI/Input.jsx';

export default function FilterBar({input, setInput, select, seSelcet, selectDate, setSelectedDate}) {

    return (
        <div className="border-2 border-dark p-2 flex justify-between">
            <Input className={'text-xl border-b border-red-400 w-1/3'} value={input.searchFilter} onChange={setInput} placeholder={'🔍 Search...'} />

            <select value={select} onChange={(event) => seSelcet(event.target.value)}>
                <option value='All'>All</option>
                <option value='Ideas'>Ideas</option>
                <option value='Work'>Work</option>
                <option value='Personal'>Personal</option>
                <option value='Study'>Study</option>
            </select>

            <select value={selectDate} onChange={(e) => setSelectedDate(e.target.value)}>
                <option value='Newest'>Newest</option>
                <option value='Old'>Old</option>
            </select>
        </div>
    )
}