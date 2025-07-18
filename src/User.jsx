import React from 'react'

const User = (props) => {
let num=[1,2,3,4,5,6,7,8,9,10];
console.log(...num);


  return (
    <>
    <div>{props.name}</div>
    </>
  )
}

export default User