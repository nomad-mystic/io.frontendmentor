// Community
import { create } from 'zustand';

// Type
type SynonymsState = {
    synonym: string;
    updatedBySynonyms: (by: any) => void;
    word?: string;
};

const useSynonymsStore = create<SynonymsState>((set) => ({
    synonym: '',
    updatedBySynonyms: (word) => {
        set((state) => {
            return { synonym: word };
        });
    },
}));

export default useSynonymsStore;