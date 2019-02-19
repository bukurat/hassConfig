$(function(){ //DOM Ready

    function navigate(url)
    {
        window.location.href = url;
    }

    $(document).attr("title", "Computer dashboard");
    content_width = (120 + 5) * 10 + 5
    $('.gridster').width(content_width)
    $(".gridster ul").gridster({
        widget_margins: [5, 5],
        widget_base_dimensions: [120, 120],
        avoid_overlapped_widgets: true,
        max_rows: 15,
        max_size_x: 10,
        shift_widgets_up: false
    }).data('gridster').disable();
    
    // Add Widgets

    var gridster = $(".gridster ul").gridster().data('gridster');
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseclock-default-clock" id="default-clock"><h1 class="date"data-bind="text: date, attr: {style: date_style}"></h1><h2 class="time" data-bind="text: time, attr: {style: time_style}"></h2></div></li>', 2, 1, 1, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-dht-sensor-temperature" id="default-dht-sensor-temperature"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit" data-bind="attr:{ style: container_style}"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 3, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-dht-sensor-humidity" id="default-dht-sensor-humidity"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit" data-bind="attr:{ style: container_style}"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 4, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-sensor-load-1m" id="default-sensor-load-1m"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit" data-bind="attr:{ style: container_style}"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 5, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-sensor-load-15m" id="default-sensor-load-15m"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit" data-bind="attr:{ style: container_style}"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 6, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-cpu-temp" id="default-cpu-temp"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit" data-bind="attr:{ style: container_style}"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 7, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-sensor-disk-use-percent" id="default-sensor-disk-use-percent"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit" data-bind="attr:{ style: container_style}"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 8, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-sensor-memory-use-percent" id="default-sensor-memory-use-percent"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit" data-bind="attr:{ style: container_style}"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 9, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-sensor-disk-free" id="default-sensor-disk-free"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit" data-bind="attr:{ style: container_style}"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 10, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-input-boolean-front-door-lock" id="default-input-boolean-front-door-lock"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 3, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baselight-default-light-salt-lamp" id="default-light-salt-lamp"><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><span class="toggle-area" id="switch"></span><p class="state_text" data-bind="text: state_text, attr:{style: state_text_style}"></p><div class="levelunit"><p class="level" data-bind="text: level, attr:{style: level_style}"></p><p class="unit" data-bind="html: units, attr:{style: unit_style}"></p></div><p class="secondary-icon minus"><i data-bind="attr: {class: icon_down, style: level_down_style}" id="level-down"></i></p><p class="secondary-icon plus"><i data-bind="attr: {class: icon_up, style: level_up_style}" id="level-up"></i></p></div></li>', 1, 1, 4, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baselight-default-light-lounge-curtain-light" id="default-light-lounge-curtain-light"><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><span class="toggle-area" id="switch"></span><p class="state_text" data-bind="text: state_text, attr:{style: state_text_style}"></p><div class="levelunit"><p class="level" data-bind="text: level, attr:{style: level_style}"></p><p class="unit" data-bind="html: units, attr:{style: unit_style}"></p></div><p class="secondary-icon minus"><i data-bind="attr: {class: icon_down, style: level_down_style}" id="level-down"></i></p><p class="secondary-icon plus"><i data-bind="attr: {class: icon_up, style: level_up_style}" id="level-up"></i></p></div></li>', 1, 1, 5, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-input-boolean-nathan-lamp-switch" id="default-input-boolean-nathan-lamp-switch"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 1, 3)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baselight-default-bar-light" id="default-bar-light"><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><span class="toggle-area" id="switch"></span><p class="state_text" data-bind="text: state_text, attr:{style: state_text_style}"></p><div class="levelunit"><p class="level" data-bind="text: level, attr:{style: level_style}"></p><p class="unit" data-bind="html: units, attr:{style: unit_style}"></p></div><p class="secondary-icon minus"><i data-bind="attr: {class: icon_down, style: level_down_style}" id="level-down"></i></p><p class="secondary-icon plus"><i data-bind="attr: {class: icon_up, style: level_up_style}" id="level-up"></i></p></div></li>', 1, 1, 2, 3)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baselight-default-light-reading-light" id="default-light-reading-light"><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><span class="toggle-area" id="switch"></span><p class="state_text" data-bind="text: state_text, attr:{style: state_text_style}"></p><div class="levelunit"><p class="level" data-bind="text: level, attr:{style: level_style}"></p><p class="unit" data-bind="html: units, attr:{style: unit_style}"></p></div><p class="secondary-icon minus"><i data-bind="attr: {class: icon_down, style: level_down_style}" id="level-down"></i></p><p class="secondary-icon plus"><i data-bind="attr: {class: icon_up, style: level_up_style}" id="level-up"></i></p></div></li>', 1, 1, 3, 3)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-switch-workshop-power" id="default-switch-workshop-power"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 4, 3)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basejavascript-default-reload" id="default-reload"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 1, 1, 1, 7)
    
    
    
    var widgets = {}
    // Initialize Widgets
    
        widgets["default-clock"] = new baseclock("default-clock", "", "default", {'time_style': 'color: yellow;', 'css': {}, 'static_icons': [], 'precision': 1, 'namespace': 'default', 'widget_style': 'font-size: 200%;background:blue;', 'use_hass_icon': 1, 'static_css': {'time_style': 'color: yellow;', 'widget_style': 'font-size: 200%;background-color: #444;background:blue;', 'date_style': 'color: red;'}, 'use_comma': 0, 'fields': {'date': '', 'time': ''}, 'date_style': 'color: red;', 'widget_type': 'baseclock', 'icons': []})
    
        widgets["default-dht-sensor-temperature"] = new basedisplay("default-dht-sensor-temperature", "", "default", {'fields': {'title': 'Computer Room Temperature', 'title2': '', 'state_text': '', 'value': '', 'unit': ''}, 'static_icons': [], 'precision': 1, 'sub_entity': '', 'namespace': 'default', 'sub_entity_to_entity_attribute': '', 'use_hass_icon': 1, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'container_style': '', 'state_text_style': 'font-size: 100%;color: #fff;', 'widget_style': 'background-color: #444;'}, 'use_comma': 0, 'css': {'value_style': 'font-size: 250%;color: #00aaff;', 'unit_style': 'font-size: 100%;color: #00aaff;', 'text_style': 'font-size: 100%;color: #fff;'}, 'widget_type': 'basedisplay', 'icons': [], 'entity': 'sensor.dht_sensor_temperature', 'entity_to_sub_entity_attribute': ''})
    
        widgets["default-dht-sensor-humidity"] = new basedisplay("default-dht-sensor-humidity", "", "default", {'fields': {'title': 'Computer Room Humidity', 'title2': '', 'state_text': '', 'value': '', 'unit': ''}, 'static_icons': [], 'precision': 1, 'sub_entity': '', 'namespace': 'default', 'sub_entity_to_entity_attribute': '', 'use_hass_icon': 1, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'container_style': '', 'state_text_style': 'font-size: 100%;color: #fff;', 'widget_style': 'background-color: #444;'}, 'use_comma': 0, 'css': {'value_style': 'font-size: 250%;color: #00aaff;', 'unit_style': 'font-size: 100%;color: #00aaff;', 'text_style': 'font-size: 100%;color: #fff;'}, 'widget_type': 'basedisplay', 'icons': [], 'entity': 'sensor.dht_sensor_humidity', 'entity_to_sub_entity_attribute': ''})
    
        widgets["default-sensor-load-1m"] = new basedisplay("default-sensor-load-1m", "", "default", {'fields': {'title': '', 'title2': '', 'state_text': '', 'value': '', 'unit': ''}, 'static_icons': [], 'precision': 1, 'sub_entity': '', 'title_is_friendly_name': 1, 'sub_entity_to_entity_attribute': '', 'use_hass_icon': 1, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'container_style': '', 'state_text_style': 'font-size: 100%;color: #fff;', 'widget_style': 'background-color: #444;'}, 'use_comma': 0, 'css': {'value_style': 'font-size: 250%;color: #00aaff;', 'unit_style': 'font-size: 100%;color: #00aaff;', 'text_style': 'font-size: 100%;color: #fff;'}, 'widget_type': 'basedisplay', 'entity': 'sensor.load_1m', 'icons': [], 'namespace': 'default', 'entity_to_sub_entity_attribute': ''})
    
        widgets["default-sensor-load-15m"] = new basedisplay("default-sensor-load-15m", "", "default", {'fields': {'title': '', 'title2': '', 'state_text': '', 'value': '', 'unit': ''}, 'static_icons': [], 'precision': 1, 'sub_entity': '', 'title_is_friendly_name': 1, 'sub_entity_to_entity_attribute': '', 'use_hass_icon': 1, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'container_style': '', 'state_text_style': 'font-size: 100%;color: #fff;', 'widget_style': 'background-color: #444;'}, 'use_comma': 0, 'css': {'value_style': 'font-size: 250%;color: #00aaff;', 'unit_style': 'font-size: 100%;color: #00aaff;', 'text_style': 'font-size: 100%;color: #fff;'}, 'widget_type': 'basedisplay', 'entity': 'sensor.load_15m', 'icons': [], 'namespace': 'default', 'entity_to_sub_entity_attribute': ''})
    
        widgets["default-cpu-temp"] = new basedisplay("default-cpu-temp", "", "default", {'fields': {'title': 'CPU Temperature', 'title2': '', 'state_text': '', 'value': '', 'unit': ''}, 'static_icons': [], 'precision': 1, 'sub_entity': '', 'namespace': 'default', 'sub_entity_to_entity_attribute': '', 'use_hass_icon': 1, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'container_style': '', 'state_text_style': 'font-size: 100%;color: #fff;', 'widget_style': 'background-color: #444;'}, 'icon': 'mdi-raspberrypi', 'css': {'value_style': 'font-size: 250%;color: #00aaff;', 'unit_style': 'font-size: 100%;color: #00aaff;', 'text_style': 'font-size: 100%;color: #fff;'}, 'widget_type': 'basedisplay', 'icons': [], 'use_comma': 0, 'entity': 'sensor.cpu_temp', 'entity_to_sub_entity_attribute': ''})
    
        widgets["default-sensor-disk-use-percent"] = new basedisplay("default-sensor-disk-use-percent", "", "default", {'fields': {'title': '', 'title2': '', 'state_text': '', 'value': '', 'unit': ''}, 'static_icons': [], 'precision': 1, 'sub_entity': '', 'title_is_friendly_name': 1, 'sub_entity_to_entity_attribute': '', 'use_hass_icon': 1, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'container_style': '', 'state_text_style': 'font-size: 100%;color: #fff;', 'widget_style': 'background-color: #444;'}, 'use_comma': 0, 'css': {'value_style': 'font-size: 250%;color: #00aaff;', 'unit_style': 'font-size: 100%;color: #00aaff;', 'text_style': 'font-size: 100%;color: #fff;'}, 'widget_type': 'basedisplay', 'entity': 'sensor.disk_use_percent', 'icons': [], 'namespace': 'default', 'entity_to_sub_entity_attribute': ''})
    
        widgets["default-sensor-memory-use-percent"] = new basedisplay("default-sensor-memory-use-percent", "", "default", {'fields': {'title': '', 'title2': '', 'state_text': '', 'value': '', 'unit': ''}, 'static_icons': [], 'precision': 1, 'sub_entity': '', 'title_is_friendly_name': 1, 'sub_entity_to_entity_attribute': '', 'use_hass_icon': 1, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'container_style': '', 'state_text_style': 'font-size: 100%;color: #fff;', 'widget_style': 'background-color: #444;'}, 'use_comma': 0, 'css': {'value_style': 'font-size: 250%;color: #00aaff;', 'unit_style': 'font-size: 100%;color: #00aaff;', 'text_style': 'font-size: 100%;color: #fff;'}, 'widget_type': 'basedisplay', 'entity': 'sensor.memory_use_percent', 'icons': [], 'namespace': 'default', 'entity_to_sub_entity_attribute': ''})
    
        widgets["default-sensor-disk-free"] = new basedisplay("default-sensor-disk-free", "", "default", {'fields': {'title': '', 'title2': '', 'state_text': '', 'value': '', 'unit': ''}, 'static_icons': [], 'precision': 1, 'sub_entity': '', 'title_is_friendly_name': 1, 'sub_entity_to_entity_attribute': '', 'use_hass_icon': 1, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'container_style': '', 'state_text_style': 'font-size: 100%;color: #fff;', 'widget_style': 'background-color: #444;'}, 'use_comma': 0, 'css': {'value_style': 'font-size: 250%;color: #00aaff;', 'unit_style': 'font-size: 100%;color: #00aaff;', 'text_style': 'font-size: 100%;color: #fff;'}, 'widget_type': 'basedisplay', 'entity': 'sensor.disk_free', 'icons': [], 'namespace': 'default', 'entity_to_sub_entity_attribute': ''})
    
        widgets["default-input-boolean-front-door-lock"] = new baseswitch("default-input-boolean-front-door-lock", "", "default", {'fields': {'title': '', 'title2': '', 'icon': '', 'state_text': '', 'icon_style': ''}, 'static_icons': [], 'enable': 1, 'precision': 1, 'post_service_active': {'entity_id': 'input_boolean.front_door_lock', 'service': 'homeassistant/turn_on'}, 'title_is_friendly_name': 1, 'post_service_inactive': {'entity_id': 'input_boolean.front_door_lock', 'service': 'homeassistant/turn_off'}, 'use_hass_icon': 1, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'widget_style': 'background-color: #444;'}, 'use_comma': 0, 'css': {'icon_style_active': 'color: #aaff00;', 'icon_style_inactive': 'color: #888;'}, 'widget_type': 'baseswitch', 'entity': 'input_boolean.front_door_lock', 'state_active': 'on', 'state_inactive': 'off', 'namespace': 'default', 'icons': {'icon_on': 'fas-sliders-h', 'icon_off': 'fas-sliders-h'}})
    
        widgets["default-light-salt-lamp"] = new baselight("default-light-salt-lamp", "", "default", {'fields': {'title2': '', 'icon': '', 'state_text': '', 'icon_style': '', 'level': '', 'units': '%', 'title': ''}, 'static_icons': {'icon_down': 'fas-minus', 'icon_up': 'fas-plus'}, 'precision': 1, 'post_service_active': {'entity_id': 'light.salt_lamp', 'service': 'homeassistant/turn_on'}, 'title_is_friendly_name': 1, 'post_service_inactive': {'entity_id': 'light.salt_lamp', 'service': 'homeassistant/turn_off'}, 'use_hass_icon': 1, 'static_css': {'title2_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'level_up_style': 'color: #888;', 'widget_style': 'background-color: #444;', 'title_style': 'color: #fff;', 'unit_style': 'color: #fff;', 'level_down_style': 'color: #888;', 'level_style': 'color: #fff;'}, 'use_comma': 0, 'css': {'icon_style_active': 'color: #aaff00;', 'icon_style_inactive': 'color: #888;'}, 'widget_type': 'baselight', 'entity': 'light.salt_lamp', 'namespace': 'default', 'icons': {'icon_on': 'fas-circle', 'icon_off': 'far-circle'}})
    
        widgets["default-light-lounge-curtain-light"] = new baselight("default-light-lounge-curtain-light", "", "default", {'fields': {'title2': '', 'icon': '', 'state_text': '', 'icon_style': '', 'level': '', 'units': '%', 'title': ''}, 'static_icons': {'icon_down': 'fas-minus', 'icon_up': 'fas-plus'}, 'precision': 1, 'post_service_active': {'entity_id': 'light.lounge_curtain_light', 'service': 'homeassistant/turn_on'}, 'title_is_friendly_name': 1, 'post_service_inactive': {'entity_id': 'light.lounge_curtain_light', 'service': 'homeassistant/turn_off'}, 'use_hass_icon': 1, 'static_css': {'title2_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'level_up_style': 'color: #888;', 'widget_style': 'background-color: #444;', 'title_style': 'color: #fff;', 'unit_style': 'color: #fff;', 'level_down_style': 'color: #888;', 'level_style': 'color: #fff;'}, 'use_comma': 0, 'css': {'icon_style_active': 'color: #aaff00;', 'icon_style_inactive': 'color: #888;'}, 'widget_type': 'baselight', 'entity': 'light.lounge_curtain_light', 'namespace': 'default', 'icons': {'icon_on': 'fas-circle', 'icon_off': 'far-circle'}})
    
        widgets["default-input-boolean-nathan-lamp-switch"] = new baseswitch("default-input-boolean-nathan-lamp-switch", "", "default", {'fields': {'title': '', 'title2': '', 'icon': '', 'state_text': '', 'icon_style': ''}, 'static_icons': [], 'enable': 1, 'precision': 1, 'post_service_active': {'entity_id': 'input_boolean.nathan_lamp_switch', 'service': 'homeassistant/turn_on'}, 'title_is_friendly_name': 1, 'post_service_inactive': {'entity_id': 'input_boolean.nathan_lamp_switch', 'service': 'homeassistant/turn_off'}, 'use_hass_icon': 1, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'widget_style': 'background-color: #444;'}, 'use_comma': 0, 'css': {'icon_style_active': 'color: #aaff00;', 'icon_style_inactive': 'color: #888;'}, 'widget_type': 'baseswitch', 'entity': 'input_boolean.nathan_lamp_switch', 'state_active': 'on', 'state_inactive': 'off', 'namespace': 'default', 'icons': {'icon_on': 'fas-sliders-h', 'icon_off': 'fas-sliders-h'}})
    
        widgets["default-bar-light"] = new baselight("default-bar-light", "", "default", {'fields': {'title2': '', 'icon': 'mdi-white-balance-iridescent', 'state_text': '', 'icon_style': '', 'level': '', 'units': '%', 'title': 'Bar Light'}, 'static_icons': {'icon_down': 'fas-minus', 'icon_up': 'fas-plus'}, 'precision': 1, 'post_service_active': {'entity_id': 'light.bar_light', 'service': 'homeassistant/turn_on'}, 'namespace': 'default', 'post_service_inactive': {'entity_id': 'light.bar_light', 'service': 'homeassistant/turn_off'}, 'use_hass_icon': 1, 'static_css': {'title2_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'level_up_style': 'color: #888;', 'widget_style': 'background-color: #444;', 'title_style': 'color: #fff;', 'unit_style': 'color: #fff;', 'level_down_style': 'color: #888;', 'level_style': 'color: #fff;'}, 'icon': 'mdi-white-balance-iridescent', 'css': {'icon_style_active': 'color: #aaff00;', 'icon_style_inactive': 'color: #888;'}, 'widget_type': 'baselight', 'use_comma': 0, 'entity': 'light.bar_light', 'icons': {'icon_on': 'fas-circle', 'icon_off': 'far-circle'}})
    
        widgets["default-light-reading-light"] = new baselight("default-light-reading-light", "", "default", {'fields': {'title2': '', 'icon': '', 'state_text': '', 'icon_style': '', 'level': '', 'units': '%', 'title': ''}, 'static_icons': {'icon_down': 'fas-minus', 'icon_up': 'fas-plus'}, 'precision': 1, 'post_service_active': {'entity_id': 'light.reading_light', 'service': 'homeassistant/turn_on'}, 'title_is_friendly_name': 1, 'post_service_inactive': {'entity_id': 'light.reading_light', 'service': 'homeassistant/turn_off'}, 'use_hass_icon': 1, 'static_css': {'title2_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'level_up_style': 'color: #888;', 'widget_style': 'background-color: #444;', 'title_style': 'color: #fff;', 'unit_style': 'color: #fff;', 'level_down_style': 'color: #888;', 'level_style': 'color: #fff;'}, 'use_comma': 0, 'css': {'icon_style_active': 'color: #aaff00;', 'icon_style_inactive': 'color: #888;'}, 'widget_type': 'baselight', 'entity': 'light.reading_light', 'namespace': 'default', 'icons': {'icon_on': 'fas-circle', 'icon_off': 'far-circle'}})
    
        widgets["default-switch-workshop-power"] = new baseswitch("default-switch-workshop-power", "", "default", {'fields': {'title': '', 'title2': '', 'icon': '', 'state_text': '', 'icon_style': ''}, 'static_icons': [], 'enable': 1, 'precision': 1, 'post_service_active': {'entity_id': 'switch.workshop_power', 'service': 'homeassistant/turn_on'}, 'title_is_friendly_name': 1, 'post_service_inactive': {'entity_id': 'switch.workshop_power', 'service': 'homeassistant/turn_off'}, 'use_hass_icon': 1, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'widget_style': 'background-color: #444;'}, 'use_comma': 0, 'css': {'icon_style_active': 'color: #aaff00;', 'icon_style_inactive': 'color: #888;'}, 'widget_type': 'baseswitch', 'entity': 'switch.workshop_power', 'state_active': 'on', 'state_inactive': 'off', 'namespace': 'default', 'icons': {'icon_on': 'fas-circle', 'icon_off': 'far-circle'}})
    
        widgets["default-reload"] = new basejavascript("default-reload", "", "default", {'fields': {'title2': '', 'icon': '', 'title': 'Reload', 'icon_style': ''}, 'static_icons': [], 'precision': 1, 'icon_inactive': 'fa-refresh', 'namespace': 'default', 'use_hass_icon': 1, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'widget_style': 'background-color: #444;'}, 'use_comma': 0, 'icon_active': 'fa-refresh', 'icons': {'icon_inactive': 'fa-refresh', 'icon_active': 'fa-refresh'}, 'widget_type': 'basejavascript', 'command': 'location.reload(true)', 'css': {'icon_inactive_style': 'color: #fff;', 'icon_active_style': 'color: #fff;'}})
    

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
    ha_status(stream_url, "Computer dashboard", widgets);

});