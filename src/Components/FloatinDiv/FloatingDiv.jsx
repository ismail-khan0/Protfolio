import React from 'react'
import './FloatingDiv.css'
function FloatingDiv(props) {
  return (
    <div className='floatingDiv'>
<img src={props.image} alt=''></img>
<span>
    {props.txt1}
    <br />
    {props.txt2}
</span>

    </div>
  )
}

export default FloatingDiv
