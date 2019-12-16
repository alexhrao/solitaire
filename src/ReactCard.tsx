import React, { FunctionComponent } from 'react';
import { Card, Suit } from './interfaces';

interface CardProps extends Card {
    onClick: (card: Card) => void;
};

export const ReactCard: FunctionComponent<CardProps> = ({ value, suit, isShown, onClick }) => {
    return (
        <div onClick={() => onClick({ type: 'card', value, suit, isShown })}>
            <p>Suit: {suit}</p>
            <p>Value: {value}</p>
        </div>
    );
};