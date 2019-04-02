#'payload':['topic','state','retain']

d = { 'D3276E':['Hall_Motion','ON','false'],
      'BC3E0A':['Back_Door','OFF','true'],
      'BC3E0E':['Back_Door','ON','true'],
      '30D8A0':['sensor3','ON','false'],
      '86CC0B':['Power C', 'ON', 'true'],
      '86CC0A':['Power C', 'OFF', 'true']
    }

p = data.get('payload')

if p is not None:
  if p in d.keys():
    service_data = {'topic':'home/{}'.format(d[p][0]), 'payload':'{}'.format(d[p][1]), 'qos':0, 'retain':'{}'.format(d[p][2])}
  else:
    service_data = {'topic':'home/unknown', 'payload':'{}'.format(p), 'qos':0, 'retain':'false'}
    logger.warning('<rfbridge_demux> Received unknown RF command: {}'.format(p))
  hass.services.call('mqtt', 'publish', service_data, False)