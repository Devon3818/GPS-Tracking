import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'HealthShowPage md-swiper': {
    'height': [{ 'unit': 'rem', 'value': 7 }]
  },
  'HealthShowPage banner-item': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }]
  },
  'HealthShowPage md-swiper-item a': {
    'display': 'block',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }]
  },
  'HealthShowPage md-swiper-item img': {
    'display': 'block',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }]
  },
  'HealthShowPage top': {
    'background': '#fff',
    'padding': [{ 'unit': 'rem', 'value': 0.4 }, { 'unit': 'rem', 'value': 0.4 }, { 'unit': 'rem', 'value': 0.4 }, { 'unit': 'rem', 'value': 0.4 }],
    'marginBottom': [{ 'unit': 'rem', 'value': 0.4 }]
  },
  'HealthShowPage top title': {
    'fontSize': [{ 'unit': 'rem', 'value': 0.4 }],
    'fontWeight': '700',
    'lineHeight': [{ 'unit': 'rem', 'value': 0.6 }],
    'marginBottom': [{ 'unit': 'rem', 'value': 0.8 }]
  },
  'HealthShowPage top text': {
    'color': '#999'
  },
  'HealthShowPage contain': {
    'padding': [{ 'unit': 'rem', 'value': 0.4 }, { 'unit': 'rem', 'value': 0.4 }, { 'unit': 'rem', 'value': 0.4 }, { 'unit': 'rem', 'value': 0.4 }],
    'background': '#fff'
  },
  'HealthShowPage contain tab-nav': {
    'display': 'flex',
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ededed' }]
  },
  'HealthShowPage contain tab-nav span': {
    'position': 'relative',
    'flex': '1',
    'paddingBottom': [{ 'unit': 'rem', 'value': 0.4 }],
    'textAlign': 'center'
  },
  'HealthShowPage contain tab-nav on': {
    'color': '#4f9ead'
  },
  'HealthShowPage contain tab-nav on::after': {
    'content': '''',
    'display': 'block',
    'width': [{ 'unit': 'rem', 'value': 1.5 }],
    'height': [{ 'unit': 'px', 'value': 4 }],
    'background': '#4f9ead',
    'position': 'absolute',
    'bottom': [{ 'unit': 'rem', 'value': 0.2 }],
    'left': [{ 'unit': 'rem', 'value': 1.65 }]
  },
  'HealthShowPage contain tabs': {
    'minHeight': [{ 'unit': 'rem', 'value': 7 }],
    'paddingTop': [{ 'unit': 'rem', 'value': 0.4 }],
    'lineHeight': [{ 'unit': 'rem', 'value': 0.6 }],
    'marginBottom': [{ 'unit': 'rem', 'value': 1.5 }]
  },
  'HealthShowPage buy': {
    'boxShadow': [{ 'unit': 'px', 'value': -4 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(7, 17, 27, 0.1)' }],
    'paddingLeft': [{ 'unit': 'rem', 'value': 0.4 }],
    'position': 'fixed',
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'rem', 'value': 1.4 }],
    'lineHeight': [{ 'unit': 'rem', 'value': 1.4 }],
    'background': '#fff'
  },
  'HealthShowPage buy price span': {
    'color': '#ee7b30'
  },
  'HealthShowPage buy tobuy': {
    'background': '#ee7b30',
    'width': [{ 'unit': 'rem', 'value': 3.5 }],
    'textAlign': 'center',
    'color': '#fff'
  }
});
