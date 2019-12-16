import Card from './Card';

export default interface Column {
    type: 'column';
    index: number;
    cards: Card[];
};