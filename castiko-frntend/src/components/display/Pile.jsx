import React, { PropTypes as T } from 'react';
import RankSymbol from './RankSymbol.jsx';
import { Colors, Dimensions, CardsLayouts } from '../../constants';

const Pile = ({ children, isOver, canDrop, color }) => {
    let top = 0;

    const cards = React.Children.map(children, (element, index) => {

        return React.cloneElement(
            element,
            { style: {
                top,
                position: 'absolute'
            } }
        )
    });

    return (
        <div style={{
            backgroundColor:
                isOver && canDrop && Colors.Card.upturned
                || Colors.Foundation.backgroundColor,
            position: 'relative',
            color: isOver && canDrop && color || Colors.Game.backgroundColor,
            height: Dimensions.Card.height,
            width: Dimensions.Card.width,
            transition: 'all 250ms'
        }}>
            {cards}
            {<RankSymbol symbol={CardsLayouts.K} />}
        </div>
    );
}

Pile.propTypes = {
    children: T.oneOfType([T.arrayOf(T.element), T.object])
}

export default Pile;
