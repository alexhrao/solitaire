import React from 'react';
import { Card } from './interfaces';

const SelectedContext = React.createContext(([] as Card[]));

export default SelectedContext;