// Function to set theme colors
function setColors(colors) {
    Object.entries(colors).forEach(([key, value]) => {
        document.documentElement.style.setProperty(`--${key}`, value);
        localStorage.setItem(key, value);
    });
}

// Themes definitions
const themes = {
    light: {
        'bg-color': '#51b',
        'mbg-color': '#191e25',
        'b-color': '#303541',
        'general-font': '#fff',
        'general-font-light': '#ffffff80',
        'general-font-2': '#a7a7a7',
        'general-font-light-2': '#ffffff26',
        'scrollbar-track': '#232730',
        'scrollbar-thumb': '#393f4d',
        'scrollbar-thumb-hover': '#7c818fb3',
        'scrollbar-thumb-2': '#292e3a',
        'scrollbar-thumb-hover-2': '#595e6bb3',
        'bg-input': '#252d3a',
        'bg-aside': '#1c2229',
        'bg-aside-div-hover': '#ffffff06',
        'bg-aside-div-active': '#ffffff09',
        'bg-aside-div-icon-hover': '#ffffffbf',
        'bg-aside-div-icon-active': '#ffffffff',
        'general-icon': '#fff',
        'general-icon-light': '#ffffffbf',
        'bg-task-gradient-start': '#202731',
        'bg-task-gradient-end': '#141a22bf',
        'task-content-border': '#545a69',
        'task-content-light': '#ffffff1a',
        'bg-middle-button-icon': '#fff',
        'bg-middle-button-text': '#fff',
        'bg-middle-button-hover': '#30354133',
        'bg-middle-button-hover-icon': '#ffffff59',
        'bg-middle-button-selected': '#30354180',
        'bg-middle-button-selected-icon-light': '#ffffff80',
        'bg-middle-button-selected-text-light': '#ffffff80',
        'bg-middle-button-blue-text': '#4f4fff',
        'bg-middle-button-blue-icon': '#4f4fff',
        'bg-middle-button-blue-icon-light': '#4f4fff99',
        'bg-middle-button-blue-hover-icon-text': '#4f4fffbf',
        'bg-button-floating': '#6781A6',
        'bg-button-floating-icon': '#fff',
        'bg-button-floating-hover': '#4C607B',
        'bg-button-floating-icon-hover-light': '#fff',
        'bg-button-floating-border': '#fff',
        'bg-button-floating-shadow': '#00000080',
        'bg-footer': '#0d0f13',
        'bg-footer-text': '#fff',
    },
    dark: {
        'bg-color': '#11151b',
        'mbg-color': '#191e25',
        'b-color': '#303541',
        'general-font': '#fff',
        'general-font-light': '#ffffff80',
        'general-font-2': '#a7a7a7',
        'general-font-light-2': '#ffffff26',
        'scrollbar-track': '#232730',
        'scrollbar-thumb': '#393f4d',
        'scrollbar-thumb-hover': '#7c818fb3',
        'scrollbar-thumb-2': '#292e3a',
        'scrollbar-thumb-hover-2': '#595e6bb3',
        'bg-input': '#252d3a',
        'bg-aside': '#1c2229',
        'bg-aside-div-hover': '#ffffff06',
        'bg-aside-div-active': '#ffffff09',
        'bg-aside-div-icon-hover': '#ffffffbf',
        'bg-aside-div-icon-active': '#ffffffff',
        'general-icon': '#fff',
        'general-icon-light': '#ffffffbf',
        'bg-task-gradient-start': '#202731',
        'bg-task-gradient-end': '#141a22bf',
        'task-content-border': '#545a69',
        'task-content-light': '#ffffff1a',
        'bg-middle-button-icon': '#fff',
        'bg-middle-button-text': '#fff',
        'bg-middle-button-hover': '#30354133',
        'bg-middle-button-hover-icon': '#ffffff59',
        'bg-middle-button-selected': '#30354180',
        'bg-middle-button-selected-icon-light': '#ffffff80',
        'bg-middle-button-selected-text-light': '#ffffff80',
        'bg-middle-button-blue-text': '#4f4fff',
        'bg-middle-button-blue-icon': '#4f4fff',
        'bg-middle-button-blue-icon-light': '#4f4fff99',
        'bg-middle-button-blue-hover-icon-text': '#4f4fffbf',
        'bg-button-floating': '#6781A6',
        'bg-button-floating-icon': '#fff',
        'bg-button-floating-hover': '#4C607B',
        'bg-button-floating-icon-hover-light': '#fff',
        'bg-button-floating-border': '#fff',
        'bg-button-floating-shadow': '#00000080',
        'bg-footer': '#0d0f13',
        'bg-footer-text': '#fff',
    }
};

