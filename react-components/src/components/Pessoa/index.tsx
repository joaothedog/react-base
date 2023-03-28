interface PessoaProps {
  data: {
    name: string,
    age: number
  }
}

const Pessoa = ({data}: PessoaProps) => {
  return(
    <li>
      Nome é: {data.name} e possui {data.age} anos.
    </li>
  )
}

export default Pessoa;