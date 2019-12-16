import Card from './Card';
import Deck from './Deck';
import Column from './Column';
import SuitSource from './SuitSource';

export default interface SelectedCard {
    type: 'selected';
    cards: Card[];
    source: Deck|Column|SuitSource|undefined;
};
