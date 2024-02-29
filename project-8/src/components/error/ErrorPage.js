import { Link } from 'react-router-dom'

//404 error component who gets rerouting with "error" into the URL
//on the Error.js file thanks to the useNavigate hook
export const ErrorPage = () => {
  return (

    <div className="errorContainer">
			<p className="errorNumber">404</p>
			<p className="errorText">Oups! La page que vous demandez n'existe pas.</p>
			<Link to="/" aria-label = "Error Page" className="errorLinkHome">
				Retourner sur la page d’accueil
			</Link>
		</div>
  );
}
