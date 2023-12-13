export const Card = ({cover, title}) => {
    return (
		<article className="card-logement">
			<img src={cover} alt="location" aria-label='logement' />
			<div className="card-logement__layer">
				<p className="card-logement__title">{title}</p>
			</div>
		</article>
	);
}

