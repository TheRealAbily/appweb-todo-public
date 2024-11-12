// Wait for the document to load:
document.addEventListener('DOMContentLoaded', (event) => {
    // Variables:
    var layout = localStorage.getItem('task_order') || 'inline';
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

    // Add task button (desktop version):
    buttonAddTaskDesktopVersion.addEventListener('click', () => {
        localStorage.setItem('new-task', true);
        window.location.href = 'new_task.html';
    });

    // Add task button (mobile version):
    buttonAddTaskMobileVersion.addEventListener('click', () => {
        localStorage.setItem('new-task', true);
        window.location.href = 'new_task.html';
    });

    // Firts layout:
    switch (layout) {
        case 'left': {
            document.documentElement.style.setProperty('--container__section-section-desktop-div-container__task-max-width', '500px');
            document.documentElement.style.setProperty('--container__section-section-desktop-div-container__task-max-height', '220px');
            document.documentElement.style.setProperty('--container__section-section-desktop-div-container__task-box-sizing', 'border-box');

            document.documentElement.style.setProperty('--container__section-section-desktop-div-flex-direction', 'row');
            document.documentElement.style.setProperty('--container__section-section-desktop-div-wrap', 'wrap');

            document.documentElement.style.setProperty('--container__section-section-desktop-div-justify-content', 'left');
            document.documentElement.style.setProperty('--container__section-section-desktop-div-align-items', 'start');

            // Icon:
            buttonLayoutIcon.innerHTML = 'format_align_left';
            break;
        }

        case 'center': {
            document.documentElement.style.setProperty('--container__section-section-desktop-div-container__task-max-width', '97.3%');
            document.documentElement.style.setProperty('--container__section-section-desktop-div-container__task-max-height', 'none');
            document.documentElement.style.setProperty('--container__section-section-desktop-div-container__task-box-sizing', 'content-box');

            document.documentElement.style.setProperty('--container__section-section-desktop-div-flex-direction', 'column');
            document.documentElement.style.setProperty('--container__section-section-desktop-div-wrap', 'none');

            document.documentElement.style.setProperty('--container__section-section-desktop-div-justify-content', 'start');
            document.documentElement.style.setProperty('--container__section-section-desktop-div-align-items', 'center');

            // Icon:
            buttonLayoutIcon.innerHTML = 'format_align_center';
            break;
        }

        case 'right': {
            document.documentElement.style.setProperty('--container__section-section-desktop-div-container__task-max-width', '500px');
            document.documentElement.style.setProperty('--container__section-section-desktop-div-container__task-max-height', '220px');
            document.documentElement.style.setProperty('--container__section-section-desktop-div-container__task-box-sizing', 'border-box');

            document.documentElement.style.setProperty('--container__section-section-desktop-div-flex-direction', 'row');
            document.documentElement.style.setProperty('--container__section-section-desktop-div-wrap', 'wrap');

            document.documentElement.style.setProperty('--container__section-section-desktop-div-justify-content', 'right');
            document.documentElement.style.setProperty('--container__section-section-desktop-div-align-items', 'start');

            // Icon:
            buttonLayoutIcon.innerHTML = 'format_align_right';
            break;
        }

        case 'inline': {
            document.documentElement.style.setProperty('--container__section-section-desktop-div-container__task-max-width', 'none');
            document.documentElement.style.setProperty('--container__section-section-desktop-div-container__task-max-height', 'none');
            document.documentElement.style.setProperty('--container__section-section-desktop-div-container__task-box-sizing', 'content-box');

            document.documentElement.style.setProperty('--container__section-section-desktop-div-flex-direction', 'column');
            document.documentElement.style.setProperty('--container__section-section-desktop-div-wrap', 'none');

            document.documentElement.style.setProperty('--container__section-section-desktop-div-justify-content', 'initial');
            document.documentElement.style.setProperty('--container__section-section-desktop-div-align-items', 'initial');

            // Icon:
            buttonLayoutIcon.innerHTML = 'splitscreen';
            break;
        }
    }

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

        // Save layout: 
        localStorage.setItem('task_order', layout);
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
                break;
            }

            case 'light': {
                // Icon:
                buttonThemeIconDesktopVersion.innerHTML = 'dark_mode';
                buttonThemeIconMobileVersion.innerHTML = 'dark_mode';

                // Variable:
                theme = 'dark';
                break;
            }

            case 'dark': {
                // Icon:
                buttonThemeIconDesktopVersion.innerHTML = 'routine';
                buttonThemeIconMobileVersion.innerHTML = 'routine';

                // Variable:
                theme = 'default';
                break;
            }
        }

        // Change the theme:
        changeTheme(theme);
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
                break;
            }

            case 'light': {
                // Icon:
                buttonThemeIconDesktopVersion.innerHTML = 'dark_mode';
                buttonThemeIconMobileVersion.innerHTML = 'dark_mode';

                // Variable:
                theme = 'dark';
                break;
            }

            case 'dark': {
                // Icon:
                buttonThemeIconDesktopVersion.innerHTML = 'open_run';
                buttonThemeIconMobileVersion.innerHTML = 'open_run';

                // Variable:
                theme = 'default';
                break;
            }
        }

        // Change the theme:
        changeTheme(theme);
    });
});

