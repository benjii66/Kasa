import React from 'react'

export const Host = (props) => {
    const {hostName, hostPic, id} = props;

  return (
    <aside className="host-area">
			<div className="host-name">{hostName}</div>
			<div className="hostPicture">
				<img src={hostPic} alt={id} aria-label={id}/>
			</div>
		</aside>
  )
}

