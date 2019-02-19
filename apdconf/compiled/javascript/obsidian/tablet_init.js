$(function(){ //DOM Ready

    function navigate(url)
    {
        window.location.href = url;
    }

    $(document).attr("title", "Tablet Panel");
    content_width = (120 + 5) * 7 + 5
    $('.gridster').width(content_width)
    $(".gridster ul").gridster({
        widget_margins: [5, 5],
        widget_base_dimensions: [120, 120],
        avoid_overlapped_widgets: true,
        max_rows: 15,
        max_size_x: 7,
        shift_widgets_up: false
    }).data('gridster').disable();
    
    // Add Widgets

    var gridster = $(".gridster ul").gridster().data('gridster');
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseclock-default-clock-clock" id="default-clock-clock"><h1 class="date"data-bind="text: date, attr: {style: date_style}"></h1><h2 class="time" data-bind="text: time, attr: {style: time_style}"></h2></div></li>', 2, 1, 1, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-dht-sensor-temperature" id="default-dht-sensor-temperature"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit" data-bind="attr:{ style: container_style}"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 3, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-dht-sensor-humidity" id="default-dht-sensor-humidity"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit" data-bind="attr:{ style: container_style}"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 4, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-sensor-load-1m" id="default-sensor-load-1m"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit" data-bind="attr:{ style: container_style}"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 5, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-sensor-load-15m" id="default-sensor-load-15m"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit" data-bind="attr:{ style: container_style}"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 6, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-sensor-cpu-temp" id="default-sensor-cpu-temp"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit" data-bind="attr:{ style: container_style}"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 7, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-input-boolean-front-door-lock" id="default-input-boolean-front-door-lock"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 3, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-switch-salt-lamp" id="default-switch-salt-lamp"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 4, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baselight-default-light-lounge-curtain-light" id="default-light-lounge-curtain-light"><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><span class="toggle-area" id="switch"></span><p class="state_text" data-bind="text: state_text, attr:{style: state_text_style}"></p><div class="levelunit"><p class="level" data-bind="text: level, attr:{style: level_style}"></p><p class="unit" data-bind="html: units, attr:{style: unit_style}"></p></div><p class="secondary-icon minus"><i data-bind="attr: {class: icon_down, style: level_down_style}" id="level-down"></i></p><p class="secondary-icon plus"><i data-bind="attr: {class: icon_up, style: level_up_style}" id="level-up"></i></p></div></li>', 1, 1, 5, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-binary-sensor-hall-motion" id="default-binary-sensor-hall-motion"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 6, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-input-boolean-nathan-lamp-switch" id="default-input-boolean-nathan-lamp-switch"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 1, 3)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-switch-bar-light" id="default-switch-bar-light"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 2, 3)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-switch-reading-light" id="default-switch-reading-light"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 3, 3)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-switch-christmas-tree" id="default-switch-christmas-tree"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 4, 3)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-switch-workshop-power" id="default-switch-workshop-power"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 5, 3)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basejavascript-default-reload" id="default-reload"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 1, 1, 1, 5)
    
    
    
    var widgets = {}
    // Initialize Widgets
    
        widgets["default-clock-clock"] = new baseclock("default-clock-clock", "", "obsidian", {'css': {}, 'static_css': {'time_style': 'color: #00FFFF;', 'date_style': 'font-size: 150%;color: #fff;', 'widget_style': 'border-color: white;border-style: solid;border-width: 2px;'}, 'widget_type': 'baseclock', 'entity': 'clock.clock', 'use_comma': 0, 'static_icons': [], 'precision': 1, 'icons': [], 'fields': {'time': '', 'date': ''}, 'title_is_friendly_name': 1, 'namespace': 'default', 'use_hass_icon': 1})
    
        widgets["default-dht-sensor-temperature"] = new basedisplay("default-dht-sensor-temperature", "", "obsidian", {'css': {'text_style': 'font-size: 100%;color: #00FFFF;', 'value_style': 'font-size: 300%;color: #00FFFF;', 'unit_style': 'font-size: 95%;color: #00FFFF;'}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'state_text_style': 'font-size: 100%;color: #00FFFF;', 'widget_style': 'background-image: url(css/obsidian/img/obsidian_w_bg.jpg);', 'container_style': ''}, 'widget_type': 'basedisplay', 'entity': 'sensor.dht_sensor_temperature', 'sub_entity': '', 'use_comma': 0, 'static_icons': [], 'entity_to_sub_entity_attribute': '', 'icons': [], 'fields': {'value': '', 'title2': '', 'title': 'Computer Room Temperature', 'unit': '', 'state_text': ''}, 'namespace': 'default', 'use_hass_icon': 1, 'sub_entity_to_entity_attribute': '', 'precision': 1})
    
        widgets["default-dht-sensor-humidity"] = new basedisplay("default-dht-sensor-humidity", "", "obsidian", {'css': {'text_style': 'font-size: 100%;color: #00FFFF;', 'value_style': 'font-size: 300%;color: #00FFFF;', 'unit_style': 'font-size: 95%;color: #00FFFF;'}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'state_text_style': 'font-size: 100%;color: #00FFFF;', 'widget_style': 'background-image: url(css/obsidian/img/obsidian_w_bg.jpg);', 'container_style': ''}, 'widget_type': 'basedisplay', 'entity': 'sensor.dht_sensor_humidity', 'sub_entity': '', 'use_comma': 0, 'static_icons': [], 'entity_to_sub_entity_attribute': '', 'icons': [], 'fields': {'value': '', 'title2': '', 'title': 'Computer Room Humidity', 'unit': '', 'state_text': ''}, 'namespace': 'default', 'use_hass_icon': 1, 'sub_entity_to_entity_attribute': '', 'precision': 1})
    
        widgets["default-sensor-load-1m"] = new basedisplay("default-sensor-load-1m", "", "obsidian", {'css': {'text_style': 'font-size: 100%;color: #00FFFF;', 'value_style': 'font-size: 300%;color: #00FFFF;', 'unit_style': 'font-size: 95%;color: #00FFFF;'}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'state_text_style': 'font-size: 100%;color: #00FFFF;', 'widget_style': 'background-image: url(css/obsidian/img/obsidian_w_bg.jpg);', 'container_style': ''}, 'widget_type': 'basedisplay', 'entity': 'sensor.load_1m', 'sub_entity': '', 'use_comma': 0, 'static_icons': [], 'entity_to_sub_entity_attribute': '', 'icons': [], 'fields': {'value': '', 'title2': '', 'title': '', 'unit': '', 'state_text': ''}, 'title_is_friendly_name': 1, 'namespace': 'default', 'use_hass_icon': 1, 'sub_entity_to_entity_attribute': '', 'precision': 1})
    
        widgets["default-sensor-load-15m"] = new basedisplay("default-sensor-load-15m", "", "obsidian", {'css': {'text_style': 'font-size: 100%;color: #00FFFF;', 'value_style': 'font-size: 300%;color: #00FFFF;', 'unit_style': 'font-size: 95%;color: #00FFFF;'}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'state_text_style': 'font-size: 100%;color: #00FFFF;', 'widget_style': 'background-image: url(css/obsidian/img/obsidian_w_bg.jpg);', 'container_style': ''}, 'widget_type': 'basedisplay', 'entity': 'sensor.load_15m', 'sub_entity': '', 'use_comma': 0, 'static_icons': [], 'entity_to_sub_entity_attribute': '', 'icons': [], 'fields': {'value': '', 'title2': '', 'title': '', 'unit': '', 'state_text': ''}, 'title_is_friendly_name': 1, 'namespace': 'default', 'use_hass_icon': 1, 'sub_entity_to_entity_attribute': '', 'precision': 1})
    
        widgets["default-sensor-cpu-temp"] = new basedisplay("default-sensor-cpu-temp", "", "obsidian", {'css': {'text_style': 'font-size: 100%;color: #00FFFF;', 'value_style': 'font-size: 300%;color: #00FFFF;', 'unit_style': 'font-size: 95%;color: #00FFFF;'}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'state_text_style': 'font-size: 100%;color: #00FFFF;', 'widget_style': 'background-image: url(css/obsidian/img/obsidian_w_bg.jpg);', 'container_style': ''}, 'widget_type': 'basedisplay', 'entity': 'sensor.cpu_temp', 'sub_entity': '', 'use_comma': 0, 'static_icons': [], 'entity_to_sub_entity_attribute': '', 'icons': [], 'fields': {'value': '', 'title2': '', 'title': '', 'unit': '', 'state_text': ''}, 'title_is_friendly_name': 1, 'namespace': 'default', 'use_hass_icon': 1, 'sub_entity_to_entity_attribute': '', 'precision': 1})
    
        widgets["default-input-boolean-front-door-lock"] = new baseswitch("default-input-boolean-front-door-lock", "", "obsidian", {'css': {'icon_style_active': 'color: #00FFFF;', 'icon_style_inactive': 'color: #888;'}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'state_text_style': 'color: #00FFFF;', 'widget_style': 'background-image: url(css/obsidian/img/obsidian_w_bg.jpg);'}, 'widget_type': 'baseswitch', 'state_inactive': 'off', 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'input_boolean.front_door_lock'}, 'entity': 'input_boolean.front_door_lock', 'state_active': 'on', 'static_icons': [], 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'input_boolean.front_door_lock'}, 'precision': 1, 'enable': 1, 'icons': {'icon_on': 'fas-sliders-h', 'icon_off': 'fas-sliders-h'}, 'fields': {'title': '', 'title2': '', 'icon': '', 'icon_style': '', 'state_text': ''}, 'title_is_friendly_name': 1, 'namespace': 'default', 'use_comma': 0, 'use_hass_icon': 1})
    
        widgets["default-switch-salt-lamp"] = new baseswitch("default-switch-salt-lamp", "", "obsidian", {'css': {'icon_style_active': 'color: #00FFFF;', 'icon_style_inactive': 'color: #888;'}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'state_text_style': 'color: #00FFFF;', 'widget_style': 'background-image: url(css/obsidian/img/obsidian_w_bg.jpg);'}, 'widget_type': 'baseswitch', 'state_inactive': 'off', 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'switch.salt_lamp'}, 'entity': 'switch.salt_lamp', 'state_active': 'on', 'static_icons': [], 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'switch.salt_lamp'}, 'precision': 1, 'enable': 1, 'icons': {'icon_on': 'fas-circle', 'icon_off': 'far-circle'}, 'fields': {'title': '', 'title2': '', 'icon': '', 'icon_style': '', 'state_text': ''}, 'title_is_friendly_name': 1, 'namespace': 'default', 'use_comma': 0, 'use_hass_icon': 1})
    
        widgets["default-light-lounge-curtain-light"] = new baselight("default-light-lounge-curtain-light", "", "obsidian", {'css': {'icon_style_active': 'color: #00FFFF;', 'icon_style_inactive': 'color: #888;'}, 'static_css': {'title_style': 'color: #fff;', 'level_style': 'color: #888;', 'state_text_style': 'color: #00FFFF;', 'widget_style': 'background-image: url(css/obsidian/img/obsidian_w_bg.jpg);', 'level_down_style': 'color: #888;', 'title2_style': 'color: #fff;', 'level_up_style': 'color: #888;', 'unit_style': 'color: #888;'}, 'widget_type': 'baselight', 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'light.lounge_curtain_light'}, 'entity': 'light.lounge_curtain_light', 'use_comma': 0, 'static_icons': {'icon_down': 'fas-minus', 'icon_up': 'fas-plus'}, 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'light.lounge_curtain_light'}, 'precision': 1, 'icons': {'icon_on': 'fas-circle', 'icon_off': 'far-circle'}, 'fields': {'icon_style': '', 'state_text': '', 'level': '', 'title2': '', 'icon': '', 'title': '', 'units': '%'}, 'title_is_friendly_name': 1, 'namespace': 'default', 'use_hass_icon': 1})
    
        widgets["default-binary-sensor-hall-motion"] = new baseswitch("default-binary-sensor-hall-motion", "", "obsidian", {'css': {'icon_style_active': 'color: #FAA916;', 'icon_style_inactive': 'color: #888;'}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'state_text_style': 'color: #00FFFF;', 'widget_style': 'background-image: url(css/obsidian/img/obsidian_w_bg.jpg);'}, 'widget_type': 'baseswitch', 'state_inactive': 'off', 'entity': 'binary_sensor.hall_motion', 'state_active': 'on', 'static_icons': [], 'precision': 1, 'icons': {'icon_on': 'fas-bullseye as-spin', 'icon_off': 'fas-minus'}, 'fields': {'title': '', 'title2': '', 'icon': '', 'icon_style': '', 'state_text': ''}, 'title_is_friendly_name': 1, 'namespace': 'default', 'use_comma': 0, 'use_hass_icon': 1})
    
        widgets["default-input-boolean-nathan-lamp-switch"] = new baseswitch("default-input-boolean-nathan-lamp-switch", "", "obsidian", {'css': {'icon_style_active': 'color: #00FFFF;', 'icon_style_inactive': 'color: #888;'}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'state_text_style': 'color: #00FFFF;', 'widget_style': 'background-image: url(css/obsidian/img/obsidian_w_bg.jpg);'}, 'widget_type': 'baseswitch', 'state_inactive': 'off', 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'input_boolean.nathan_lamp_switch'}, 'entity': 'input_boolean.nathan_lamp_switch', 'state_active': 'on', 'static_icons': [], 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'input_boolean.nathan_lamp_switch'}, 'precision': 1, 'enable': 1, 'icons': {'icon_on': 'fas-sliders-h', 'icon_off': 'fas-sliders-h'}, 'fields': {'title': '', 'title2': '', 'icon': '', 'icon_style': '', 'state_text': ''}, 'title_is_friendly_name': 1, 'namespace': 'default', 'use_comma': 0, 'use_hass_icon': 1})
    
        widgets["default-switch-bar-light"] = new baseswitch("default-switch-bar-light", "", "obsidian", {'css': {'icon_style_active': 'color: #00FFFF;', 'icon_style_inactive': 'color: #888;'}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'state_text_style': 'color: #00FFFF;', 'widget_style': 'background-image: url(css/obsidian/img/obsidian_w_bg.jpg);'}, 'widget_type': 'baseswitch', 'state_inactive': 'off', 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'switch.bar_light'}, 'entity': 'switch.bar_light', 'state_active': 'on', 'static_icons': [], 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'switch.bar_light'}, 'precision': 1, 'enable': 1, 'icons': {'icon_on': 'fas-circle', 'icon_off': 'far-circle'}, 'fields': {'title': '', 'title2': '', 'icon': '', 'icon_style': '', 'state_text': ''}, 'title_is_friendly_name': 1, 'namespace': 'default', 'use_comma': 0, 'use_hass_icon': 1})
    
        widgets["default-switch-reading-light"] = new baseswitch("default-switch-reading-light", "", "obsidian", {'css': {'icon_style_active': 'color: #00FFFF;', 'icon_style_inactive': 'color: #888;'}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'state_text_style': 'color: #00FFFF;', 'widget_style': 'background-image: url(css/obsidian/img/obsidian_w_bg.jpg);'}, 'widget_type': 'baseswitch', 'state_inactive': 'off', 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'switch.reading_light'}, 'entity': 'switch.reading_light', 'state_active': 'on', 'static_icons': [], 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'switch.reading_light'}, 'precision': 1, 'enable': 1, 'icons': {'icon_on': 'fas-circle', 'icon_off': 'far-circle'}, 'fields': {'title': '', 'title2': '', 'icon': '', 'icon_style': '', 'state_text': ''}, 'title_is_friendly_name': 1, 'namespace': 'default', 'use_comma': 0, 'use_hass_icon': 1})
    
        widgets["default-switch-christmas-tree"] = new baseswitch("default-switch-christmas-tree", "", "obsidian", {'css': {'icon_style_active': 'color: #00FFFF;', 'icon_style_inactive': 'color: #888;'}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'state_text_style': 'color: #00FFFF;', 'widget_style': 'background-image: url(css/obsidian/img/obsidian_w_bg.jpg);'}, 'widget_type': 'baseswitch', 'state_inactive': 'off', 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'switch.christmas_tree'}, 'entity': 'switch.christmas_tree', 'state_active': 'on', 'static_icons': [], 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'switch.christmas_tree'}, 'precision': 1, 'enable': 1, 'icons': {'icon_on': 'fas-circle', 'icon_off': 'far-circle'}, 'fields': {'title': '', 'title2': '', 'icon': '', 'icon_style': '', 'state_text': ''}, 'title_is_friendly_name': 1, 'namespace': 'default', 'use_comma': 0, 'use_hass_icon': 1})
    
        widgets["default-switch-workshop-power"] = new baseswitch("default-switch-workshop-power", "", "obsidian", {'css': {'icon_style_active': 'color: #00FFFF;', 'icon_style_inactive': 'color: #888;'}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'state_text_style': 'color: #00FFFF;', 'widget_style': 'background-image: url(css/obsidian/img/obsidian_w_bg.jpg);'}, 'widget_type': 'baseswitch', 'state_inactive': 'off', 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'switch.workshop_power'}, 'entity': 'switch.workshop_power', 'state_active': 'on', 'static_icons': [], 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'switch.workshop_power'}, 'precision': 1, 'enable': 1, 'icons': {'icon_on': 'fas-circle', 'icon_off': 'far-circle'}, 'fields': {'title': '', 'title2': '', 'icon': '', 'icon_style': '', 'state_text': ''}, 'title_is_friendly_name': 1, 'namespace': 'default', 'use_comma': 0, 'use_hass_icon': 1})
    
        widgets["default-reload"] = new basejavascript("default-reload", "", "obsidian", {'css': {'icon_active_style': 'color: #00FFFF;', 'icon_inactive_style': 'color: #fff;'}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'widget_style': 'background-image: url(css/obsidian/img/obsidian_w_bg.jpg);'}, 'widget_type': 'basejavascript', 'fields': {'title': 'Reload', 'title2': '', 'icon': '', 'icon_style': ''}, 'use_comma': 0, 'static_icons': [], 'icon_active': 'fa-refresh', 'icons': {'icon_active': 'fa-refresh', 'icon_inactive': 'fa-refresh'}, 'command': 'location.reload(true)', 'namespace': 'default', 'icon_inactive': 'fa-refresh', 'use_hass_icon': 1, 'precision': 1})
    

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