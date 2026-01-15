
import { Link } from 'react-router-dom'

export function Document() {
  return (
    <main className='flex-1 flex items-center justify-center text-rotion-400'>
      Seu Documento Está Aqui

      <br />

      <Link to="/">Acessar Blank</Link>
    </main>
  )
}
