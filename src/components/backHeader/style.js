import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'backHeader header': {
    'boxSizing': 'border-box',
    'zIndex': '10',
    'position': 'fixed',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': 'rem', 'value': 1.4 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'padding': [{ 'unit': 'rem', 'value': 0.1 }, { 'unit': 'rem', 'value': 0.4 }, { 'unit': 'rem', 'value': 0.1 }, { 'unit': 'rem', 'value': 0.4 }],
    'background': '#fff',
    'BoxShadow': [{ 'unit': 'px', 'value': -4 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(7, 17, 27, 0.1)' }]
  },
  'backHeader header back': {
    'width': [{ 'unit': 'rem', 'value': 1.2 }],
    'height': [{ 'unit': 'rem', 'value': 1.2 }],
    'textAlign': 'center',
    'lineHeight': [{ 'unit': 'rem', 'value': 1.1 }]
  },
  'backHeader header back i': {
    'fontSize': [{ 'unit': 'rem', 'value': 0.6 }],
    'lineHeight': [{ 'unit': 'rem', 'value': 1.2 }]
  },
  'backHeader header aply': {
    'height': [{ 'unit': 'rem', 'value': 1.2 }],
    'width': [{ 'unit': '%H', 'value': 0.6 }]
  }
});
