import React, { Component } from 'react';
import { Card, Suit } from './interfaces';
import { 
    renderHearts,
    renderClubs,
    renderDiamonds,
    renderSpades,
    renderBack,
    renderSpace,
    renderText,
    clearCard,
    initCard,
} from './cardRenderers';

import './ReactCard.css';
interface CardProps {
    card: Card;
    onClick: (card: Card) => void;
};

export default class ReactCard extends Component<CardProps, {}, {}> {
    public constructor(props: CardProps) {
        super(props);
    };

    public componentDidMount: () => void = () => {
        this.renderCard();
    };

    public componentDidUpdate: () => void = () => {
        this.renderCard();
    };

    public render = (): React.ReactNode => {
        const { card, onClick } = this.props;
        return (
            <div className="react-card-holder" onClick={() => onClick(card)}>
                {initCard(card)}
            </div>
        );
    };

    private renderCard = (): void => {
        const { card } = this.props;
        const ctx = (this.refs.canvas as HTMLCanvasElement).getContext('2d');
        if (ctx !== null) {
            clearCard(ctx);
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