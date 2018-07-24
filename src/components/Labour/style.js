import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'Labour nav': {
    'position': 'fixed',
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'rem', 'value': 1.4 }],
    'padding': [{ 'unit': 'rem', 'value': 0.2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'px', 'value': 0 }],
    'background': '#fff',
    'boxShadow': [{ 'unit': 'px', 'value': -4 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(7, 17, 27, 0.1)' }],
    'display': 'flex'
  },
  'Labour nav tab': {
    'fontSize': [{ 'unit': 'rem', 'value': 0.35 }],
    'flex': '1',
    'textAlign': 'center',
    'color': '#333333'
  },
  'Labour nav tab i': {
    'fontSize': [{ 'unit': 'rem', 'value': 0.5 }]
  },
  'Labour nav on': {
    'color': '#23abac'
  }
});
