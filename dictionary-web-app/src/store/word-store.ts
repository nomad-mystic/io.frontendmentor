import { create } from 'zustand';

// Types
import { DictionaryType } from '@/types/dictionary-type';
import { NotFoundType } from '@/types/not-found-type';

type WordState = {
    currentWord: Array<DictionaryType> | NotFoundType;
    updatedWord: (by: any) => void;
    word?: Array<DictionaryType>;
}

const useWordStore = create<WordState>((set) => ({
    currentWord: [],
    updatedWord: (word) => {
        set((state) => {
            return { currentWord: word };
        });
    },
}));

export default useWordStore;