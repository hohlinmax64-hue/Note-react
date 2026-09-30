import Input from '../UI/Input.jsx';

export default function FilterBar({input, setInput}) {

    return (
        <div className="border-2 border-dark p-2 flex justify-between">
            <Input className={'text-xl border-b border-red-400 w-1/3'} value={input.searchFilter} onChange={setInput} placeholder={'🔍 Search...'} />

            <select>
                <option>All</option>
                <option>Ideas</option>
                <option>Work</option>
                <option>Personal</option>
                <option>Study</option>
            </select>

            <select>
                <option>Newest</option>
                <option>Old</option>
            </select>
        </div>
    )
}