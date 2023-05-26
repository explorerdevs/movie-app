import { mergeQueryKeys } from '@lukemorales/query-key-factory';
import { movies } from './movies';
import { series } from './tv-series';

export const queries = mergeQueryKeys(movies, series);
