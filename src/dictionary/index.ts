import Dictionary2025a from './2025a';
import { Dictionary as DictionaryT } from './Dictionary';

const Dictionary = {
    '2025a': Dictionary2025a,
};

export type DictionaryType = DictionaryT;
export type DictionaryRevision = keyof typeof Dictionary;

export default Dictionary;
