import { create } from 'zustand';

type ColorModeState = {
    currentMode: string;
    selectedMode: (by: any) => void;
    mode?: string;
}

const useColorModeStore = create<ColorModeState>((set) => ({
    currentMode: '',
    selectedMode: (mode) => {
        set((state) => {
            return { currentMode: mode };
        });
    },
}));

export default useColorModeStore;