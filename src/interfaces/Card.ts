import Suit from './Suit';

export default interface Card {
    type: 'card';
    readonly value: number;
    readonly suit: Suit;
    isShown: boolean;
};