// Change theme:
const changeTheme = (theme) => {
    let root = document.documentElement;

    switch (theme) {
        // Default theme:
        case 'default': {
            root.style.setProperty('--main-color', '#e74c3c');

            root.style.setProperty('--bg-color', '#11151b');
            root.style.setProperty('--mbg-color', '#191e25');
            root.style.setProperty('--b-color', '#303541');
            root.style.setProperty('--general-font', '#fff');
            root.style.setProperty('--general-font-light', '#ffffff80');

            root.style.setProperty('--general-font-2', '#a7a7a7');
            root.style.setProperty('--general-font-light-2', '#ffffff26');
            root.style.setProperty('--status-text', '#ddd');

            // Scroll:
            root.style.setProperty('--scrollbar-track', '#232730');
            root.style.setProperty('--scrollbar-thumb', '#393f4d');
            root.style.setProperty('--scrollbar-thumb-hover', '#7c818fb3');

            root.style.setProperty('--scrollbar-thumb-2', '#292e3a');
            root.style.setProperty('--scrollbar-thumb-hover-2', '#595e6bb3');

            // Inputs:
            root.style.setProperty('--bg-input', '#252d3a');

            // Aside:
            root.style.setProperty('--bg-aside', '#1c2229');
            root.style.setProperty('--bg-aside-div-hover', '#ffffff06');
            root.style.setProperty('--bg-aside-div-active', '#ffffff09');
            root.style.setProperty('--bg-aside-div-icon-hover', '#ffffffbf');
            root.style.setProperty('--bg-aside-div-icon-active', '#ffffffff');

            // Task:
            root.style.setProperty('--general-icon', '#fff');
            root.style.setProperty('--general-icon-light', '#ffffffbf');

            root.style.setProperty('--bg-task-gradient-start', '#202731');
            root.style.setProperty('--bg-task-gradient-end', '#141a22bf');

            root.style.setProperty('--task-content-border', '#545a69');
            root.style.setProperty('--task-content-light', '#ffffff1a');

            // Aside buttons:
            root.style.setProperty('--bg-middle-button-icon', '#fff');
            root.style.setProperty('--bg-middle-button-text', '#fff');

            root.style.setProperty('--bg-middle-button-hover', '#30354133');
            root.style.setProperty('--bg-middle-button-hover-icon', '#ffffff59');

            root.style.setProperty('--bg-middle-button-selected', '#30354180');
            root.style.setProperty('--bg-middle-button-selected-icon-light', '#ffffff80');
            root.style.setProperty('--bg-middle-button-selected-text-light', '#ffffff80');

            root.style.setProperty('--bg-middle-button-blue-text', '#4f4fff');
            root.style.setProperty('--bg-middle-button-blue-icon', '#4f4fff');
            root.style.setProperty('--bg-middle-button-blue-icon-light', '#4f4fff99');
            root.style.setProperty('--bg-middle-button-blue-hover-icon-text', '#4f4fffbf');

            // Floating buttons:
            root.style.setProperty('--bg-button-floating', '#6781A6');
            root.style.setProperty('--bg-button-floating-icon', '#fff');
            root.style.setProperty('--bg-button-floating-hover', '#4C607B');
            root.style.setProperty('--bg-button-floating-icon-hover-light', '#fff');
            root.style.setProperty('--bg-button-floating-border', '#fff');
            root.style.setProperty('--bg-button-floating-shadow', ' 00000080');

            // Footer:
            root.style.setProperty('--bg-footer', '#0d0f13');
            root.style.setProperty('--bg-footer-text', '#fff');
            break;
        }

        // Light theme:
        case 'light': {
            root.style.setProperty('--main-color', '#e67e7e');

            root.style.setProperty('--bg-color', '#f5f5f5');
            root.style.setProperty('--mbg-color', '#eaeaea');
            root.style.setProperty('--b-color', '#d1d1d1');

            root.style.setProperty('--general-font', '#333');
            root.style.setProperty('--general-font-light', '#33333380');

            root.style.setProperty('--general-font-2', '#666');
            root.style.setProperty('--general-font-light-2', '#33333326');
            root.style.setProperty('--status-text', '#555');

            // Scroll:
            root.style.setProperty('--scrollbar-track', '#d4d4d4');
            root.style.setProperty('--scrollbar-thumb', '#a9a9a9');
            root.style.setProperty('--scrollbar-thumb-hover', '#919191');

            root.style.setProperty('--scrollbar-thumb-2', '#b8b8b8');
            root.style.setProperty('--scrollbar-thumb-hover-2', '#8a8a8a');

            // Inputs:
            root.style.setProperty('--bg-input', '#ffffff');

            // Aside:
            root.style.setProperty('--bg-aside', '#f2f2f2');
            root.style.setProperty('--bg-aside-div-hover', '#0000000c');
            root.style.setProperty('--bg-aside-div-active', '#00000012');
            root.style.setProperty('--bg-aside-div-icon-hover', '#555555');
            root.style.setProperty('--bg-aside-div-icon-active', '#333');

            // Task:
            root.style.setProperty('--general-icon', '#333');
            root.style.setProperty('--general-icon-light', '#333333bf');

            root.style.setProperty('--bg-task-gradient-start', '#ffffff');
            root.style.setProperty('--bg-task-gradient-end', '#f0f0f0bf');

            root.style.setProperty('--task-content-border', '#ccc');
            root.style.setProperty('--task-content-light', '#3333331a');

            // Aside buttons:
            root.style.setProperty('--bg-middle-button-icon', '#333');
            root.style.setProperty('--bg-middle-button-text', '#333');

            root.style.setProperty('--bg-middle-button-hover', '#d1d1d133');
            root.style.setProperty('--bg-middle-button-hover-icon', '#33333359');

            root.style.setProperty('--bg-middle-button-selected', '#d1d1d180');
            root.style.setProperty('--bg-middle-button-selected-icon-light', '#33333380');
            root.style.setProperty('--bg-middle-button-selected-text-light', '#33333380');

            root.style.setProperty('--bg-middle-button-blue-text', '#4a90e2');
            root.style.setProperty('--bg-middle-button-blue-icon', '#4a90e2');
            root.style.setProperty('--bg-middle-button-blue-icon-light', '#4a90e299');
            root.style.setProperty('--bg-middle-button-blue-hover-icon-text', '#4a90e2bf');

            // Floating buttons:
            root.style.setProperty('--bg-button-floating', '#4a90e2');
            root.style.setProperty('--bg-button-floating-icon', '#fff');
            root.style.setProperty('--bg-button-floating-hover', '#3a78c2');
            root.style.setProperty('--bg-button-floating-icon-hover-light', '#fff');
            root.style.setProperty('--bg-button-floating-border', '#ddd');
            root.style.setProperty('--bg-button-floating-shadow', '#00000020');

            // Footer:
            root.style.setProperty('--bg-footer', '#fafafa');
            root.style.setProperty('--bg-footer-text', '#333');
            break;
        }

        // Dark theme:
        case 'dark': {
            root.style.setProperty('--main-color', '#e74c3c');

            root.style.setProperty('--bg-color', '#11151b');
            root.style.setProperty('--mbg-color', '#191e25');
            root.style.setProperty('--b-color', '#303541');
            root.style.setProperty('--general-font', '#fff');
            root.style.setProperty('--general-font-light', '#ffffff80');

            root.style.setProperty('--general-font-2', '#a7a7a7');
            root.style.setProperty('--general-font-light-2', '#ffffff26');
            root.style.setProperty('--status-text', '#ddd');

            // Scroll:
            root.style.setProperty('--scrollbar-track', '#232730');
            root.style.setProperty('--scrollbar-thumb', '#393f4d');
            root.style.setProperty('--scrollbar-thumb-hover', '#7c818fb3');

            root.style.setProperty('--scrollbar-thumb-2', '#292e3a');
            root.style.setProperty('--scrollbar-thumb-hover-2', '#595e6bb3');

            // Inputs:
            root.style.setProperty('--bg-input', '#252d3a');

            // Aside:
            root.style.setProperty('--bg-aside', '#1c2229');
            root.style.setProperty('--bg-aside-div-hover', '#ffffff06');
            root.style.setProperty('--bg-aside-div-active', '#ffffff09');
            root.style.setProperty('--bg-aside-div-icon-hover', '#ffffffbf');
            root.style.setProperty('--bg-aside-div-icon-active', '#ffffffff');

            // Task:
            root.style.setProperty('--general-icon', '#fff');
            root.style.setProperty('--general-icon-light', '#ffffffbf');

            root.style.setProperty('--bg-task-gradient-start', '#202731');
            root.style.setProperty('--bg-task-gradient-end', '#141a22bf');

            root.style.setProperty('--task-content-border', '#545a69');
            root.style.setProperty('--task-content-light', '#ffffff1a');

            // Aside buttons:
            root.style.setProperty('--bg-middle-button-icon', '#fff');
            root.style.setProperty('--bg-middle-button-text', '#fff');

            root.style.setProperty('--bg-middle-button-hover', '#30354133');
            root.style.setProperty('--bg-middle-button-hover-icon', '#ffffff59');

            root.style.setProperty('--bg-middle-button-selected', '#30354180');
            root.style.setProperty('--bg-middle-button-selected-icon-light', '#ffffff80');
            root.style.setProperty('--bg-middle-button-selected-text-light', '#ffffff80');

            root.style.setProperty('--bg-middle-button-blue-text', '#4f4fff');
            root.style.setProperty('--bg-middle-button-blue-icon', '#4f4fff');
            root.style.setProperty('--bg-middle-button-blue-icon-light', '#4f4fff99');
            root.style.setProperty('--bg-middle-button-blue-hover-icon-text', '#4f4fffbf');

            // Floating buttons:
            root.style.setProperty('--bg-button-floating', '#6781A6');
            root.style.setProperty('--bg-button-floating-icon', '#fff');
            root.style.setProperty('--bg-button-floating-hover', '#4C607B');
            root.style.setProperty('--bg-button-floating-icon-hover-light', '#fff');
            root.style.setProperty('--bg-button-floating-border', '#fff');
            root.style.setProperty('--bg-button-floating-shadow', ' 00000080');

            // Footer:
            root.style.setProperty('--bg-footer', '#0d0f13');
            root.style.setProperty('--bg-footer-text', '#fff');
            break;
        }
    }
}