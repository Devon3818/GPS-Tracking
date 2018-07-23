import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'HealthPage': {
    'paddingBottom': [{ 'unit': 'rem', 'value': 2 }]
  },
  'HealthPage nav': {
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
  'HealthPage nav span': {
    'flex': '1',
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center'
  },
  'HealthPage md-swiper': {
    'height': [{ 'unit': 'rem', 'value': 5 }]
  },
  'HealthPage banner-item': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }]
  },
  'HealthPage md-swiper-item a': {
    'display': 'block',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }]
  },
  'HealthPage md-swiper-item img': {
    'display': 'block',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }]
  },
  'HealthPage contain item': {
    'display': 'block',
    'background': '#fff',
    'padding': [{ 'unit': 'rem', 'value': 0.4 }, { 'unit': 'rem', 'value': 0.4 }, { 'unit': 'rem', 'value': 0.4 }, { 'unit': 'rem', 'value': 0.4 }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ededed' }]
  },
  'HealthPage contain item title': {
    'fontSize': [{ 'unit': 'rem', 'value': 0.4 }],
    'fontWeight': '700',
    'marginBottom': [{ 'unit': 'rem', 'value': 0.4 }]
  },
  'HealthPage contain item name': {
    'color': '#999'
  },
  'HealthPage contain item tag': {
    'fontSize': [{ 'unit': 'rem', 'value': 0.3 }],
    'color': '#4f9ead',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#4f9ead' }],
    'borderRadius': '0.2rem',
    'padding': [{ 'unit': 'rem', 'value': 0.1 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'rem', 'value': 0.1 }, { 'unit': 'rem', 'value': 0.2 }]
  }
});
