import React from 'react'

function Dropdown(props) {
    return (
        <div>
            <div class="btn-group" role="group">
                <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {props.label + " "}
      <span class="caret"></span>
                </button>
                <ul class="dropdown-menu">
                    <li><a href="#">Dropdown link</a></li>
                    <li><a href="#">Dropdown link</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Dropdown