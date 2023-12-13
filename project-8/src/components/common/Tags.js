import React from 'react';

//display tags from the JSON file
export const Tags = (props) => {

  //extract the "tag" property from the props
  const {tag} = props;
    return (
    <div>
        <span>{tag}</span>
    </div>
  )
}

