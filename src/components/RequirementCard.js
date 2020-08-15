import React from 'react'

function RequirementCard(props) {
    return (
        <div class="requirement-card">
            <div class="media">
                <div class="media-left media-middle">
                    <a href="#">
                        <img class="media-object" src={props.content.image} width="80" height="80"></img>
                    </a>
                </div>
                <div class="media-body">
                    <h4 class="media-heading"><strong>{props.content.name}</strong></h4>
                    <h5 class="media-heading">{props.content.role}, {props.content.organisation}</h5>
                    <h5><i class="fas fa-envelope-square" /> {props.content.email}</h5>
                    <h5><i class="fas fa-map-marker" /> {props.content.location}</h5>
                </div>
            </div>
            <div>
                <p>
                    <strong>Requirement: {props.content.requirement}</strong>
                    <ul>
                        <li>Garment: {props.content.garment}</li>
                        <li>Quantity: {props.content.quantity}</li>
                        <li>Cost Bracket: {props.content.costBracket}</li>
                        <li>Lead Time Provision: {props.content.leadTimeProvision}</li>
                    </ul>
                </p>
            </div>
        </div>
    )
}

export default RequirementCard