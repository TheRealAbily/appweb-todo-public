// Function:
function set_theme(selected) {
    switch (selected) {
        case 'light': {
            // Background, middleground, border:
            var bg_color = '#51b';
            document.documentElement.style.setProperty('--bg-color', bg_color);
            localStorage.setItem('bg_color', bg_color);

            var mbg_color = '#191e25';
            document.documentElement.style.setProperty('--mbg-color', mbg_color);
            localStorage.setItem('mbg_color', mbg_color);

            var b_color = '#303541';
            document.documentElement.style.setProperty('--b-color', b_color);
            localStorage.setItem('b_color', b_color);

            var general_font = '#fff';
            document.documentElement.style.setProperty('--general-font', general_font);
            localStorage.setItem('general_font', general_font);

            var general_font_light = '#ffffff80';
            document.documentElement.style.setProperty('--general-font-light', general_font_light);
            localStorage.setItem('general_font_light', general_font_light);

            var general_font_2 = '#a7a7a7';
            document.documentElement.style.setProperty('--general-font-2', general_font_2);
            localStorage.setItem('general_font_2', general_font_2);

            var general_font_light_2 = '#ffffff26';
            document.documentElement.style.setProperty('--general-font-light-2', general_font_light_2);
            localStorage.setItem('general_font_light_2', general_font_light_2);

            /* --- Scroll --- */
            var scrollbar_track = '#232730';
            document.documentElement.style.setProperty('--scrollbar-track', scrollbar_track);
            localStorage.setItem('scrollbar_track', scrollbar_track);

            var scrollbar_thumb = '#393f4d';
            document.documentElement.style.setProperty('--scrollbar-thumb', scrollbar_thumb);
            localStorage.setItem('scrollbar_thumb', scrollbar_thumb);

            var scrollbar_thumb_hover = '#7c818fb3';
            document.documentElement.style.setProperty('--scrollbar-thumb-hover', scrollbar_thumb_hover);
            localStorage.setItem('scrollbar_thumb_hover', scrollbar_thumb_hover);

            var scrollbar_thumb_2 = '#292e3a';
            document.documentElement.style.setProperty('--scrollbar-thumb-2', scrollbar_thumb_2);
            localStorage.setItem('scrollbar_thumb_2', scrollbar_thumb_2);

            var scrollbar_thumb_hover_2 = '#595e6bb3';
            document.documentElement.style.setProperty('--scrollbar-thumb-hover-2', scrollbar_thumb_hover_2);
            localStorage.setItem('scrollbar_thumb_hover_2', scrollbar_thumb_hover_2);

            /* --- Inputs --- */
            var bg_input = '#252d3a';
            document.documentElement.style.setProperty('--bg-input', bg_input);
            localStorage.setItem('bg_input', bg_input);

            /* --- Aside --- */
            var bg_aside = '#1c2229';
            document.documentElement.style.setProperty('--bg-aside', bg_aside);
            localStorage.setItem('bg_aside', bg_aside);

            var bg_aside_div_hover = '#ffffff06';
            document.documentElement.style.setProperty('--bg-aside-div-hover', bg_aside_div_hover);
            localStorage.setItem('bg_aside_div_hover', bg_aside_div_hover);

            var bg_aside_div_active = '#ffffff09';
            document.documentElement.style.setProperty('--bg-aside-div-active', bg_aside_div_active);
            localStorage.setItem('bg_aside_div_active', bg_aside_div_active);

            var bg_aside_div_icon_hover = '#ffffffbf';
            document.documentElement.style.setProperty('--bg-aside-div-icon-hover', bg_aside_div_icon_hover);
            localStorage.setItem('bg_aside_div_icon_hover', bg_aside_div_icon_hover);

            var bg_aside_div_icon_active = '#ffffffff';
            document.documentElement.style.setProperty('--bg-aside-div-icon-active', bg_aside_div_icon_active);
            localStorage.setItem('bg_aside_div_icon_active', bg_aside_div_icon_active);

            /* --- Tasks --- */
            var general_icon = '#fff';
            document.documentElement.style.setProperty('--general-icon', general_icon);
            localStorage.setItem('general_icon', general_icon);

            var general_icon_light = '#ffffffbf';
            document.documentElement.style.setProperty('--general-icon-light', general_icon_light);
            localStorage.setItem('general_icon_light', general_icon_light);

            var bg_task_gradient_start = '#202731';
            document.documentElement.style.setProperty('--bg-task-gradient-start', bg_task_gradient_start);
            localStorage.setItem('bg_task_gradient_start', bg_task_gradient_start);

            var bg_task_gradient_end = '#141a22bf';
            document.documentElement.style.setProperty('--bg-task-gradient-end', bg_task_gradient_end);
            localStorage.setItem('bg_task_gradient_end', bg_task_gradient_end);

            var task_content_border = '#545a69';
            document.documentElement.style.setProperty('--task-content-border', task_content_border);
            localStorage.setItem('task_content_border', task_content_border);

            var task_content_light = '#ffffff1a';
            document.documentElement.style.setProperty('--task-content-light', task_content_light);
            localStorage.setItem('task_content_light', task_content_light);

            /* --- Aside buttons --- */
            var bg_middle_button_icon = '#fff';
            document.documentElement.style.setProperty('--bg-middle-button-icon', bg_middle_button_icon);
            localStorage.setItem('bg_middle_button_icon', bg_middle_button_icon);

            var bg_middle_button_text = '#fff';
            document.documentElement.style.setProperty('--bg-middle-button-text', bg_middle_button_text);
            localStorage.setItem('bg_middle_button_text', bg_middle_button_text);

            var bg_middle_button_hover = '#30354133';
            document.documentElement.style.setProperty('--bg-middle-button-hover', bg_middle_button_hover);
            localStorage.setItem('bg_middle_button_hover', bg_middle_button_hover);

            var bg_middle_button_hover_icon = '#ffffff59';
            document.documentElement.style.setProperty('--bg-middle-button-hover-icon', bg_middle_button_hover_icon);
            localStorage.setItem('bg_middle_button_hover_icon', bg_middle_button_hover_icon);

            var bg_middle_button_selected = '#30354180';
            document.documentElement.style.setProperty('--bg-middle-button-selected', bg_middle_button_selected);
            localStorage.setItem('bg_middle_button_selected', bg_middle_button_selected);

            var bg_middle_button_selected_icon_light = '#ffffff80';
            document.documentElement.style.setProperty('--bg-middle-button-selected-icon-light', bg_middle_button_selected_icon_light);
            localStorage.setItem('bg_middle_button_selected_icon_light', bg_middle_button_selected_icon_light);

            var bg_middle_button_selected_text_light = '#ffffff80';
            document.documentElement.style.setProperty('--bg-middle-button-selected-text-light', bg_middle_button_selected_text_light);
            localStorage.setItem('bg_middle_button_selected_text_light', bg_middle_button_selected_text_light);

            var bg_middle_button_blue_text = '#4f4fff';
            document.documentElement.style.setProperty('--bg-middle-button-blue-text', bg_middle_button_blue_text);
            localStorage.setItem('bg_middle_button_blue_text', bg_middle_button_blue_text);

            var bg_middle_button_blue_icon = '#4f4fff';
            document.documentElement.style.setProperty('--bg-middle-button-blue-icon', bg_middle_button_blue_icon);
            localStorage.setItem('bg_middle_button_blue_icon', bg_middle_button_blue_icon);

            var bg_middle_button_blue_icon_light = '#4f4fff99';
            document.documentElement.style.setProperty('--bg-middle-button-blue-icon-light', bg_middle_button_blue_icon_light);
            localStorage.setItem('bg_middle_button_blue_icon_light', bg_middle_button_blue_icon_light);

            var bg_middle_button_blue_hover_icon_text = '#4f4fffbf';
            document.documentElement.style.setProperty('--bg-middle-button-blue-hover-icon-text', bg_middle_button_blue_hover_icon_text);
            localStorage.setItem('bg_middle_button_blue_hover_icon_text', bg_middle_button_blue_hover_icon_text);

            /* --- Floating buttons --- */
            var bg_button_floating = '#6781A6';
            document.documentElement.style.setProperty('--bg-button-floating', bg_button_floating);
            localStorage.setItem('bg_button_floating', bg_button_floating);

            var bg_button_floating_icon = '#fff';
            document.documentElement.style.setProperty('--bg-button-floating-icon', bg_button_floating_icon);
            localStorage.setItem('bg_button_floating_icon', bg_button_floating_icon);

            var bg_button_floating_hover = '#4C607B';
            document.documentElement.style.setProperty('--bg-button-floating-hover', bg_button_floating_hover);
            localStorage.setItem('bg_button_floating_hover', bg_button_floating_hover);

            var bg_button_floating_icon_hover_light = '#fff';
            document.documentElement.style.setProperty('--bg-button-floating-icon-hover-light', bg_button_floating_icon_hover_light);
            localStorage.setItem('bg_button_floating_icon_hover_light', bg_button_floating_icon_hover_light);

            var bg_button_floating_border = '#fff';
            document.documentElement.style.setProperty('--bg-button-floating-border', bg_button_floating_border);
            localStorage.setItem('bg_button_floating_border', bg_button_floating_border);

            var bg_button_floating_shadow = '#00000080';
            document.documentElement.style.setProperty('--bg-button-floating-shadow', bg_button_floating_shadow);
            localStorage.setItem('bg_button_floating_shadow', bg_button_floating_shadow);

            /* --- Footer --- */
            var bg_footer = '#0d0f13';
            document.documentElement.style.setProperty('--bg-footer', bg_footer);
            localStorage.setItem('bg_footer', bg_footer);

            var bg_footer_text = '#fff';
            document.documentElement.style.setProperty('--bg-footer-text', bg_footer_text);
            localStorage.setItem('bg_footer_text', bg_footer_text);


            // Set the theme:
            localStorage.setItem('theme', 'dark');

            break;
        }

        case 'dark': {
            // Background, middleground, border:
            var bg_color = '#11151b';
            document.documentElement.style.setProperty('--bg-color', bg_color);
            localStorage.setItem('bg_color', bg_color);

            var mbg_color = '#191e25';
            document.documentElement.style.setProperty('--mbg-color', mbg_color);
            localStorage.setItem('mbg_color', mbg_color);

            var b_color = '#303541';
            document.documentElement.style.setProperty('--b-color', b_color);
            localStorage.setItem('b_color', b_color);

            var general_font = '#fff';
            document.documentElement.style.setProperty('--general-font', general_font);
            localStorage.setItem('general_font', general_font);

            var general_font_light = '#ffffff80';
            document.documentElement.style.setProperty('--general-font-light', general_font_light);
            localStorage.setItem('general_font_light', general_font_light);

            var general_font_2 = '#a7a7a7';
            document.documentElement.style.setProperty('--general-font-2', general_font_2);
            localStorage.setItem('general_font_2', general_font_2);

            var general_font_light_2 = '#ffffff26';
            document.documentElement.style.setProperty('--general-font-light-2', general_font_light_2);
            localStorage.setItem('general_font_light_2', general_font_light_2);

            /* --- Scroll --- */
            var scrollbar_track = '#232730';
            document.documentElement.style.setProperty('--scrollbar-track', scrollbar_track);
            localStorage.setItem('scrollbar_track', scrollbar_track);

            var scrollbar_thumb = '#393f4d';
            document.documentElement.style.setProperty('--scrollbar-thumb', scrollbar_thumb);
            localStorage.setItem('scrollbar_thumb', scrollbar_thumb);

            var scrollbar_thumb_hover = '#7c818fb3';
            document.documentElement.style.setProperty('--scrollbar-thumb-hover', scrollbar_thumb_hover);
            localStorage.setItem('scrollbar_thumb_hover', scrollbar_thumb_hover);

            var scrollbar_thumb_2 = '#292e3a';
            document.documentElement.style.setProperty('--scrollbar-thumb-2', scrollbar_thumb_2);
            localStorage.setItem('scrollbar_thumb_2', scrollbar_thumb_2);

            var scrollbar_thumb_hover_2 = '#595e6bb3';
            document.documentElement.style.setProperty('--scrollbar-thumb-hover-2', scrollbar_thumb_hover_2);
            localStorage.setItem('scrollbar_thumb_hover_2', scrollbar_thumb_hover_2);

            /* --- Inputs --- */
            var bg_input = '#252d3a';
            document.documentElement.style.setProperty('--bg-input', bg_input);
            localStorage.setItem('bg_input', bg_input);

            /* --- Aside --- */
            var bg_aside = '#1c2229';
            document.documentElement.style.setProperty('--bg-aside', bg_aside);
            localStorage.setItem('bg_aside', bg_aside);

            var bg_aside_div_hover = '#ffffff06';
            document.documentElement.style.setProperty('--bg-aside-div-hover', bg_aside_div_hover);
            localStorage.setItem('bg_aside_div_hover', bg_aside_div_hover);

            var bg_aside_div_active = '#ffffff09';
            document.documentElement.style.setProperty('--bg-aside-div-active', bg_aside_div_active);
            localStorage.setItem('bg_aside_div_active', bg_aside_div_active);

            var bg_aside_div_icon_hover = '#ffffffbf';
            document.documentElement.style.setProperty('--bg-aside-div-icon-hover', bg_aside_div_icon_hover);
            localStorage.setItem('bg_aside_div_icon_hover', bg_aside_div_icon_hover);

            var bg_aside_div_icon_active = '#ffffffff';
            document.documentElement.style.setProperty('--bg-aside-div-icon-active', bg_aside_div_icon_active);
            localStorage.setItem('bg_aside_div_icon_active', bg_aside_div_icon_active);

            /* --- Tasks --- */
            var general_icon = '#fff';
            document.documentElement.style.setProperty('--general-icon', general_icon);
            localStorage.setItem('general_icon', general_icon);

            var general_icon_light = '#ffffffbf';
            document.documentElement.style.setProperty('--general-icon-light', general_icon_light);
            localStorage.setItem('general_icon_light', general_icon_light);

            var bg_task_gradient_start = '#202731';
            document.documentElement.style.setProperty('--bg-task-gradient-start', bg_task_gradient_start);
            localStorage.setItem('bg_task_gradient_start', bg_task_gradient_start);

            var bg_task_gradient_end = '#141a22bf';
            document.documentElement.style.setProperty('--bg-task-gradient-end', bg_task_gradient_end);
            localStorage.setItem('bg_task_gradient_end', bg_task_gradient_end);

            var task_content_border = '#545a69';
            document.documentElement.style.setProperty('--task-content-border', task_content_border);
            localStorage.setItem('task_content_border', task_content_border);

            var task_content_light = '#ffffff1a';
            document.documentElement.style.setProperty('--task-content-light', task_content_light);
            localStorage.setItem('task_content_light', task_content_light);

            /* --- Aside buttons --- */
            var bg_middle_button_icon = '#fff';
            document.documentElement.style.setProperty('--bg-middle-button-icon', bg_middle_button_icon);
            localStorage.setItem('bg_middle_button_icon', bg_middle_button_icon);

            var bg_middle_button_text = '#fff';
            document.documentElement.style.setProperty('--bg-middle-button-text', bg_middle_button_text);
            localStorage.setItem('bg_middle_button_text', bg_middle_button_text);

            var bg_middle_button_hover = '#30354133';
            document.documentElement.style.setProperty('--bg-middle-button-hover', bg_middle_button_hover);
            localStorage.setItem('bg_middle_button_hover', bg_middle_button_hover);

            var bg_middle_button_hover_icon = '#ffffff59';
            document.documentElement.style.setProperty('--bg-middle-button-hover-icon', bg_middle_button_hover_icon);
            localStorage.setItem('bg_middle_button_hover_icon', bg_middle_button_hover_icon);

            var bg_middle_button_selected = '#30354180';
            document.documentElement.style.setProperty('--bg-middle-button-selected', bg_middle_button_selected);
            localStorage.setItem('bg_middle_button_selected', bg_middle_button_selected);

            var bg_middle_button_selected_icon_light = '#ffffff80';
            document.documentElement.style.setProperty('--bg-middle-button-selected-icon-light', bg_middle_button_selected_icon_light);
            localStorage.setItem('bg_middle_button_selected_icon_light', bg_middle_button_selected_icon_light);

            var bg_middle_button_selected_text_light = '#ffffff80';
            document.documentElement.style.setProperty('--bg-middle-button-selected-text-light', bg_middle_button_selected_text_light);
            localStorage.setItem('bg_middle_button_selected_text_light', bg_middle_button_selected_text_light);

            var bg_middle_button_blue_text = '#4f4fff';
            document.documentElement.style.setProperty('--bg-middle-button-blue-text', bg_middle_button_blue_text);
            localStorage.setItem('bg_middle_button_blue_text', bg_middle_button_blue_text);

            var bg_middle_button_blue_icon = '#4f4fff';
            document.documentElement.style.setProperty('--bg-middle-button-blue-icon', bg_middle_button_blue_icon);
            localStorage.setItem('bg_middle_button_blue_icon', bg_middle_button_blue_icon);

            var bg_middle_button_blue_icon_light = '#4f4fff99';
            document.documentElement.style.setProperty('--bg-middle-button-blue-icon-light', bg_middle_button_blue_icon_light);
            localStorage.setItem('bg_middle_button_blue_icon_light', bg_middle_button_blue_icon_light);

            var bg_middle_button_blue_hover_icon_text = '#4f4fffbf';
            document.documentElement.style.setProperty('--bg-middle-button-blue-hover-icon-text', bg_middle_button_blue_hover_icon_text);
            localStorage.setItem('bg_middle_button_blue_hover_icon_text', bg_middle_button_blue_hover_icon_text);

            /* --- Floating buttons --- */
            var bg_button_floating = '#6781A6';
            document.documentElement.style.setProperty('--bg-button-floating', bg_button_floating);
            localStorage.setItem('bg_button_floating', bg_button_floating);

            var bg_button_floating_icon = '#fff';
            document.documentElement.style.setProperty('--bg-button-floating-icon', bg_button_floating_icon);
            localStorage.setItem('bg_button_floating_icon', bg_button_floating_icon);

            var bg_button_floating_hover = '#4C607B';
            document.documentElement.style.setProperty('--bg-button-floating-hover', bg_button_floating_hover);
            localStorage.setItem('bg_button_floating_hover', bg_button_floating_hover);

            var bg_button_floating_icon_hover_light = '#fff';
            document.documentElement.style.setProperty('--bg-button-floating-icon-hover-light', bg_button_floating_icon_hover_light);
            localStorage.setItem('bg_button_floating_icon_hover_light', bg_button_floating_icon_hover_light);

            var bg_button_floating_border = '#fff';
            document.documentElement.style.setProperty('--bg-button-floating-border', bg_button_floating_border);
            localStorage.setItem('bg_button_floating_border', bg_button_floating_border);

            var bg_button_floating_shadow = '#00000080';
            document.documentElement.style.setProperty('--bg-button-floating-shadow', bg_button_floating_shadow);
            localStorage.setItem('bg_button_floating_shadow', bg_button_floating_shadow);

            /* --- Footer --- */
            var bg_footer = '#0d0f13';
            document.documentElement.style.setProperty('--bg-footer', bg_footer);
            localStorage.setItem('bg_footer', bg_footer);

            var bg_footer_text = '#fff';
            document.documentElement.style.setProperty('--bg-footer-text', bg_footer_text);
            localStorage.setItem('bg_footer_text', bg_footer_text);


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
    var theme = localStorage.getItem('theme') || 'dark';

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
