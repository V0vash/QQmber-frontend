import { ref } from 'vue'

const html = document.querySelector('html')
let currentTheme = ref('light');

export function useTheme() {
    function getInitialTheme() {
        const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
        const storageTheme = localStorage.getItem('theme');

        if (storageTheme) return storageTheme

        return isDark ? 'dark' : 'light'
    }

    const initialTheme = getInitialTheme()

    if (initialTheme) {
        initialTheme === 'light' ? setLightTheme() : setDarkTheme();
    }


    function toggleTheme() {
        if (currentTheme.value === 'dark') {
            setLightTheme();
        } else {
            setDarkTheme();
        }
    }

    function setLightTheme() {
        currentTheme.value = 'light'
        html.classList.remove('dark')
        localStorage.setItem('theme', 'light');
    }

    function setDarkTheme() {
        currentTheme.value = 'dark'
        html.classList.remove('light')
        html.classList.add('dark')
        localStorage.setItem('theme', 'dark');
    }



    return {
        currentTheme,
        toggleTheme
    };
}