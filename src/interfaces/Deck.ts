import Card from './Card';

export default interface Deck {
    type: 'deck';
    deck: Card[];
    dealt: Card[];
};