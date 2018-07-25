import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'sendHousePage banner': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'rem', 'value': 6 }],
    'background': '#999',
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center',
    'overflow': 'hidden'
  },
  'sendHousePage banner #ifile': {
    'position': 'absolute',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'opacity': '0'
  },
  'sendHousePage banner upimg tip': {
    'color': '#fff'
  },
  'sendHousePage banner upimg span': {
    'display': 'block',
    'marginBottom': [{ 'unit': 'rem', 'value': 0.4 }],
    'width': [{ 'unit': 'rem', 'value': 2.5 }],
    'height': [{ 'unit': 'rem', 'value': 2.5 }],
    'lineHeight': [{ 'unit': 'rem', 'value': 2.5 }],
    'textAlign': 'center',
    'borderRadius': '100%',
    'background': '#4e9dac'
  },
  'sendHousePage banner upimg span i': {
    'color': '#fff',
    'fontSize': [{ 'unit': 'rem', 'value': 1 }]
  },
  'sendHousePage iform mb': {
    'marginBottom': [{ 'unit': 'rem', 'value': 0.4 }],
    'padding': [{ 'unit': 'rem', 'value': 0.4 }, { 'unit': 'rem', 'value': 0.4 }, { 'unit': 'rem', 'value': 0.4 }, { 'unit': 'rem', 'value': 0.4 }],
    'background': '#fff'
  },
  'sendHousePage iform inp-wrap': {
    'fontSize': [{ 'unit': 'rem', 'value': 0.4 }],
    'padding': [{ 'unit': 'rem', 'value': 0.15 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.15 }, { 'unit': 'px', 'value': 0 }],
    'lineHeight': [{ 'unit': 'rem', 'value': 1 }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ededed' }]
  },
  'sendHousePage iform inp-wrap input': {
    'outline': 'none',
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'width': [{ 'unit': '%H', 'value': 0.6 }],
    'textAlign': 'right',
    'lineHeight': [{ 'unit': 'rem', 'value': 1 }],
    'height': [{ 'unit': 'rem', 'value': 1 }]
  },
  'sendHousePage iform inp-wrap hx': {
    'width': [{ 'unit': 'rem', 'value': 3 }]
  },
  'sendHousePage iform inp-wrap hx sm-inp': {
    'width': [{ 'unit': 'rem', 'value': 1.5 }]
  },
  'sendHousePage iform inp-wrap hx input': {
    'width': [{ 'unit': '%H', 'value': 0.6 }]
  },
  'sendHousePage iform inp-wrap span icon-bixutian': {
    'color': 'red'
  },
  'sendHousePage iform inp-wrap text': {
    'marginLeft': [{ 'unit': 'rem', 'value': 0.3 }]
  },
  'sendHousePage iform houseImg': {
    'padding': [{ 'unit': 'rem', 'value': 0.4 }, { 'unit': 'rem', 'value': 0.4 }, { 'unit': 'rem', 'value': 0.4 }, { 'unit': 'rem', 'value': 0.4 }],
    'background': '#fff',
    'marginBottom': [{ 'unit': 'rem', 'value': 0.4 }]
  },
  'sendHousePage iform houseImg title': {
    'marginBottom': [{ 'unit': 'rem', 'value': 0.4 }]
  },
  'sendHousePage iform btn-send': {
    'width': [{ 'unit': '%H', 'value': 0.94 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'string', 'value': 'auto' }]
  }
});
