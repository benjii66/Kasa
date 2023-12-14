import React from 'react';

//display tags from the JSON file
export const Tags = (props) => {

  //extract the "tag" property from the props
  const {tag} = props;
    return (
    <div className='tagContainer'>
        <span className='tagButton'>{tag}</span>
    </div>
  )
}

