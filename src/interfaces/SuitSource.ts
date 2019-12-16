import Card from './Card';

export default interface SuitSource {
    type: 'suitSource';
    index: number;
    cards: Card[];
};