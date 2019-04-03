#'payload':['topic','state','retain']

d = { 'D3276E':['Hall_Motion','ON','false'],
      'BC3E0A':['Back_Door','ON','true'], #Closed
      'BC3E0E':['Back_Door','OFF','true'],
      '30D8A0':['sensor3','ON','false'],
      '86CC0F':['Power-A', 'ON', 'true'],
      '86CC0E':['Power_A', 'OFF', 'true'],
      '86CC0D':['Power_B', 'ON', 'true'],
      '86CC0C':['Power_B', 'OFF', 'true'],
      '86CC0B':['Power_C', 'ON', 'true'],
      '86CC0A':['Power_C', 'OFF', 'true'],
      '0844E0':['Push_Button','OFF','false'],
      '0844E1':['Push_Button','ON','false'],
      '00000F':['NPow1','ON','true'],
      '00000E':['NPow1','OFF','true'],
      '000007':['NPow2', 'ON','true'],
      '000006':['NPow2','OFF','true'],
      '00000B':['NPow3','ON','true'],
      '00000A':['NPow3','OFF','true'],
      '000003':['NP0w2','ON','true'],
      '000002':['NPow2','OFF','true'],
      '00000D':['NPall','ON', 'true'],
      '00000C':['NPall','OFF','true'],
      '84262E':['MainBed','ON','true'], # Closed
      '842627':['MainBed','OFF','true'], # Open
      '8B460A':['Office','ON','true'],
      '8B460E':['Office','OFF','true']


    }

p = data.get('payload')

if p is not None:
  if p in d.keys():
    service_data = {'topic':'home/{}'.format(d[p][0]), 'payload':'{}'.format(d[p][1]), 'qos':0, 'retain':'{}'.format(d[p][2])}
  else:
    service_data = {'topic':'home/unknown', 'payload':'{}'.format(p), 'qos':0, 'retain':'false'}
    logger.warning('<rfbridge_demux> Received unknown RF command: {}'.format(p))
  hass.services.call('mqtt', 'publish', service_data, False)