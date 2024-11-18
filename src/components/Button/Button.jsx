import './Button.css'

export default function Button({children}) {
function handleClick() {
     console.log('button clicked')
}
    return <button 
        className='button' 
        onClick={handleClick} 
        onDoubleClick={() => console.log('dbl')}
        >
        {children} 
    </button>
}