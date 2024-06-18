// Get the theme:
let theme = localStorage.getItem('theme') || 'firts-dark';

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

        case 'firts-dark': {
            // Background, middleground, border:
            var bg_color = '#11151b';
            localStorage.setItem('bg_color', bg_color);

            var mbg_color = '#191e25';
            localStorage.setItem('mbg_color', mbg_color);

            var b_color = '#303541';
            localStorage.setItem('b_color', b_color);

            var general_font = '#fff';
            localStorage.setItem('general_font', general_font);

            var general_font_light = '#ffffff80';
            localStorage.setItem('general_font_light', general_font_light);

            var general_font_2 = '#a7a7a7';
            localStorage.setItem('general_font_2', general_font_2);

            var general_font_light_2 = '#ffffff26';
            localStorage.setItem('general_font_light_2', general_font_light_2);

            // Scroll:
            var scrollbar_track = '#232730';
            localStorage.setItem('scrollbar_track', scrollbar_track);

            var scrollbar_thumb = '#393f4d';
            localStorage.setItem('scrollbar_thumb', scrollbar_thumb);

            var scrollbar_thumb_hover = '#7c818fb3';
            localStorage.setItem('scrollbar_thumb_hover', scrollbar_thumb_hover);

            var scrollbar_thumb_2 = '#292e3a';
            localStorage.setItem('scrollbar_thumb_2', scrollbar_thumb_2);

            var scrollbar_thumb_hover_2 = '#595e6bb3';
            localStorage.setItem('scrollbar_thumb_hover_2', scrollbar_thumb_hover_2);

            // Inputs:
            var bg_input = '#252d3a';
            localStorage.setItem('bg_input', bg_input);

            // Aside:
            var bg_aside = '#1c2229';
            localStorage.setItem('bg_aside', bg_aside);

            var bg_aside_div_hover = '#ffffff06';
            localStorage.setItem('bg_aside_div_hover', bg_aside_div_hover);

            var bg_aside_div_active = '#ffffff09';
            localStorage.setItem('bg_aside_div_active', bg_aside_div_active);

            var bg_aside_div_icon_hover = '#ffffffbf';
            localStorage.setItem('bg_aside_div_icon_hover', bg_aside_div_icon_hover);

            var bg_aside_div_icon_active = '#ffffffff';
            localStorage.setItem('bg_aside_div_icon_active', bg_aside_div_icon_active);

            // Tasks:
            var general_icon = '#fff';
            localStorage.setItem('general_icon', general_icon);

            var general_icon_light = '#ffffffbf';
            localStorage.setItem('general_icon_light', general_icon_light);

            var bg_task_gradient_start = '#202731';
            localStorage.setItem('bg_task_gradient_start', bg_task_gradient_start);

            var bg_task_gradient_end = '#141a22bf';
            localStorage.setItem('bg_task_gradient_end', bg_task_gradient_end);

            var task_content_border = '#545a69';
            localStorage.setItem('task_content_border', task_content_border);

            var task_content_light = '#ffffff1a';
            localStorage.setItem('task_content_light', task_content_light);

            // Aside buttons:
            var bg_middle_button_icon = '#fff';
            localStorage.setItem('bg_middle_button_icon', bg_middle_button_icon);

            var bg_middle_button_text = '#fff';
            localStorage.setItem('bg_middle_button_text', bg_middle_button_text);

            var bg_middle_button_hover = '#30354133';
            localStorage.setItem('bg_middle_button_hover', bg_middle_button_hover);

            var bg_middle_button_hover_icon = '#ffffff59';
            localStorage.setItem('bg_middle_button_hover_icon', bg_middle_button_hover_icon);

            var bg_middle_button_selected = '#30354180';
            localStorage.setItem('bg_middle_button_selected', bg_middle_button_selected);

            var bg_middle_button_selected_icon_light = '#ffffff80';
            localStorage.setItem('bg_middle_button_selected_icon_light', bg_middle_button_selected_icon_light);

            var bg_middle_button_selected_text_light = '#ffffff80';
            localStorage.setItem('bg_middle_button_selected_text_light', bg_middle_button_selected_text_light);

            var bg_middle_button_blue_text = '#4f4fff';
            localStorage.setItem('bg_middle_button_blue_text', bg_middle_button_blue_text);

            var bg_middle_button_blue_icon = '#4f4fff';
            localStorage.setItem('bg_middle_button_blue_icon', bg_middle_button_blue_icon);

            var bg_middle_button_blue_icon_light = '#4f4fff99';
            localStorage.setItem('bg_middle_button_blue_icon_light', bg_middle_button_blue_icon_light);

            var bg_middle_button_blue_hover_icon_text = '#4f4fffbf';
            localStorage.setItem('bg_middle_button_blue_hover_icon_text', bg_middle_button_blue_hover_icon_text);

            // Floating buttons:
            var bg_button_floating = '#6781A6';
            localStorage.setItem('bg_button_floating', bg_button_floating);

            var bg_button_floating_icon = '#fff';
            localStorage.setItem('bg_button_floating_icon', bg_button_floating_icon);

            var bg_button_floating_hover = '#4C607B';
            localStorage.setItem('bg_button_floating_hover', bg_button_floating_hover);

            var bg_button_floating_icon_hover_light = '#fff';
            localStorage.setItem('bg_button_floating_icon_hover_light', bg_button_floating_icon_hover_light);

            var bg_button_floating_border = '#fff';
            localStorage.setItem('bg_button_floating_border', bg_button_floating_border);

            var bg_button_floating_shadow = '#00000080';
            localStorage.setItem('bg_button_floating_shadow', bg_button_floating_shadow);

            // Footer:
            var bg_footer = '#0d0f13';
            localStorage.setItem('bg_footer', bg_footer);

            var bg_footer_text = '#fff';
            localStorage.setItem('bg_footer_text', bg_footer_text);


            // Set the theme:
            localStorage.setItem('theme', 'dark');

            break;
        }
    }
}

// Set the theme:
set_theme(theme);