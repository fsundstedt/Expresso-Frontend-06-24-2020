import React from 'react';
import { PullBox, PullBoxItem } from '../styled'

export default function PublicPull(props) {
    const pull = props.pull;

    return (
        <PullBox>
            <PullBoxItem>
                {pull.brand} - {pull.roast} Roast {pull.process}
            </PullBoxItem>
            <br />
            <PullBoxItem>
                Grind: {pull.weight_grind}g {pull.grind} for {pull.weight_pull}g Final Weight
            </PullBoxItem>
            <br />
            <PullBoxItem>
                Extraction Time: {pull.pull_time} sec.
            </PullBoxItem>
            <br />
            <PullBoxItem>
                Rating: {pull.rating}
            </PullBoxItem>
            <br />
            <PullBoxItem>
                Notes: {pull.notes}
            </PullBoxItem>
        </PullBox>
    );
}