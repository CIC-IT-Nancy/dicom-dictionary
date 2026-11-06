import Dictionary, { DictionaryType, DictionaryRevision } from './dictionary';
import Tags from './Tags';

const createTagDictionary = (revision: DictionaryRevision) => {
    const dictionary: DictionaryType | undefined = Dictionary[revision];
    if (!dictionary) {
        throw new Error('Enable to find the given revision');
    }
    return new Tags(dictionary);
};

export default {
    Dictionary,
    createTagDictionary,
};
