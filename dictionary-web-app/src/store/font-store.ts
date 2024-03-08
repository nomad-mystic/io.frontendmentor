import { create } from 'zustand';

type FontState = {
    currentFont: string;
    selectedFont: (by: any) => void;
    font?: string;
}

const useFontStore = create<FontState>((set) => ({
    currentFont: 'Sans Serif',
    selectedFont: (font) => {
        set((state) => {
            return { currentFont: font };
        });
    },
}));

export default useFontStore;