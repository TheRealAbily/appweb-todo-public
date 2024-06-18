// Get the theme:
let theme = localStorage.getItem('theme') || 'firts-dark';

// Set the theme:
if (theme === 'firts-dark') {
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
}
else {
    // Background, middleground, border:
    document.documentElement.style.setProperty('--bg-color', document.documentElement.style.getPropertyValue('bg_color'));

    document.documentElement.style.setProperty('--mbg-color', document.documentElement.style.getPropertyValue('mbg_color'));

    document.documentElement.style.setProperty('--b-color', document.documentElement.style.getPropertyValue('b_color'));

    document.documentElement.style.setProperty('--general-font', document.documentElement.style.getPropertyValue('general_font'));

    document.documentElement.style.setProperty('--general-font-light', document.documentElement.style.getPropertyValue('general_font_light'));

    document.documentElement.style.setProperty('--general-font-2', document.documentElement.style.getPropertyValue('general_font_2'));

    document.documentElement.style.setProperty('--general-font-light-2', document.documentElement.style.getPropertyValue('general_font_light_2'));

    /* --- Scroll --- */
    document.documentElement.style.setProperty('--scrollbar-track', document.documentElement.style.getPropertyValue('scrollbar_track'));

    document.documentElement.style.setProperty('--scrollbar-thumb', document.documentElement.style.getPropertyValue('scrollbar_thumb'));

    document.documentElement.style.setProperty('--scrollbar-thumb-hover', document.documentElement.style.getPropertyValue('scrollbar_thumb_hover'));

    document.documentElement.style.setProperty('--scrollbar-thumb-2', document.documentElement.style.getPropertyValue('scrollbar_thumb_2'));

    document.documentElement.style.setProperty('--scrollbar-thumb-hover-2', document.documentElement.style.getPropertyValue('scrollbar_thumb_hover_2'));

    /* --- Inputs --- */
    document.documentElement.style.setProperty('--bg-input', document.documentElement.style.getPropertyValue('bg_input'));

    /* --- Aside --- */
    document.documentElement.style.setProperty('--bg-aside', document.documentElement.style.getPropertyValue('bg_aside'));

    document.documentElement.style.setProperty('--bg-aside-div-hover', document.documentElement.style.getPropertyValue('bg_aside_div_hover'));

    document.documentElement.style.setProperty('--bg-aside-div-active', document.documentElement.style.getPropertyValue('bg_aside_div_active'));

    document.documentElement.style.setProperty('--bg-aside-div-icon-hover', document.documentElement.style.getPropertyValue('bg_aside_div_icon_hover'));

    document.documentElement.style.setProperty('--bg-aside-div-icon-active', document.documentElement.style.getPropertyValue('bg_aside_div_icon_active'));

    /* --- Tasks --- */
    document.documentElement.style.setProperty('--general-icon', document.documentElement.style.getPropertyValue('general_icon'));

    document.documentElement.style.setProperty('--general-icon-light', document.documentElement.style.getPropertyValue('general_icon_light'));

    document.documentElement.style.setProperty('--bg-task-gradient-start', document.documentElement.style.getPropertyValue('bg_task_gradient_start'));

    document.documentElement.style.setProperty('--bg-task-gradient-end', document.documentElement.style.getPropertyValue('bg_task_gradient_end'));

    document.documentElement.style.setProperty('--task-content-border', document.documentElement.style.getPropertyValue('task_content_border'));

    document.documentElement.style.setProperty('--task-content-light', document.documentElement.style.getPropertyValue('task_content_light'));

    /* --- Aside buttons --- */
    document.documentElement.style.setProperty('--bg-middle-button-icon', document.documentElement.style.getPropertyValue('bg_middle_button_icon'));

    document.documentElement.style.setProperty('--bg-middle-button-text', document.documentElement.style.getPropertyValue('bg_middle_button_text'));

    document.documentElement.style.setProperty('--bg-middle-button-hover', document.documentElement.style.getPropertyValue('bg_middle_button_hover'));

    document.documentElement.style.setProperty('--bg-middle-button-hover-icon', document.documentElement.style.getPropertyValue('bg_middle_button_hover_icon'));

    document.documentElement.style.setProperty('--bg-middle-button-selected', document.documentElement.style.getPropertyValue('bg_middle_button_selected'));

    document.documentElement.style.setProperty('--bg-middle-button-selected-icon-light', document.documentElement.style.getPropertyValue('bg_middle_button_selected_icon_light'));

    document.documentElement.style.setProperty('--bg-middle-button-selected-text-light', document.documentElement.style.getPropertyValue('bg_middle_button_selected_text_light'));

    document.documentElement.style.setProperty('--bg-middle-button-blue-text', document.documentElement.style.getPropertyValue('bg_middle_button_blue_text'));

    document.documentElement.style.setProperty('--bg-middle-button-blue-icon', document.documentElement.style.getPropertyValue('bg_middle_button_blue_icon'));

    document.documentElement.style.setProperty('--bg-middle-button-blue-icon-light', document.documentElement.style.getPropertyValue('bg_middle_button_blue_icon_light'));

    document.documentElement.style.setProperty('--bg-middle-button-blue-hover-icon-text', document.documentElement.style.getPropertyValue('bg_middle_button_blue_hover_icon_text'));

    /* --- Floating buttons --- */
    document.documentElement.style.setProperty('--bg-button-floating', document.documentElement.style.getPropertyValue('bg_button_floating'));

    document.documentElement.style.setProperty('--bg-button-floating-icon', document.documentElement.style.getPropertyValue('bg_button_floating_icon'));

    document.documentElement.style.setProperty('--bg-button-floating-hover', document.documentElement.style.getPropertyValue('bg_button_floating_hover'));

    document.documentElement.style.setProperty('--bg-button-floating-icon-hover-light', document.documentElement.style.getPropertyValue('bg_button_floating_icon_hover_light'));

    document.documentElement.style.setProperty('--bg-button-floating-border', document.documentElement.style.getPropertyValue('bg_button_floating_border'));

    document.documentElement.style.setProperty('--bg-button-floating-shadow', document.documentElement.style.getPropertyValue('bg_button_floating_shadow'));

    /* --- Footer --- */
    document.documentElement.style.setProperty('--bg-footer', document.documentElement.style.getPropertyValue('bg_footer'));

    document.documentElement.style.setProperty('--bg-footer-text', document.documentElement.style.getPropertyValue('bg_footer_text'));

}