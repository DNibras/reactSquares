import "./style.css"
const Square = ({index, style, onClick}: {index: number, style: React.CSSProperties, onClick: (index: number) => void}) => {

  return (
    <div 
      className="Square"
      style={style}
      onClick={() => onClick(index)}
    ></div>
  )
}

export default Square