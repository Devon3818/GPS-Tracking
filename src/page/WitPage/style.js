import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'WitPage': {
    'paddingBottom': [{ 'unit': 'rem', 'value': 2 }]
  },
  'WitPage nav': {
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
  'WitPage nav span': {
    'flex': '1',
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center'
  },
  'WitPage md-swiper': {
    'height': [{ 'unit': 'rem', 'value': 6 }]
  },
  'WitPage banner-item': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }]
  },
  'WitPage md-swiper-item a': {
    'display': 'block',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }]
  },
  'WitPage md-swiper-item img': {
    'display': 'block',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }]
  },
  'WitPage contain item': {
    'display': 'block',
    'padding': [{ 'unit': 'rem', 'value': 0.4 }, { 'unit': 'rem', 'value': 0.4 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'rem', 'value': 0.4 }],
    'background': '#fff',
    'marginBottom': [{ 'unit': 'rem', 'value': 0.4 }]
  },
  'WitPage contain item top': {
    'fontSize': [{ 'unit': 'rem', 'value': 0.4 }],
    'lineHeight': [{ 'unit': 'rem', 'value': 1 }],
    'marginBottom': [{ 'unit': 'rem', 'value': 0.2 }]
  },
  'WitPage contain item top uimg': {
    'width': [{ 'unit': 'rem', 'value': 1 }],
    'height': [{ 'unit': 'rem', 'value': 1 }],
    'borderRadius': '100%',
    'marginRight': [{ 'unit': 'rem', 'value': 0.4 }]
  },
  'WitPage contain item top price': {
    'color': '#23abac'
  },
  'WitPage contain item img-wrap': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'marginBottom': [{ 'unit': 'rem', 'value': 0.2 }]
  },
  'WitPage contain item img-wrap li': {
    'width': [{ 'unit': 'rem', 'value': 2 }],
    'marginRight': [{ 'unit': 'rem', 'value': 0.2 }],
    'height': [{ 'unit': 'rem', 'value': 2 }],
    'float': 'left'
  },
  'WitPage contain item text': {
    'lineHeight': [{ 'unit': 'rem', 'value': 0.8 }],
    'color': '#666',
    'paddingBottom': [{ 'unit': 'rem', 'value': 0.4 }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ededed' }]
  },
  'WitPage contain item aply': {
    'padding': [{ 'unit': 'rem', 'value': 0.2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'px', 'value': 0 }],
    'color': '#999'
  },
  'WitPage contain item aply address': {
    'marginRight': [{ 'unit': 'rem', 'value': 0.4 }],
    'lineHeight': [{ 'unit': 'rem', 'value': 0.8 }]
  },
  'WitPage contain item aply span': {
    'position': 'relative',
    'top': [{ 'unit': 'rem', 'value': 0.15 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.3 }],
    'background': '#ededed',
    'padding': [{ 'unit': 'rem', 'value': 0.15 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'rem', 'value': 0.15 }, { 'unit': 'rem', 'value': 0.2 }],
    'color': '#999'
  },
  'WitPage contain item aply btn': {
    'width': [{ 'unit': 'rem', 'value': 2 }],
    'lineHeight': [{ 'unit': 'rem', 'value': 0.8 }],
    'background': '#23abac',
    'textAlign': 'center',
    'borderRadius': '0.2rem',
    'fontSize': [{ 'unit': 'rem', 'value': 0.35 }],
    'color': '#fff'
  }
});
