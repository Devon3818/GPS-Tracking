import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'WitFirePage': {
    'paddingBottom': [{ 'unit': 'rem', 'value': 2 }]
  },
  'WitFirePage nav': {
    'display': 'flex',
    'zIndex': '10',
    'background': '#fff',
    'height': [{ 'unit': 'rem', 'value': 1.2 }],
    'position': 'fixed',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ededed' }]
  },
  'WitFirePage nav span': {
    'flex': '1',
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center'
  },
  'WitFirePage md-swiper': {
    'height': [{ 'unit': 'rem', 'value': 5 }]
  },
  'WitFirePage banner-item': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }]
  },
  'WitFirePage md-swiper-item a': {
    'display': 'block',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }]
  },
  'WitFirePage md-swiper-item img': {
    'display': 'block',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }]
  },
  'WitFirePage item': {
    'display': 'block',
    'background': '#fff',
    'padding': [{ 'unit': 'rem', 'value': 0.4 }, { 'unit': 'rem', 'value': 0.4 }, { 'unit': 'rem', 'value': 0.4 }, { 'unit': 'rem', 'value': 0.4 }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ededed' }]
  },
  'WitFirePage item title': {
    'marginBottom': [{ 'unit': 'rem', 'value': 0.4 }],
    'fontWeight': '700'
  },
  'WitFirePage item address': {
    'fontSize': [{ 'unit': 'rem', 'value': 0.35 }]
  }
});
