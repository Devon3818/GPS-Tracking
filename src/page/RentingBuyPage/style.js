import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'RentingBuyPage': {
    'paddingBottom': [{ 'unit': 'rem', 'value': 2 }]
  },
  'RentingBuyPage nav': {
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
  'RentingBuyPage nav span': {
    'flex': '1',
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center'
  },
  'RentingBuyPage #mask': {
    'position': 'fixed',
    'paddingTop': [{ 'unit': 'rem', 'value': 1.2 }],
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'background': 'rgba(0, 0, 0, 0.2)',
    'zIndex': '8'
  },
  'RentingBuyPage #mask item': {
    'background': '#fff',
    'padding': [{ 'unit': 'rem', 'value': 0.4 }, { 'unit': 'rem', 'value': 0.4 }, { 'unit': 'rem', 'value': 0.4 }, { 'unit': 'rem', 'value': 0.4 }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ededed' }]
  },
  'RentingBuyPage #mask more-wrap': {
    'background': '#fff',
    'padding': [{ 'unit': 'rem', 'value': 0.4 }, { 'unit': 'rem', 'value': 0.4 }, { 'unit': 'rem', 'value': 0.4 }, { 'unit': 'rem', 'value': 0.4 }]
  },
  'RentingBuyPage #mask more-wrap bottom': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'padding': [{ 'unit': 'rem', 'value': 0.4 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.4 }, { 'unit': 'px', 'value': 0 }],
    'marginBottom': [{ 'unit': 'rem', 'value': 0.4 }]
  },
  'RentingBuyPage #mask more-wrap bottom btn': {
    'width': [{ 'unit': '%H', 'value': 0.4 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.35 }],
    'height': [{ 'unit': 'rem', 'value': 0.8 }],
    'lineHeight': [{ 'unit': 'rem', 'value': 0.8 }],
    'textAlign': 'center',
    'background': '#55a4b0',
    'color': '#fff'
  },
  'RentingBuyPage #mask more-wrap bottom clear': {
    'background': '#999',
    'color': '#f0f0f0',
    'marginLeft': [{ 'unit': 'rem', 'value': 0.5 }]
  },
  'RentingBuyPage #mask more-wrap mwrap': {
    'marginBottom': [{ 'unit': 'rem', 'value': 0.4 }]
  },
  'RentingBuyPage #mask more-wrap mwrap active': {
    'background': '#55a4b0',
    'borderColor': '#55a4b0',
    'color': '#fff'
  },
  'RentingBuyPage #mask more-wrap mtitle': {
    'marginBottom': [{ 'unit': 'rem', 'value': 0.4 }]
  },
  'RentingBuyPage #mask more-wrap span': {
    'fontSize': [{ 'unit': 'rem', 'value': 0.35 }],
    'marginRight': [{ 'unit': 'rem', 'value': 0.2 }],
    'marginBottom': [{ 'unit': 'rem', 'value': 0.2 }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ededed' }],
    'padding': [{ 'unit': 'rem', 'value': 0.1 }, { 'unit': 'rem', 'value': 0.3 }, { 'unit': 'rem', 'value': 0.1 }, { 'unit': 'rem', 'value': 0.3 }],
    'display': 'inline-block'
  },
  'RentingBuyPage top-nav': {
    'position': 'fixed',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }]
  },
  'RentingBuyPage iswiper': {
    'marginTop': [{ 'unit': 'rem', 'value': 1.1 }]
  },
  'RentingBuyPage contain': {
    'background': '#fff',
    'padding': [{ 'unit': 'rem', 'value': 0.4 }, { 'unit': 'rem', 'value': 0.4 }, { 'unit': 'rem', 'value': 0.4 }, { 'unit': 'rem', 'value': 0.4 }],
    'paddingTop': [{ 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.35 }]
  },
  'RentingBuyPage contain item': {
    'padding': [{ 'unit': 'rem', 'value': 0.4 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.4 }, { 'unit': 'px', 'value': 0 }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#f0f0f0' }]
  },
  'RentingBuyPage contain item img-wrap': {
    'display': 'block',
    'position': 'relative',
    'width': [{ 'unit': 'rem', 'value': 3 }],
    'height': [{ 'unit': 'rem', 'value': 2 }]
  },
  'RentingBuyPage contain item img': {
    'display': 'block',
    'position': 'relative',
    'width': [{ 'unit': 'rem', 'value': 3 }],
    'height': [{ 'unit': 'rem', 'value': 2 }]
  },
  'RentingBuyPage contain item img-wrap': {
    'marginRight': [{ 'unit': 'rem', 'value': 0.4 }]
  },
  'RentingBuyPage contain item img-wrap span': {
    'position': 'absolute',
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.3 }],
    'background': 'rgba(0, 0, 0, 0.4)',
    'color': '#fff',
    'textAlign': 'center',
    'lineHeight': [{ 'unit': 'rem', 'value': 0.55 }]
  },
  'RentingBuyPage contain item dec': {
    'width': [{ 'unit': '%H', 'value': NaN }],
    'color': '#787878'
  },
  'RentingBuyPage contain item dec title': {
    'color': '#000',
    'fontSize': [{ 'unit': 'rem', 'value': 0.35 }],
    'marginBottom': [{ 'unit': 'rem', 'value': 0.4 }]
  },
  'RentingBuyPage contain item dec inf': {
    'display': 'block',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.35 }],
    'marginBottom': [{ 'unit': 'rem', 'value': 0.4 }]
  },
  'RentingBuyPage contain item dec inf price': {
    'color': '#f44336'
  },
  'RentingBuyPage md-swiper': {
    'height': [{ 'unit': 'rem', 'value': 5 }]
  },
  'RentingBuyPage banner-item': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }]
  },
  'RentingBuyPage md-swiper-item a': {
    'display': 'block',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }]
  },
  'RentingBuyPage md-swiper-item img': {
    'display': 'block',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }]
  }
});
