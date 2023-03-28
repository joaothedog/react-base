interface ButtonProps {
  textButton: string,
  clickFn: (msg: string) => void,
}

const Button = ({textButton, clickFn}:ButtonProps) => {

  const handleClick = () => {
    clickFn('Frase');
  }

  return(
    <button onClick={handleClick}>{textButton}</button>
  )
}

export default Button;