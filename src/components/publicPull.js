import React from 'react';

export default function PublicPull(props) {
    const pull = props.pull;

    return (
        <div>
            <div>
                {pull.brand} {pull.roast} Roast
            </div>
            <div>
                Grind: {pull.grind}
            </div>
            <div>
                Grind Weight: {pull.weight_grind}g
            </div>
            <div>
                Water Weight: {pull.weight_pull}g
            </div>
            <div>
                Extraction Time: {pull.pull_time} seconds
            </div>
            <div>
                Rating: {pull.rating}
            </div>
            <div>
                Notes: {pull.notes}
            </div>
        </div>
    );
}