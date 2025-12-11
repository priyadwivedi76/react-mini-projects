import React from 'react'

const Card = ({hero}) => {
    if(hero == 'Joker'){
        throw new console.error('Something went wrong');
    }

  return (
    <div>{hero}</div>
  )
}

export default Card