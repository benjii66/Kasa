import { Link } from 'react-router-dom'

//404 error component
export const ErrorPage = () => {
  return (

    <div>
    <p>404</p>
    <p>Oups! La page que vous demandez n'existe pas.</p>
    <Link to="/" aria-label = "Error Page">
        Retourner sur la page d’accueil
    </Link>
    </div>
  );
}
