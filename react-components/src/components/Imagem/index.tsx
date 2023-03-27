interface ImagemProps {
  url?: string,
  subtitle: string,
  children: React.ReactNode;
}

const Imagem = ({url, subtitle, children}: ImagemProps) => {
  return (
    <>
      {children}
      <p>{subtitle}</p>
    </>
  )
}

export default Imagem;