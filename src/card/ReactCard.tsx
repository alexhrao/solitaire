import React, { Component } from 'react';
import { Card, Suit } from '../interfaces';
import renderHearts from './renderHearts';
import renderClubs from './renderClubs';
import renderDiamonds from './renderDiamonds';
import renderSpades from './renderSpades';
import renderBack from './renderBack';
import renderSpace from './renderSpace';
import renderText from './renderText';
import clearCard from './clearCard';
import initCard from './initCard';

import './ReactCard.css';
interface CardProps {
    card: Card;
    onClick: (card: Card) => void;
    isSelected?: boolean;
    moveState?: number;
};

export default class ReactCard extends Component<CardProps, {}, {}> {
    public constructor(props: CardProps) {
        super(props);
    };

    public componentDidMount = () => {
        this.renderCard();
    };

    public componentDidUpdate = () => {
        this.renderCard();  
    };

    public render = (): React.ReactNode => {
        const { card, onClick, moveState } = this.props;
        return (
            <div className={`react-card-holder ${moveState === undefined ? '' : (moveState === 0 ? 'card-move' : 'card-moved')}`} onClick={() => onClick(card)}>
                {initCard(card)}
            </div>
        );
    };

    private renderCard = (): void => {
        const { card, isSelected } = this.props;
        const ctx = (this.refs.canvas as HTMLCanvasElement).getContext('2d');
        if (ctx !== null) {
            clearCard(ctx, isSelected);
            if (!card.isShown) {
                renderBack(ctx);
                return;
            } else if (card.value === -1) {
                renderSpace(ctx);
                return;
            }
            switch (card.suit) {
                case Suit.C:
                    renderClubs(ctx);
                    break;
                case Suit.D:
                    renderDiamonds(ctx);
                    break;
                case Suit.H:
                    renderHearts(ctx);
                    break;
                case Suit.S:
                    renderSpades(ctx);
                    break;
            }
            renderText(ctx, card);
        }
    }
};