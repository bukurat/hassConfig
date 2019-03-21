$(function(){ //DOM Ready

    function navigate(url)
    {
        window.location.href = url;
    }

    $(document).attr("title", "Tablet Panel");
    content_width = (120 + 5) * 8 + 5
    $('.gridster').width(content_width)
    $(".gridster ul").gridster({
        widget_margins: [5, 5],
        widget_base_dimensions: [120, 120],
        avoid_overlapped_widgets: true,
        max_rows: 15,
        max_size_x: 8,
        shift_widgets_up: false
    }).data('gridster').disable();
    
    // Add Widgets

    var gridster = $(".gridster ul").gridster().data('gridster');
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseclock-default-clock-clock" id="default-clock-clock"><h1 class="date"data-bind="text: date, attr: {style: date_style}"></h1><h2 class="time" data-bind="text: time, attr: {style: time_style}"></h2></div></li>', 2, 1, 1, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-sensor-core0-temp" id="default-sensor-core0-temp"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit" data-bind="attr:{ style: container_style}"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 3, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-sensor-core1-temp" id="default-sensor-core1-temp"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit" data-bind="attr:{ style: container_style}"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 4, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-sensor-core2-temp" id="default-sensor-core2-temp"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit" data-bind="attr:{ style: container_style}"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 5, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-sensor-core3-temp" id="default-sensor-core3-temp"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit" data-bind="attr:{ style: container_style}"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 6, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-sensor-cpu-speed" id="default-sensor-cpu-speed"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit" data-bind="attr:{ style: container_style}"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 7, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-input-boolean-front-door-lock" id="default-input-boolean-front-door-lock"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 3, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baselight-default-light-salt-lamp" id="default-light-salt-lamp"><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><span class="toggle-area" id="switch"></span><p class="state_text" data-bind="text: state_text, attr:{style: state_text_style}"></p><div class="levelunit"><p class="level" data-bind="text: level, attr:{style: level_style}"></p><p class="unit" data-bind="html: units, attr:{style: unit_style}"></p></div><p class="secondary-icon minus"><i data-bind="attr: {class: icon_down, style: level_down_style}" id="level-down"></i></p><p class="secondary-icon plus"><i data-bind="attr: {class: icon_up, style: level_up_style}" id="level-up"></i></p></div></li>', 1, 1, 4, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baselight-default-light-lounge-curtain-light" id="default-light-lounge-curtain-light"><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><span class="toggle-area" id="switch"></span><p class="state_text" data-bind="text: state_text, attr:{style: state_text_style}"></p><div class="levelunit"><p class="level" data-bind="text: level, attr:{style: level_style}"></p><p class="unit" data-bind="html: units, attr:{style: unit_style}"></p></div><p class="secondary-icon minus"><i data-bind="attr: {class: icon_down, style: level_down_style}" id="level-down"></i></p><p class="secondary-icon plus"><i data-bind="attr: {class: icon_up, style: level_up_style}" id="level-up"></i></p></div></li>', 1, 1, 5, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-sensor-disk-free" id="default-sensor-disk-free"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit" data-bind="attr:{ style: container_style}"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 6, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-sensor-load-1m" id="default-sensor-load-1m"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit" data-bind="attr:{ style: container_style}"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 7, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-input-boolean-nathan-lamp-switch" id="default-input-boolean-nathan-lamp-switch"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 1, 3)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baselight-default-light-bar-light" id="default-light-bar-light"><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><span class="toggle-area" id="switch"></span><p class="state_text" data-bind="text: state_text, attr:{style: state_text_style}"></p><div class="levelunit"><p class="level" data-bind="text: level, attr:{style: level_style}"></p><p class="unit" data-bind="html: units, attr:{style: unit_style}"></p></div><p class="secondary-icon minus"><i data-bind="attr: {class: icon_down, style: level_down_style}" id="level-down"></i></p><p class="secondary-icon plus"><i data-bind="attr: {class: icon_up, style: level_up_style}" id="level-up"></i></p></div></li>', 1, 1, 2, 3)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baselight-default-light-reading-light" id="default-light-reading-light"><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><span class="toggle-area" id="switch"></span><p class="state_text" data-bind="text: state_text, attr:{style: state_text_style}"></p><div class="levelunit"><p class="level" data-bind="text: level, attr:{style: level_style}"></p><p class="unit" data-bind="html: units, attr:{style: unit_style}"></p></div><p class="secondary-icon minus"><i data-bind="attr: {class: icon_down, style: level_down_style}" id="level-down"></i></p><p class="secondary-icon plus"><i data-bind="attr: {class: icon_up, style: level_up_style}" id="level-up"></i></p></div></li>', 1, 1, 3, 3)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baselight-default-light-cupboard-lamps" id="default-light-cupboard-lamps"><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><span class="toggle-area" id="switch"></span><p class="state_text" data-bind="text: state_text, attr:{style: state_text_style}"></p><div class="levelunit"><p class="level" data-bind="text: level, attr:{style: level_style}"></p><p class="unit" data-bind="html: units, attr:{style: unit_style}"></p></div><p class="secondary-icon minus"><i data-bind="attr: {class: icon_down, style: level_down_style}" id="level-down"></i></p><p class="secondary-icon plus"><i data-bind="attr: {class: icon_up, style: level_up_style}" id="level-up"></i></p></div></li>', 1, 1, 4, 3)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-switch-christmas-tree" id="default-switch-christmas-tree"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 5, 3)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-switch-workshop-power" id="default-switch-workshop-power"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 6, 3)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basejavascript-default-reload" id="default-reload"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 1, 1, 1, 5)
    
    
    
    var widgets = {}
    // Initialize Widgets
    
        widgets["default-clock-clock"] = new baseclock("default-clock-clock", "", "default", {'widget_type': 'baseclock', 'fields': {'date': '', 'time': ''}, 'static_css': {'date_style': 'color: #fff;', 'time_style': 'color: #aa00ff;', 'widget_style': 'background-color: #444;'}, 'static_icons': [], 'icons': [], 'css': {}, 'entity': 'clock.clock', 'title_is_friendly_name': 1, 'use_comma': 0, 'precision': 1, 'use_hass_icon': 1, 'namespace': 'default'})
    
        widgets["default-sensor-core0-temp"] = new basedisplay("default-sensor-core0-temp", "", "default", {'widget_type': 'basedisplay', 'entity': 'sensor.core0_temp', 'entity_to_sub_entity_attribute': '', 'sub_entity': '', 'sub_entity_to_entity_attribute': '', 'fields': {'title': '', 'title2': '', 'value': '', 'unit': '', 'state_text': ''}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'state_text_style': 'color: #fff;font-size: 100%;', 'widget_style': 'background-color: #444;', 'container_style': ''}, 'css': {'value_style': 'color: #00aaff;font-size: 250%;', 'text_style': 'color: #fff;font-size: 100%;', 'unit_style': 'color: #00aaff;font-size: 100%;'}, 'icons': [], 'static_icons': [], 'title_is_friendly_name': 1, 'use_comma': 0, 'precision': 1, 'use_hass_icon': 1, 'namespace': 'default'})
    
        widgets["default-sensor-core1-temp"] = new basedisplay("default-sensor-core1-temp", "", "default", {'widget_type': 'basedisplay', 'entity': 'sensor.core1_temp', 'entity_to_sub_entity_attribute': '', 'sub_entity': '', 'sub_entity_to_entity_attribute': '', 'fields': {'title': '', 'title2': '', 'value': '', 'unit': '', 'state_text': ''}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'state_text_style': 'color: #fff;font-size: 100%;', 'widget_style': 'background-color: #444;', 'container_style': ''}, 'css': {'value_style': 'color: #00aaff;font-size: 250%;', 'text_style': 'color: #fff;font-size: 100%;', 'unit_style': 'color: #00aaff;font-size: 100%;'}, 'icons': [], 'static_icons': [], 'title_is_friendly_name': 1, 'use_comma': 0, 'precision': 1, 'use_hass_icon': 1, 'namespace': 'default'})
    
        widgets["default-sensor-core2-temp"] = new basedisplay("default-sensor-core2-temp", "", "default", {'widget_type': 'basedisplay', 'entity': 'sensor.core2_temp', 'entity_to_sub_entity_attribute': '', 'sub_entity': '', 'sub_entity_to_entity_attribute': '', 'fields': {'title': '', 'title2': '', 'value': '', 'unit': '', 'state_text': ''}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'state_text_style': 'color: #fff;font-size: 100%;', 'widget_style': 'background-color: #444;', 'container_style': ''}, 'css': {'value_style': 'color: #00aaff;font-size: 250%;', 'text_style': 'color: #fff;font-size: 100%;', 'unit_style': 'color: #00aaff;font-size: 100%;'}, 'icons': [], 'static_icons': [], 'title_is_friendly_name': 1, 'use_comma': 0, 'precision': 1, 'use_hass_icon': 1, 'namespace': 'default'})
    
        widgets["default-sensor-core3-temp"] = new basedisplay("default-sensor-core3-temp", "", "default", {'widget_type': 'basedisplay', 'entity': 'sensor.core3_temp', 'entity_to_sub_entity_attribute': '', 'sub_entity': '', 'sub_entity_to_entity_attribute': '', 'fields': {'title': '', 'title2': '', 'value': '', 'unit': '', 'state_text': ''}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'state_text_style': 'color: #fff;font-size: 100%;', 'widget_style': 'background-color: #444;', 'container_style': ''}, 'css': {'value_style': 'color: #00aaff;font-size: 250%;', 'text_style': 'color: #fff;font-size: 100%;', 'unit_style': 'color: #00aaff;font-size: 100%;'}, 'icons': [], 'static_icons': [], 'title_is_friendly_name': 1, 'use_comma': 0, 'precision': 1, 'use_hass_icon': 1, 'namespace': 'default'})
    
        widgets["default-sensor-cpu-speed"] = new basedisplay("default-sensor-cpu-speed", "", "default", {'widget_type': 'basedisplay', 'entity': 'sensor.cpu_speed', 'entity_to_sub_entity_attribute': '', 'sub_entity': '', 'sub_entity_to_entity_attribute': '', 'fields': {'title': '', 'title2': '', 'value': '', 'unit': '', 'state_text': ''}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'state_text_style': 'color: #fff;font-size: 100%;', 'widget_style': 'background-color: #444;', 'container_style': ''}, 'css': {'value_style': 'color: #00aaff;font-size: 250%;', 'text_style': 'color: #fff;font-size: 100%;', 'unit_style': 'color: #00aaff;font-size: 100%;'}, 'icons': [], 'static_icons': [], 'title_is_friendly_name': 1, 'use_comma': 0, 'precision': 1, 'use_hass_icon': 1, 'namespace': 'default'})
    
        widgets["default-input-boolean-front-door-lock"] = new baseswitch("default-input-boolean-front-door-lock", "", "default", {'widget_type': 'baseswitch', 'entity': 'input_boolean.front_door_lock', 'state_active': 'on', 'state_inactive': 'off', 'enable': 1, 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'input_boolean.front_door_lock'}, 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'input_boolean.front_door_lock'}, 'fields': {'title': '', 'title2': '', 'icon': '', 'icon_style': '', 'state_text': ''}, 'icons': {'icon_on': 'fas-sliders-h', 'icon_off': 'fas-sliders-h'}, 'static_icons': [], 'css': {'icon_style_active': 'color: #aaff00;', 'icon_style_inactive': 'color: #888;'}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'widget_style': 'background-color: #444;'}, 'title_is_friendly_name': 1, 'use_comma': 0, 'precision': 1, 'use_hass_icon': 1, 'namespace': 'default'})
    
        widgets["default-light-salt-lamp"] = new baselight("default-light-salt-lamp", "", "default", {'widget_type': 'baselight', 'entity': 'light.salt_lamp', 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'light.salt_lamp'}, 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'light.salt_lamp'}, 'fields': {'title': '', 'title2': '', 'icon': '', 'units': '%', 'level': '', 'state_text': '', 'icon_style': ''}, 'icons': {'icon_on': 'fas-circle', 'icon_off': 'far-circle'}, 'static_icons': {'icon_up': 'fas-plus', 'icon_down': 'fas-minus'}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'level_style': 'color: #fff;', 'unit_style': 'color: #fff;', 'level_up_style': 'color: #888;', 'level_down_style': 'color: #888;', 'widget_style': 'background-color: #444;'}, 'css': {'icon_style_active': 'color: #aaff00;', 'icon_style_inactive': 'color: #888;'}, 'title_is_friendly_name': 1, 'use_comma': 0, 'precision': 1, 'use_hass_icon': 1, 'namespace': 'default'})
    
        widgets["default-light-lounge-curtain-light"] = new baselight("default-light-lounge-curtain-light", "", "default", {'widget_type': 'baselight', 'entity': 'light.lounge_curtain_light', 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'light.lounge_curtain_light'}, 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'light.lounge_curtain_light'}, 'fields': {'title': '', 'title2': '', 'icon': '', 'units': '%', 'level': '', 'state_text': '', 'icon_style': ''}, 'icons': {'icon_on': 'fas-circle', 'icon_off': 'far-circle'}, 'static_icons': {'icon_up': 'fas-plus', 'icon_down': 'fas-minus'}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'level_style': 'color: #fff;', 'unit_style': 'color: #fff;', 'level_up_style': 'color: #888;', 'level_down_style': 'color: #888;', 'widget_style': 'background-color: #444;'}, 'css': {'icon_style_active': 'color: #aaff00;', 'icon_style_inactive': 'color: #888;'}, 'title_is_friendly_name': 1, 'use_comma': 0, 'precision': 1, 'use_hass_icon': 1, 'namespace': 'default'})
    
        widgets["default-sensor-disk-free"] = new basedisplay("default-sensor-disk-free", "", "default", {'widget_type': 'basedisplay', 'entity': 'sensor.disk_free', 'entity_to_sub_entity_attribute': '', 'sub_entity': '', 'sub_entity_to_entity_attribute': '', 'fields': {'title': '', 'title2': '', 'value': '', 'unit': '', 'state_text': ''}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'state_text_style': 'color: #fff;font-size: 100%;', 'widget_style': 'background-color: #444;', 'container_style': ''}, 'css': {'value_style': 'color: #00aaff;font-size: 250%;', 'text_style': 'color: #fff;font-size: 100%;', 'unit_style': 'color: #00aaff;font-size: 100%;'}, 'icons': [], 'static_icons': [], 'title_is_friendly_name': 1, 'use_comma': 0, 'precision': 1, 'use_hass_icon': 1, 'namespace': 'default'})
    
        widgets["default-sensor-load-1m"] = new basedisplay("default-sensor-load-1m", "", "default", {'widget_type': 'basedisplay', 'entity': 'sensor.load_1m', 'entity_to_sub_entity_attribute': '', 'sub_entity': '', 'sub_entity_to_entity_attribute': '', 'fields': {'title': '', 'title2': '', 'value': '', 'unit': '', 'state_text': ''}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'state_text_style': 'color: #fff;font-size: 100%;', 'widget_style': 'background-color: #444;', 'container_style': ''}, 'css': {'value_style': 'color: #00aaff;font-size: 250%;', 'text_style': 'color: #fff;font-size: 100%;', 'unit_style': 'color: #00aaff;font-size: 100%;'}, 'icons': [], 'static_icons': [], 'title_is_friendly_name': 1, 'use_comma': 0, 'precision': 1, 'use_hass_icon': 1, 'namespace': 'default'})
    
        widgets["default-input-boolean-nathan-lamp-switch"] = new baseswitch("default-input-boolean-nathan-lamp-switch", "", "default", {'widget_type': 'baseswitch', 'entity': 'input_boolean.nathan_lamp_switch', 'state_active': 'on', 'state_inactive': 'off', 'enable': 1, 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'input_boolean.nathan_lamp_switch'}, 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'input_boolean.nathan_lamp_switch'}, 'fields': {'title': '', 'title2': '', 'icon': '', 'icon_style': '', 'state_text': ''}, 'icons': {'icon_on': 'fas-sliders-h', 'icon_off': 'fas-sliders-h'}, 'static_icons': [], 'css': {'icon_style_active': 'color: #aaff00;', 'icon_style_inactive': 'color: #888;'}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'widget_style': 'background-color: #444;'}, 'title_is_friendly_name': 1, 'use_comma': 0, 'precision': 1, 'use_hass_icon': 1, 'namespace': 'default'})
    
        widgets["default-light-bar-light"] = new baselight("default-light-bar-light", "", "default", {'widget_type': 'baselight', 'entity': 'light.bar_light', 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'light.bar_light'}, 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'light.bar_light'}, 'fields': {'title': '', 'title2': '', 'icon': '', 'units': '%', 'level': '', 'state_text': '', 'icon_style': ''}, 'icons': {'icon_on': 'fas-circle', 'icon_off': 'far-circle'}, 'static_icons': {'icon_up': 'fas-plus', 'icon_down': 'fas-minus'}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'level_style': 'color: #fff;', 'unit_style': 'color: #fff;', 'level_up_style': 'color: #888;', 'level_down_style': 'color: #888;', 'widget_style': 'background-color: #444;'}, 'css': {'icon_style_active': 'color: #aaff00;', 'icon_style_inactive': 'color: #888;'}, 'title_is_friendly_name': 1, 'use_comma': 0, 'precision': 1, 'use_hass_icon': 1, 'namespace': 'default'})
    
        widgets["default-light-reading-light"] = new baselight("default-light-reading-light", "", "default", {'widget_type': 'baselight', 'entity': 'light.reading_light', 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'light.reading_light'}, 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'light.reading_light'}, 'fields': {'title': '', 'title2': '', 'icon': '', 'units': '%', 'level': '', 'state_text': '', 'icon_style': ''}, 'icons': {'icon_on': 'fas-circle', 'icon_off': 'far-circle'}, 'static_icons': {'icon_up': 'fas-plus', 'icon_down': 'fas-minus'}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'level_style': 'color: #fff;', 'unit_style': 'color: #fff;', 'level_up_style': 'color: #888;', 'level_down_style': 'color: #888;', 'widget_style': 'background-color: #444;'}, 'css': {'icon_style_active': 'color: #aaff00;', 'icon_style_inactive': 'color: #888;'}, 'title_is_friendly_name': 1, 'use_comma': 0, 'precision': 1, 'use_hass_icon': 1, 'namespace': 'default'})
    
        widgets["default-light-cupboard-lamps"] = new baselight("default-light-cupboard-lamps", "", "default", {'widget_type': 'baselight', 'entity': 'light.cupboard_lamps', 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'light.cupboard_lamps'}, 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'light.cupboard_lamps'}, 'fields': {'title': '', 'title2': '', 'icon': '', 'units': '%', 'level': '', 'state_text': '', 'icon_style': ''}, 'icons': {'icon_on': 'fas-circle', 'icon_off': 'far-circle'}, 'static_icons': {'icon_up': 'fas-plus', 'icon_down': 'fas-minus'}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'level_style': 'color: #fff;', 'unit_style': 'color: #fff;', 'level_up_style': 'color: #888;', 'level_down_style': 'color: #888;', 'widget_style': 'background-color: #444;'}, 'css': {'icon_style_active': 'color: #aaff00;', 'icon_style_inactive': 'color: #888;'}, 'title_is_friendly_name': 1, 'use_comma': 0, 'precision': 1, 'use_hass_icon': 1, 'namespace': 'default'})
    
        widgets["default-switch-christmas-tree"] = new baseswitch("default-switch-christmas-tree", "", "default", {'widget_type': 'baseswitch', 'entity': 'switch.christmas_tree', 'state_active': 'on', 'state_inactive': 'off', 'enable': 1, 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'switch.christmas_tree'}, 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'switch.christmas_tree'}, 'fields': {'title': '', 'title2': '', 'icon': '', 'icon_style': '', 'state_text': ''}, 'icons': {'icon_on': 'fas-circle', 'icon_off': 'far-circle'}, 'static_icons': [], 'css': {'icon_style_active': 'color: #aaff00;', 'icon_style_inactive': 'color: #888;'}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'widget_style': 'background-color: #444;'}, 'title_is_friendly_name': 1, 'use_comma': 0, 'precision': 1, 'use_hass_icon': 1, 'namespace': 'default'})
    
        widgets["default-switch-workshop-power"] = new baseswitch("default-switch-workshop-power", "", "default", {'widget_type': 'baseswitch', 'entity': 'switch.workshop_power', 'state_active': 'on', 'state_inactive': 'off', 'enable': 1, 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'switch.workshop_power'}, 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'switch.workshop_power'}, 'fields': {'title': '', 'title2': '', 'icon': '', 'icon_style': '', 'state_text': ''}, 'icons': {'icon_on': 'fas-circle', 'icon_off': 'far-circle'}, 'static_icons': [], 'css': {'icon_style_active': 'color: #aaff00;', 'icon_style_inactive': 'color: #888;'}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'widget_style': 'background-color: #444;'}, 'title_is_friendly_name': 1, 'use_comma': 0, 'precision': 1, 'use_hass_icon': 1, 'namespace': 'default'})
    
        widgets["default-reload"] = new basejavascript("default-reload", "", "default", {'widget_type': 'basejavascript', 'command': 'location.reload(true)', 'fields': {'title': 'Reload', 'title2': '', 'icon': '', 'icon_style': ''}, 'icons': {'icon_active': 'fa-refresh', 'icon_inactive': 'fa-refresh'}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'widget_style': 'background-color: #444;'}, 'css': {'icon_active_style': 'color: #fff;', 'icon_inactive_style': 'color: #fff;'}, 'static_icons': [], 'icon_active': 'fa-refresh', 'icon_inactive': 'fa-refresh', 'use_comma': 0, 'precision': 1, 'use_hass_icon': 1, 'namespace': 'default'})
    

    // Setup click handler to cancel timeout navigations

    $( ".gridster" ).click(function(){
        clearTimeout(myTimeout);
        if (myTimeoutSticky) {
            myTimeout = setTimeout(function() { navigate(myTimeoutUrl); }, myTimeoutDelay);
        }
    });

    // Set up timeout

    var myTimeout;
    var myTimeoutUrl;
    var myTimeoutDelay;
    var myTimeoutSticky = 0;

    if (location.search != "")
    {
        var query = location.search.substr(1);
        var result = {};
        query.split("&").forEach(function(part) {
        var item = part.split("=");
        result[item[0]] = decodeURIComponent(item[1]);
        });

        if ("timeout" in result && "return" in result)
        {
            url = result.return
            argcount = 0
            for (arg in result)
            {
                if (arg != "timeout" && arg != "return" && arg != "sticky")
                {
                    if (argcount == 0)
                    {
                        url += "?";
                    }
                    else
                    {
                        url += "?";
                    }
                    argcount ++;
                    url += arg + "=" + result[arg]
                }
            }
            if ("sticky" in result)
            {
                myTimeoutSticky = (result.sticky == "1");
            }
            myTimeoutUrl = url;
            myTimeoutDelay = result.timeout * 1000;
            myTimeout = setTimeout(function() { navigate(url); }, result.timeout * 1000);
        }
    }

    // Start listening for HA Events
    if (location.protocol == 'https:')
    {
        wsprot = "wss:"
    }
    else
    {
        wsprot = "ws:"
    }
    var stream_url = wsprot + '//' + location.host + '/stream'
    ha_status(stream_url, "Tablet Panel", widgets);

});