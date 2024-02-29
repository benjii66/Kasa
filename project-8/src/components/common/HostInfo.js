import React from 'react'

//host component to display the host and his profile picture in the house page section
export const Host = (props) => {

	//extract the properties 
    const {hostName, hostPic, id} = props;

  return (
    <aside className="host-area">
		{/* display his name  */}
			<div className="host-name">{hostName}</div>
			{/* display his picture  */}
			<div className="hostPicture">
				<img src={hostPic} alt={id} aria-label={id}/>
			</div>
		</aside>
  )
}

