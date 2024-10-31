import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const themeStore = (set) => ({
    isStoreDarkMode: false,
    // Toggle the dark mode state
    // handleDarkMood: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
    // Explicitly set dark mode to true or false
    setDarkMode: (value) => set(() => ({ isStoreDarkMode: value })),
});

const useStore = create(
    devtools(
        persist(themeStore, {
            name: "Themecolor",
        })
    )
);

export default useStore;
