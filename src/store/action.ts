import { createAction } from '@reduxjs/toolkit';
import { Data } from '../type/data';

export const setStat = createAction<Data>('set/stat');
