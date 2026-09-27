export default function Input({value, onChange, placeholder, type='text', className}) {

    return (
        <>
            <input value={value} onChange={onChange} placeholder={placeholder} type={type} className={className}/>
        </>
    )
}