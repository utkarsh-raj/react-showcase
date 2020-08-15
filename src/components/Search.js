import React from 'react'
import Dropdown from './Dropdown'

function Search() {
    return (
        <div>
            <div class="jumbotron">
                <h1>Search for suppliers</h1>
                <p>Searh by filters</p>
                <div style={{ display: "flex" }}>
                    <Dropdown label="Product Requirements" />
                    <Dropdown label="Cost Bracket" />
                    <Dropdown label="Quantity" />
                    <Dropdown label="Rating" />
                    <Dropdown label="Lead Time" />
                    <Dropdown label="Location" />
                    <span class="input-group-btn">
                        <button class="btn btn-success" type="button">Search</button>
                    </span>
                </div>
                <br></br>
                <p>Or search by names</p>
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="Search for hundreds of products" />
                    <span class="input-group-btn">
                        <button class="btn btn-success" type="button">Search</button>
                    </span>
                    <div class="input-group-btn">
                        <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sort by <span class="caret"></span></button>
                        <ul class="dropdown-menu">
                            <li><a href="#">Price</a></li>
                            <li><a href="#">Average Rating</a></li>
                            <li><a href="#">Latest</a></li>
                            <li role="separator" class="divider"></li>
                            <li><a href="#">Other metric</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search