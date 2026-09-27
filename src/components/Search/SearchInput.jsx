import Input from "../UI/Input.jsx";

export default function SearchInput({ input, setInput }) {

    return (
        <>
            <Input className={'w-1/3 text-white text-xl placeholder-white p-1 outline-none'}
                   type={'text'}
                   value={input.search}
                   onChange={setInput}
                   placeholder={'🔍Search...'}/>
        </>
    )
}


