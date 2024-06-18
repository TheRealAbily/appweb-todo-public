// Get the theme:
let theme = localStorage.getItem('theme') || 'first-dark';

// Set the theme:
if (theme === 'first-dark') {
    // Background, middleground, border:
    localStorage.setItem('bg_color', '#11151b');
    localStorage.setItem('mbg_color', '#191e25');
    localStorage.setItem('b_color', '#303541');
    localStorage.setItem('general_font', '#fff');
    localStorage.setItem('general_font_light', '#ffffff80');
    localStorage.setItem('general_font_2', '#a7a7a7');
    localStorage.setItem('general_font_light_2', '#ffffff26');

    // Scroll:
    localStorage.setItem('scrollbar_track', '#232730');
    localStorage.setItem('scrollbar_thumb', '#393f4d');
    localStorage.setItem('scrollbar_thumb_hover', '#7c818fb3');
    localStorage.setItem('scrollbar_thumb_2', '#292e3a');
    localStorage.setItem('scrollbar_thumb_hover_2', '#595e6bb3');

    // Inputs:
    localStorage.setItem('bg_input', '#252d3a');

    // Aside:
    localStorage.setItem('bg_aside', '#1c2229');
    localStorage.setItem('bg_aside_div_hover', '#ffffff06');
    localStorage.setItem('bg_aside_div_active', '#ffffff09');
    localStorage.setItem('bg_aside_div_icon_hover', '#ffffffbf');
    localStorage.setItem('bg_aside_div_icon_active', '#ffffffff');

    // Tasks:
    localStorage.setItem('general_icon', '#fff');
    localStorage.setItem('general_icon_light', '#ffffffbf');
    localStorage.setItem('bg_task_gradient_start', '#202731');
    localStorage.setItem('bg_task_gradient_end', '#141a22bf');
    localStorage.setItem('task_content_border', '#545a69');
    localStorage.setItem('task_content_light', '#ffffff1a');

    // Aside buttons:
    localStorage.setItem('bg_middle_button_icon', '#fff');
    localStorage.setItem('bg_middle_button_text', '#fff');
    localStorage.setItem('bg_middle_button_hover', '#30354133');
    localStorage.setItem('bg_middle_button_hover_icon', '#ffffff59');
    localStorage.setItem('bg_middle_button_selected', '#30354180');
    localStorage.setItem('bg_middle_button_selected_icon_light', '#ffffff80');
    localStorage.setItem('bg_middle_button_selected_text_light', '#ffffff80');
    localStorage.setItem('bg_middle_button_blue_text', '#4f4fff');
    localStorage.setItem('bg_middle_button_blue_icon', '#4f4fff');
    localStorage.setItem('bg_middle_button_blue_icon_light', '#4f4fff99');
    localStorage.setItem('bg_middle_button_blue_hover_icon_text', '#4f4fffbf');

    // Floating buttons:
    localStorage.setItem('bg_button_floating', '#6781A6');
    localStorage.setItem('bg_button_floating_icon', '#fff');
    localStorage.setItem('bg_button_floating_hover', '#4C607B');
    localStorage.setItem('bg_button_floating_icon_hover_light', '#fff');
    localStorage.setItem('bg_button_floating_border', '#fff');
    localStorage.setItem('bg_button_floating_shadow', '#00000080');

    // Footer:
    localStorage.setItem('bg_footer', '#0d0f13');
    localStorage.setItem('bg_footer_text', '#fff');

    // Set the theme:
    localStorage.setItem('theme', 'dark');
} else {
    // Background, middleground, border:
    document.documentElement.style.setProperty('--bg-color', localStorage.getItem('bg_color'));
    document.documentElement.style.setProperty('--mbg-color', localStorage.getItem('mbg_color'));
    document.documentElement.style.setProperty('--b-color', localStorage.getItem('b_color'));
    document.documentElement.style.setProperty('--general-font', localStorage.getItem('general_font'));
    document.documentElement.style.setProperty('--general-font-light', localStorage.getItem('general_font_light'));
    document.documentElement.style.setProperty('--general-font-2', localStorage.getItem('general_font_2'));
    document.documentElement.style.setProperty('--general-font-light-2', localStorage.getItem('general_font_light_2'));

    // Scroll:
    document.documentElement.style.setProperty('--scrollbar-track', localStorage.getItem('scrollbar_track'));
    document.documentElement.style.setProperty('--scrollbar-thumb', localStorage.getItem('scrollbar_thumb'));
    document.documentElement.style.setProperty('--scrollbar-thumb-hover', localStorage.getItem('scrollbar_thumb_hover'));
    document.documentElement.style.setProperty('--scrollbar-thumb-2', localStorage.getItem('scrollbar_thumb_2'));
    document.documentElement.style.setProperty('--scrollbar-thumb-hover-2', localStorage.getItem('scrollbar_thumb_hover_2'));

    // Inputs:
    document.documentElement.style.setProperty('--bg-input', localStorage.getItem('bg_input'));

    // Aside:
    document.documentElement.style.setProperty('--bg-aside', localStorage.getItem('bg_aside'));
    document.documentElement.style.setProperty('--bg-aside-div-hover', localStorage.getItem('bg_aside_div_hover'));
    document.documentElement.style.setProperty('--bg-aside-div-active', localStorage.getItem('bg_aside_div_active'));
    document.documentElement.style.setProperty('--bg-aside-div-icon-hover', localStorage.getItem('bg_aside_div_icon_hover'));
    document.documentElement.style.setProperty('--bg-aside-div-icon-active', localStorage.getItem('bg_aside_div_icon_active'));

    // Tasks:
    document.documentElement.style.setProperty('--general-icon', localStorage.getItem('general_icon'));
    document.documentElement.style.setProperty('--general-icon-light', localStorage.getItem('general_icon_light'));
    document.documentElement.style.setProperty('--bg-task-gradient-start', localStorage.getItem('bg_task_gradient_start'));
    document.documentElement.style.setProperty('--bg-task-gradient-end', localStorage.getItem('bg_task_gradient_end'));
    document.documentElement.style.setProperty('--task-content-border', localStorage.getItem('task_content_border'));
    document.documentElement.style.setProperty('--task-content-light', localStorage.getItem('task_content_light'));

    // Aside buttons:
    document.documentElement.style.setProperty('--bg-middle-button-icon', localStorage.getItem('bg_middle_button_icon'));
    document.documentElement.style.setProperty('--bg-middle-button-text', localStorage.getItem('bg_middle_button_text'));
    document.documentElement.style.setProperty('--bg-middle-button-hover', localStorage.getItem('bg_middle_button_hover'));
    document.documentElement.style.setProperty('--bg-middle-button-hover-icon', localStorage.getItem('bg_middle_button_hover_icon'));
    document.documentElement.style.setProperty('--bg-middle-button-selected', localStorage.getItem('bg_middle_button_selected'));
    document.documentElement.style.setProperty('--bg-middle-button-selected-icon-light', localStorage.getItem('bg_middle_button_selected_icon_light'));
    document.documentElement.style.setProperty('--bg-middle-button-selected-text-light', localStorage.getItem('bg_middle_button_selected_text_light'));
    document.documentElement.style.setProperty('--bg-middle-button-blue-text', localStorage.getItem('bg_middle_button_blue_text'));
    document.documentElement.style.setProperty('--bg-middle-button-blue-icon', localStorage.getItem('bg_middle_button_blue_icon'));
    document.documentElement.style.setProperty('--bg-middle-button-blue-icon-light', localStorage.getItem('bg_middle_button_blue_icon_light'));
    document.documentElement.style.setProperty('--bg-middle-button-blue-hover-icon-text', localStorage.getItem('bg_middle_button_blue_hover_icon_text'));

    // Floating buttons:
    document.documentElement.style.setProperty('--bg-button-floating', localStorage.getItem('bg_button_floating'));
    document.documentElement.style.setProperty('--bg-button-floating-icon', localStorage.getItem('bg_button_floating_icon'));
    document.documentElement.style.setProperty('--bg-button-floating-hover', localStorage.getItem('bg_button_floating_hover'));
    document.documentElement.style.setProperty('--bg-button-floating-icon-hover-light', localStorage.getItem('bg_button_floating_icon_hover_light'));
    document.documentElement.style.setProperty('--bg-button-floating-border', localStorage.getItem('bg_button_floating_border'));
    document.documentElement.style.setProperty('--bg-button-floating-shadow', localStorage.getItem('bg_button_floating_shadow'));

    // Footer:
    document.documentElement.style.setProperty('--bg-footer', localStorage.getItem('bg_footer'));
    document.documentElement.style.setProperty('--bg-footer-text', localStorage.getItem('bg_footer_text'));
}
