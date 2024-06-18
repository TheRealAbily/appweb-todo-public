// Function:
function set_theme(selected) {
    switch (selected) {
        case 'light': {
            // Background, middleground, border:
            document.documentElement.style.setProperty('--bg-color', '#11151b');
            document.documentElement.style.setProperty('--mbg-color', '#191e25');
            document.documentElement.style.setProperty('--b-color', '#303541');
            document.documentElement.style.setProperty('--general-font', '#fff');
            document.documentElement.style.setProperty('--general-font-light', '#ffffff80');

            document.documentElement.style.setProperty('--general-font-2', '#a7a7a7');
            document.documentElement.style.setProperty('--general-font-light-2', '#ffffff26');

            /* --- Scroll --- */
            document.documentElement.style.setProperty('--scrollbar-track', '#232730');
            document.documentElement.style.setProperty('--scrollbar-thumb', '#393f4d');
            document.documentElement.style.setProperty('--scrollbar-thumb-hover', '#7c818fb3');

            document.documentElement.style.setProperty('--scrollbar-thumb-2', '#292e3a');
            document.documentElement.style.setProperty('--scrollbar-thumb-hover-2', '#595e6bb3');

            /* --- Inputs --- */
            document.documentElement.style.setProperty('--bg-input', '#252d3a');

            /* --- Aside --- */
            document.documentElement.style.setProperty('--bg-aside', '#1c2229');
            document.documentElement.style.setProperty('--bg-aside-div-hover', '#ffffff06');
            document.documentElement.style.setProperty('--bg-aside-div-active', '#ffffff09');
            document.documentElement.style.setProperty('--bg-aside-div-icon-hover', '#ffffffbf');
            document.documentElement.style.setProperty('--bg-aside-div-icon-active', '#ffffffff');

            /* --- Tasks --- */
            document.documentElement.style.setProperty('--general-icon', '#fff');
            document.documentElement.style.setProperty('--general-icon-light', '#ffffffbf');

            document.documentElement.style.setProperty('--bg-task-gradient-start', '#202731');
            document.documentElement.style.setProperty('--bg-task-gradient-end', '#141a22bf');

            document.documentElement.style.setProperty('--task-content-border', '#545a69');
            document.documentElement.style.setProperty('--task-content-light', '#ffffff1a');

            /* --- Aside buttons --- */
            document.documentElement.style.setProperty('--bg-middle-button-icon', '#fff');
            document.documentElement.style.setProperty('--bg-middle-button-text', '#fff');

            document.documentElement.style.setProperty('--bg-middle-button-hover', '#30354133');
            document.documentElement.style.setProperty('--bg-middle-button-hover-icon', '#ffffff59');

            document.documentElement.style.setProperty('--bg-middle-button-selected', '#30354180');
            document.documentElement.style.setProperty('--bg-middle-button-selected-icon-light', '#ffffff80');
            document.documentElement.style.setProperty('--bg-middle-button-selected-text-light', '#ffffff80');

            document.documentElement.style.setProperty('--bg-middle-button-blue-text', '#4f4fff');
            document.documentElement.style.setProperty('--bg-middle-button-blue-icon', '#4f4fff');
            document.documentElement.style.setProperty('--bg-middle-button-blue-icon-light', '#4f4fff99');
            document.documentElement.style.setProperty('--bg-middle-button-blue-hover-icon-text', '#4f4fffbf');

            /* --- Floating buttons --- */
            document.documentElement.style.setProperty('--bg-button-floating', '#6781A6');
            document.documentElement.style.setProperty('--bg-button-floating-icon', '#fff');
            document.documentElement.style.setProperty('--bg-button-floating-hover', '#4C607B');
            document.documentElement.style.setProperty('--bg-button-floating-icon-hover-light', '#fff');
            document.documentElement.style.setProperty('--bg-button-floating-border', '#fff');
            document.documentElement.style.setProperty('--bg-button-floating-shadow', ' 00000080');

            /* --- Footer --- */
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
            document.documentElement.style.setProperty('--general-font', '#fff');
            document.documentElement.style.setProperty('--general-font-light', '#ffffff80');

            document.documentElement.style.setProperty('--general-font-2', '#a7a7a7');
            document.documentElement.style.setProperty('--general-font-light-2', '#ffffff26');

            /* --- Scroll --- */
            document.documentElement.style.setProperty('--scrollbar-track', '#232730');
            document.documentElement.style.setProperty('--scrollbar-thumb', '#393f4d');
            document.documentElement.style.setProperty('--scrollbar-thumb-hover', '#7c818fb3');

            document.documentElement.style.setProperty('--scrollbar-thumb-2', '#292e3a');
            document.documentElement.style.setProperty('--scrollbar-thumb-hover-2', '#595e6bb3');

            /* --- Inputs --- */
            document.documentElement.style.setProperty('--bg-input', '#252d3a');

            /* --- Aside --- */
            document.documentElement.style.setProperty('--bg-aside', '#1c2229');
            document.documentElement.style.setProperty('--bg-aside-div-hover', '#ffffff06');
            document.documentElement.style.setProperty('--bg-aside-div-active', '#ffffff09');
            document.documentElement.style.setProperty('--bg-aside-div-icon-hover', '#ffffffbf');
            document.documentElement.style.setProperty('--bg-aside-div-icon-active', '#ffffffff');

            /* --- Tasks --- */
            document.documentElement.style.setProperty('--general-icon', '#fff');
            document.documentElement.style.setProperty('--general-icon-light', '#ffffffbf');

            document.documentElement.style.setProperty('--bg-task-gradient-start', '#202731');
            document.documentElement.style.setProperty('--bg-task-gradient-end', '#141a22bf');

            document.documentElement.style.setProperty('--task-content-border', '#545a69');
            document.documentElement.style.setProperty('--task-content-light', '#ffffff1a');

            /* --- Aside buttons --- */
            document.documentElement.style.setProperty('--bg-middle-button-icon', '#fff');
            document.documentElement.style.setProperty('--bg-middle-button-text', '#fff');

            document.documentElement.style.setProperty('--bg-middle-button-hover', '#30354133');
            document.documentElement.style.setProperty('--bg-middle-button-hover-icon', '#ffffff59');

            document.documentElement.style.setProperty('--bg-middle-button-selected', '#30354180');
            document.documentElement.style.setProperty('--bg-middle-button-selected-icon-light', '#ffffff80');
            document.documentElement.style.setProperty('--bg-middle-button-selected-text-light', '#ffffff80');

            document.documentElement.style.setProperty('--bg-middle-button-blue-text', '#4f4fff');
            document.documentElement.style.setProperty('--bg-middle-button-blue-icon', '#4f4fff');
            document.documentElement.style.setProperty('--bg-middle-button-blue-icon-light', '#4f4fff99');
            document.documentElement.style.setProperty('--bg-middle-button-blue-hover-icon-text', '#4f4fffbf');

            /* --- Floating buttons --- */
            document.documentElement.style.setProperty('--bg-button-floating', '#6781A6');
            document.documentElement.style.setProperty('--bg-button-floating-icon', '#fff');
            document.documentElement.style.setProperty('--bg-button-floating-hover', '#4C607B');
            document.documentElement.style.setProperty('--bg-button-floating-icon-hover-light', '#fff');
            document.documentElement.style.setProperty('--bg-button-floating-border', '#fff');
            document.documentElement.style.setProperty('--bg-button-floating-shadow', ' 00000080');

            /* --- Footer --- */
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

// Wait for the document to load:
document.addEventListener('DOMContentLoaded', (event) => {
    // Theme:
    window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', set_theme);

    // Variables:
    var layout = 'inline';
    var theme = 'default';

    // Buttons:
    const buttonAddTaskDesktopVersion = document.getElementById('button__add-task-desktop');
    const buttonAddTaskMobileVersion = document.getElementById('button__add-task-mobile');
    const buttonLayout = document.getElementById('button__layout-desktop');
    const buttonLayoutIcon = document.getElementById('button__layout-desktop-icon');
    const buttonThemeDesktopVersion = document.getElementById('button__theme-desktop');
    const buttonThemeIconDesktopVersion = document.getElementById('button__theme-desktop-icon');
    const buttonThemeMobileVersion = document.getElementById('button__theme-mobile');
    const buttonThemeIconMobileVersion = document.getElementById('button__theme-mobile-icon');

    // Tasks:
    const tasks = document.querySelectorAll('section section div div div');

    // Add task button (desktop version):
    buttonAddTaskDesktopVersion.addEventListener('click', () => {
        window.location.href = 'new_task.html';
    });

    // Add task button (mobile version):
    buttonAddTaskMobileVersion.addEventListener('click', () => {
        window.location.href = 'new_task.html';
    });

    // Edit task (tasks):
    tasks.forEach(task => {
        task.addEventListener('click', () => {
            window.location.href = 'new_task.html';
        });
    });

    // Layout button (desktop version):
    buttonLayout.addEventListener('click', () => {
        switch (layout) {
            case 'inline': {
                document.documentElement.style.setProperty('--container__section-section-desktop-div-container__task-max-width', '500px');
                document.documentElement.style.setProperty('--container__section-section-desktop-div-container__task-max-height', '220px');
                document.documentElement.style.setProperty('--container__section-section-desktop-div-container__task-box-sizing', 'border-box');

                document.documentElement.style.setProperty('--container__section-section-desktop-div-flex-direction', 'row');
                document.documentElement.style.setProperty('--container__section-section-desktop-div-wrap', 'wrap');

                document.documentElement.style.setProperty('--container__section-section-desktop-div-justify-content', 'left');
                document.documentElement.style.setProperty('--container__section-section-desktop-div-align-items', 'start');

                // Icon:
                buttonLayoutIcon.innerHTML = 'format_align_left';

                // Variable:
                layout = 'left';

                break;
            }

            case 'left': {
                document.documentElement.style.setProperty('--container__section-section-desktop-div-container__task-max-width', '97.3%');
                document.documentElement.style.setProperty('--container__section-section-desktop-div-container__task-max-height', 'none');
                document.documentElement.style.setProperty('--container__section-section-desktop-div-container__task-box-sizing', 'content-box');

                document.documentElement.style.setProperty('--container__section-section-desktop-div-flex-direction', 'column');
                document.documentElement.style.setProperty('--container__section-section-desktop-div-wrap', 'none');

                document.documentElement.style.setProperty('--container__section-section-desktop-div-justify-content', 'start');
                document.documentElement.style.setProperty('--container__section-section-desktop-div-align-items', 'center');

                // Icon:
                buttonLayoutIcon.innerHTML = 'format_align_center';

                // Variable:
                layout = 'center';

                break;
            }

            case 'center': {
                document.documentElement.style.setProperty('--container__section-section-desktop-div-container__task-max-width', '500px');
                document.documentElement.style.setProperty('--container__section-section-desktop-div-container__task-max-height', '220px');
                document.documentElement.style.setProperty('--container__section-section-desktop-div-container__task-box-sizing', 'border-box');

                document.documentElement.style.setProperty('--container__section-section-desktop-div-flex-direction', 'row');
                document.documentElement.style.setProperty('--container__section-section-desktop-div-wrap', 'wrap');

                document.documentElement.style.setProperty('--container__section-section-desktop-div-justify-content', 'right');
                document.documentElement.style.setProperty('--container__section-section-desktop-div-align-items', 'start');

                // Icon:
                buttonLayoutIcon.innerHTML = 'format_align_right';

                // Variable:
                layout = 'right';

                break;
            }

            case 'right': {
                document.documentElement.style.setProperty('--container__section-section-desktop-div-container__task-max-width', 'none');
                document.documentElement.style.setProperty('--container__section-section-desktop-div-container__task-max-height', 'none');
                document.documentElement.style.setProperty('--container__section-section-desktop-div-container__task-box-sizing', 'content-box');

                document.documentElement.style.setProperty('--container__section-section-desktop-div-flex-direction', 'column');
                document.documentElement.style.setProperty('--container__section-section-desktop-div-wrap', 'none');

                document.documentElement.style.setProperty('--container__section-section-desktop-div-justify-content', 'initial');
                document.documentElement.style.setProperty('--container__section-section-desktop-div-align-items', 'initial');

                // Icon:
                buttonLayoutIcon.innerHTML = 'splitscreen';

                // Variable:
                layout = 'inline';

                break;
            }
        }
    });

    // Theme button (desktop version):
    buttonThemeDesktopVersion.addEventListener('click', () => {
        switch (theme) {
            case 'default': {
                // Icon:
                buttonThemeIconDesktopVersion.innerHTML = 'clear_day';
                buttonThemeIconMobileVersion.innerHTML = 'clear_day';

                // Variable:
                theme = 'light';

                // Set the theme:
                set_theme('light');

                break;
            }

            case 'light': {
                // Icon:
                buttonThemeIconDesktopVersion.innerHTML = 'dark_mode';
                buttonThemeIconMobileVersion.innerHTML = 'dark_mode';

                // Variable:
                theme = 'dark';

                // Set the theme:
                set_theme('dark');

                break;
            }

            case 'dark': {
                // Icon:
                buttonThemeIconDesktopVersion.innerHTML = 'routine';
                buttonThemeIconMobileVersion.innerHTML = 'routine';

                // Variable:
                theme = 'default';

                // Set the theme:
                set_theme('default');

                break;
            }
        }
    });

    // Theme button (mobile version):
    buttonThemeMobileVersion.addEventListener('click', () => {
        switch (theme) {
            case 'default': {
                // Icon:
                buttonThemeIconDesktopVersion.innerHTML = 'light_mode';
                buttonThemeIconMobileVersion.innerHTML = 'light_mode';

                // Variable:
                theme = 'light';

                // Set the theme:
                set_theme('light');

                break;
            }

            case 'light': {
                // Icon:
                buttonThemeIconDesktopVersion.innerHTML = 'dark_mode';
                buttonThemeIconMobileVersion.innerHTML = 'dark_mode';

                // Variable:
                theme = 'dark';

                // Set the theme:
                set_theme('dark');

                break;
            }

            case 'dark': {
                // Icon:
                buttonThemeIconDesktopVersion.innerHTML = 'open_run';
                buttonThemeIconMobileVersion.innerHTML = 'open_run';

                // Variable:
                theme = 'default';

                // Set the theme:
                set_theme('default');

                break;
            }
        }
    });
});
