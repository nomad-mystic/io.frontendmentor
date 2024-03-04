import { create } from 'zustand';

// Types
import { DictionaryType } from '@/types/dictionary-type';

interface WordState {
    currentWord: Array<DictionaryType>;
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