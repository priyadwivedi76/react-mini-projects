
const Button = ({text,color,onChange}) => {
  return (
    <button 
        style={{backgroundColor:color}}
        onClick={()=>onChange(color)}
        className='text-black font-semibold rounded-[10px] my-4 py-1 px-2'>
        {text}
    </button>
  )
}

export default Button