// Get the theme:
let theme = localStorage.getItem('theme') || 'dark';

// Set the theme:
function set_theme(selected) {
    switch (selected) {
        case 'light': {
            // Background, middleground, border:
            document.documentElement.style.setProperty('--bg-color', '#11151b');
            document.documentElement.style.setProperty('--mbg-color', '#191e25');
            document.documentElement.style.setProperty('--b-color', '#303541');

            // Scrolls:
            document.documentElement.style.setProperty('--scrollbar-track', '#232730');
            document.documentElement.style.setProperty('--scrollbar-thumb', '#393f4d');
            document.documentElement.style.setProperty('--scrollbar-thumb-hover', '#7c818fb3');

            document.documentElement.style.setProperty('--scrollbar-thumb-2', '#292e3a');
            document.documentElement.style.setProperty('--scrollbar-thumb-hover-2', '#595e6bb3');

            // Fonts:
            document.documentElement.style.setProperty('--general-font', '#fff');

            // Aside:
            document.documentElement.style.setProperty('--bg-aside', '#1c2229');
            document.documentElement.style.setProperty('--bg-aside-div-hover', '#ffffff06');
            document.documentElement.style.setProperty('--bg-aside-div-active', '#ffffff09');
            document.documentElement.style.setProperty('--bg-aside-div-icon-hover', '#ffffffbf');
            document.documentElement.style.setProperty('--bg-aside-div-icon-active', '#ffffffff');

            // General icon and text:
            document.documentElement.style.setProperty('--general-icon', '#fff');
            document.documentElement.style.setProperty('--general-icon-light', '#ffffffbf');

            // Task (gradient):
            document.documentElement.style.setProperty('--bg-task-gradient-start', '#202731');
            document.documentElement.style.setProperty('--bg-task-gradient-end', '#141a22bf');

            // Task (border and light):
            document.documentElement.style.setProperty('--task-content-border', '#545a69');
            document.documentElement.style.setProperty('--task-content-light', '#ffffff1a');

            // Panel buttons (icon and text):
            document.documentElement.style.setProperty('--bg-middle-button-icon', '#fff');
            document.documentElement.style.setProperty('--bg-middle-button-text', '#fff');

            // Panel buttons hover (icon and text):
            document.documentElement.style.setProperty('--bg-middle-button-hover', '#30354133');
            document.documentElement.style.setProperty('--bg-middle-button-hover-icon', '#ffffff59');

            // Panel buttons selected (icon and text):
            document.documentElement.style.setProperty('--bg-middle-button-selected', '#30354180');
            document.documentElement.style.setProperty('--bg-middle-button-selected-icon-light', '#ffffff80');
            document.documentElement.style.setProperty('--bg-middle-button-selected-text-light', '#ffffff80');

            // Panel button blue (icon and text):
            document.documentElement.style.setProperty('--bg-middle-button-blue-text', '#4f4fff');
            document.documentElement.style.setProperty('--bg-middle-button-blue-icon', '#4f4fff');
            document.documentElement.style.setProperty('--bg-middle-button-blue-icon-light', '#4f4fff99');
            document.documentElement.style.setProperty('--bg-middle-button-blue-hover-icon-text', '#4f4fffbf');

            // Floating buttons:
            document.documentElement.style.setProperty('--bg-button-floating', '#6781A6');
            document.documentElement.style.setProperty('--bg-button-floating-icon', '#fff');
            document.documentElement.style.setProperty('--bg-button-floating-hover', '#4C607B');
            document.documentElement.style.setProperty('--bg-button-floating-icon-hover-light', '#fff');
            document.documentElement.style.setProperty('--bg-button-floating-border', '#fff');
            document.documentElement.style.setProperty('--bg-button-floating-shadow', '00000080');

            // Footer:
            document.documentElement.style.setProperty('--bg-footer', '#0d0f13');
            document.documentElement.style.setProperty('--bg-footer-text', '#fff');

            // Set the theme:
            localStorage.setItem('theme', 'light');

            break;
        }

        case 'dark': {
            // Background, middleground, border:
            document.documentElement.style.setProperty('--bg-color', '#11151b');
            document.documentElement.style.setProperty('--mbg-color', '#191e25');
            document.documentElement.style.setProperty('--b-color', '#303541');

            // Scrolls:
            document.documentElement.style.setProperty('--scrollbar-track', '#232730');
            document.documentElement.style.setProperty('--scrollbar-thumb', '#393f4d');
            document.documentElement.style.setProperty('--scrollbar-thumb-hover', '#7c818fb3');

            document.documentElement.style.setProperty('--scrollbar-thumb-2', '#292e3a');
            document.documentElement.style.setProperty('--scrollbar-thumb-hover-2', '#595e6bb3');

            // Fonts:
            document.documentElement.style.setProperty('--general-font', '#fff');

            // Aside:
            document.documentElement.style.setProperty('--bg-aside', '#1c2229');
            document.documentElement.style.setProperty('--bg-aside-div-hover', '#ffffff06');
            document.documentElement.style.setProperty('--bg-aside-div-active', '#ffffff09');
            document.documentElement.style.setProperty('--bg-aside-div-icon-hover', '#ffffffbf');
            document.documentElement.style.setProperty('--bg-aside-div-icon-active', '#ffffffff');

            // General icon and text:
            document.documentElement.style.setProperty('--general-icon', '#fff');
            document.documentElement.style.setProperty('--general-icon-light', '#ffffffbf');

            // Task (gradient):
            document.documentElement.style.setProperty('--bg-task-gradient-start', '#202731');
            document.documentElement.style.setProperty('--bg-task-gradient-end', '#141a22bf');

            // Task (border and light):
            document.documentElement.style.setProperty('--task-content-border', '#545a69');
            document.documentElement.style.setProperty('--task-content-light', '#ffffff1a');

            // Panel buttons (icon and text):
            document.documentElement.style.setProperty('--bg-middle-button-icon', '#fff');
            document.documentElement.style.setProperty('--bg-middle-button-text', '#fff');

            // Panel buttons hover (icon and text):
            document.documentElement.style.setProperty('--bg-middle-button-hover', '#30354133');
            document.documentElement.style.setProperty('--bg-middle-button-hover-icon', '#ffffff59');

            // Panel buttons selected (icon and text):
            document.documentElement.style.setProperty('--bg-middle-button-selected', '#30354180');
            document.documentElement.style.setProperty('--bg-middle-button-selected-icon-light', '#ffffff80');
            document.documentElement.style.setProperty('--bg-middle-button-selected-text-light', '#ffffff80');

            // Panel button blue (icon and text):
            document.documentElement.style.setProperty('--bg-middle-button-blue-text', '#4f4fff');
            document.documentElement.style.setProperty('--bg-middle-button-blue-icon', '#4f4fff');
            document.documentElement.style.setProperty('--bg-middle-button-blue-icon-light', '#4f4fff99');
            document.documentElement.style.setProperty('--bg-middle-button-blue-hover-icon-text', '#4f4fffbf');

            // Floating buttons:
            document.documentElement.style.setProperty('--bg-button-floating', '#6781A6');
            document.documentElement.style.setProperty('--bg-button-floating-icon', '#fff');
            document.documentElement.style.setProperty('--bg-button-floating-hover', '#4C607B');
            document.documentElement.style.setProperty('--bg-button-floating-icon-hover-light', '#fff');
            document.documentElement.style.setProperty('--bg-button-floating-border', '#fff');
            document.documentElement.style.setProperty('--bg-button-floating-shadow', '00000080');

            // Footer:
            document.documentElement.style.setProperty('--bg-footer', '#0d0f13');
            document.documentElement.style.setProperty('--bg-footer-text', '#fff');

            // Set the theme:
            localStorage.setItem('theme', 'dark');

            break;
        }

        case 'default': {
            const theme = window.matchMedia('(prefers-color-scheme: light)').matches;

            if (theme) {
                set_theme('light');
            }
            else {
                set_theme('dark');
            }

            break;
        }
    }
}