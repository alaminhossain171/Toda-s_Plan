import React from 'react'

const Todo2 = (props) => {
    return (
        <div  >
              <li>{props.text}<i onClick={() => {
            props.onCheck(props.id);
          }} style={{marginLeft:"10px"}} class="far fa-trash-alt"></i></li>
        </div>
    )
}

export default Todo2
