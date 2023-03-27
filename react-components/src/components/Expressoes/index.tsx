const Expressoes = () => {
  const name: string = 'João';
  const age: number = 22;

  function presentation(name: string, age: number) {
    return `me chamo ${name} e possuo ${age} anos!`;
  }

  return(
    <div>
      Sou o componente Expressões:
      <p>
        Minha apresentação: {presentation(name, age)}
      </p>
    </div>
  );
}

export default Expressoes;