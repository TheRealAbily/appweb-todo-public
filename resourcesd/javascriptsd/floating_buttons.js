a// Wait for the document to load:
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

    // // Tasks:
    // const tasks = document.querySelectorAll('section section div div div');

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
    });
});
