export default function Button({children, onClick, className}) {

    return (
        <>
            <button type='button' onClick={onClick} className={className}>
                {children}
            </button>
        </>
    )
}
