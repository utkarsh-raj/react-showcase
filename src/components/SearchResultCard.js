import React from 'react'

function SearchResultCard(props) {
    return (
        <div class="row search-result-card">
            <div class="col-sm-6">
                <div class="media-left media-middle">
                    <a href="#">
                        <img class="media-object" src={props.content.image} width="100" height="100"></img>
                    </a>
                </div>
                <div class="media-body">
                    <h4 class="media-heading">{props.content.name}</h4>
                    <h5 class="media-heading">{props.content.role}, {props.content.organisation}</h5>
                <hr></hr>
                    <h5>Rating: <i class="fas fa-star"></i> {props.content.rating}</h5>
                    <h5><i class="fas fa-envelope-square"></i> {props.content.email}</h5>
                    <h5><i class="fas fa-map-marker"></i> {props.content.location}</h5>
                </div>
            </div>
            <div class="col-sm-6">
                <h4>Availability Confirmed: {props.content.availabilityConfirmed}</h4>
                <br />
                <h4>Cost Bracket: {props.content.costBracket}</h4>
                <br />
                <h4>Lead Time Provision: {props.content.leadTimeProvision}</h4>
            </div>
        </div>
    )
}

export default SearchResultCard