// Function to set the theme
function set_theme(selected) {
    const colors = themes[selected];
    if (colors) {
        setColors(colors);
        localStorage.setItem('theme', selected);
    }
}

// Function to set default theme based on system preferences
function set_default_theme() {
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    const theme = prefersLight ? 'light' : 'dark';
    set_theme(theme);
}

// Event listener for document ready
document.addEventListener('DOMContentLoaded', (event) => {
    // Set theme based on saved preference or default
    const savedTheme = localStorage.getItem('theme') || 'default';
    if (savedTheme === 'default') {
        set_default_theme();
    } else {
        set_theme(savedTheme);
    }

    // Theme button event listener
    const buttonThemeDesktopVersion = document.getElementById('button__theme-desktop');
    const buttonThemeMobileVersion = document.getElementById('button__theme-mobile');
    const buttonThemeIconDesktopVersion = document.getElementById('button__theme-desktop-icon');
    const buttonThemeIconMobileVersion = document.getElementById('button__theme-mobile-icon');

    function toggleTheme() {
        const currentTheme = localStorage.getItem('theme') || 'dark';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        set_theme(newTheme);
        buttonThemeIconDesktopVersion.innerHTML = newTheme === 'light' ? 'clear_day' : 'dark_mode';
        buttonThemeIconMobileVersion.innerHTML = newTheme === 'light' ? 'clear_day' : 'dark_mode';
    }

    buttonThemeDesktopVersion.addEventListener('click', toggleTheme);
    buttonThemeMobileVersion.addEventListener('click', toggleTheme);

    // Layout button event listener
    const buttonLayout = document.getElementById('button__layout-desktop');
    const buttonLayoutIcon = document.getElementById('button__layout-desktop-icon');
    let layout = 'inline';

    buttonLayout.addEventListener('click', () => {
        const layouts = {
            inline: { direction: 'row', wrap: 'wrap', justify: 'left', align: 'start', icon: 'format_align_left' },
            left: { direction: 'column', wrap: 'none', justify: 'start', align: 'center', icon: 'format_align_center' },
            center: { direction: 'row', wrap: 'wrap', justify: 'right', align: 'start', icon: 'format_align_right' },
            right: { direction: 'column', wrap: 'none', justify: 'initial', align: 'initial', icon: 'splitscreen' }
        };

        layout = Object.keys(layouts).find(key => layouts[key].icon === buttonLayoutIcon.innerHTML) || 'inline';
        const nextLayout = layouts[layout];
        document.documentElement.style.setProperty('--container__section-section-desktop-div-flex-direction', nextLayout.direction);
        document.documentElement.style.setProperty('--container__section-section-desktop-div-wrap', nextLayout.wrap);
        document.documentElement.style.setProperty('--container__section-section-desktop-div-justify-content', nextLayout.justify);
        document.documentElement.style.setProperty('--container__section-section-desktop-div-align-items', nextLayout.align);
        buttonLayoutIcon.innerHTML = nextLayout.icon;
    });

    // Add task button event listeners
    const buttonAddTaskDesktopVersion = document.getElementById('button__add-task-desktop');
    const buttonAddTaskMobileVersion = document.getElementById('button__add-task-mobile');
    buttonAddTaskDesktopVersion.addEventListener('click', () => {
        window.location.href = 'new_task.html';
    });
    buttonAddTaskMobileVersion.addEventListener('click', () => {
        window.location.href = 'new_task.html';
    });

    // Task edit event listeners
    const tasks = document.querySelectorAll('section section div div div');
    tasks.forEach(task => {
        task.addEventListener('click', () => {
            window.location.href = 'new_task.html';
        });
    });
});
