import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'CenterPage top': {
    'lineHeight': [{ 'unit': 'rem', 'value': 1.4 }],
    'background': '#23abac',
    'color': '#fff',
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.5 }]
  },
  'CenterPage top img': {
    'width': [{ 'unit': 'rem', 'value': 1.4 }],
    'height': [{ 'unit': 'rem', 'value': 1.4 }],
    'borderRadius': '100%',
    'marginRight': [{ 'unit': 'rem', 'value': 0.4 }]
  },
  'CenterPage nav': {
    'background': '#fff',
    'display': 'flex',
    'marginBottom': [{ 'unit': 'rem', 'value': 0.4 }]
  },
  'CenterPage nav item': {
    'padding': [{ 'unit': 'rem', 'value': 0.4 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.4 }, { 'unit': 'px', 'value': 0 }],
    'flex': '1',
    'display': 'flex',
    'alignItems': 'center',
    'justifyContent': 'center',
    'flexDirection': 'column'
  },
  'CenterPage nav item i': {
    'fontSize': [{ 'unit': 'rem', 'value': 0.5 }],
    'marginBottom': [{ 'unit': 'rem', 'value': 0.2 }]
  },
  'CenterPage order': {
    'padding': [{ 'unit': 'rem', 'value': 0.4 }, { 'unit': 'rem', 'value': 0.4 }, { 'unit': 'rem', 'value': 0.4 }, { 'unit': 'rem', 'value': 0.4 }],
    'background': '#fff'
  },
  'CenterPage order title': {
    'paddingBottom': [{ 'unit': 'rem', 'value': 0.4 }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ededed' }]
  }
});
