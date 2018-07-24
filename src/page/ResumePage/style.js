import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'ResumePage item': {
    'display': 'block',
    'padding': [{ 'unit': 'rem', 'value': 0.4 }, { 'unit': 'rem', 'value': 0.4 }, { 'unit': 'rem', 'value': 0.4 }, { 'unit': 'rem', 'value': 0.4 }],
    'background': '#fff',
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ededed' }]
  },
  'ResumePage item uimg': {
    'width': [{ 'unit': 'rem', 'value': 1.5 }],
    'height': [{ 'unit': 'rem', 'value': 1.5 }],
    'borderRadius': '100%',
    'marginRight': [{ 'unit': 'rem', 'value': 0.4 }]
  },
  'ResumePage item info': {
    'width': [{ 'unit': '%H', 'value': NaN }],
    'height': [{ 'unit': 'rem', 'value': 1.5 }],
    'overflow': 'hidden'
  },
  'ResumePage item info top': {
    'marginBottom': [{ 'unit': 'rem', 'value': 0.65 }]
  },
  'ResumePage item info top name': {
    'fontSize': [{ 'unit': 'rem', 'value': 0.4 }],
    'fontWeight': '700',
    'marginRight': [{ 'unit': 'rem', 'value': 0.4 }]
  },
  'ResumePage item info top sex': {
    'fontSize': [{ 'unit': 'rem', 'value': 0.35 }],
    'marginRight': [{ 'unit': 'rem', 'value': 0.4 }]
  },
  'ResumePage item info top pi': {
    'color': '#999',
    'fontSize': [{ 'unit': 'rem', 'value': 0.35 }]
  },
  'ResumePage item info dec': {
    'fontSize': [{ 'unit': 'rem', 'value': 0.35 }],
    'color': '#999',
    'marginBottom': [{ 'unit': 'rem', 'value': 0.2 }]
  },
  'ResumePage item info dec i': {
    'fontSize': [{ 'unit': 'rem', 'value': 0.6 }],
    'position': 'relative',
    'top': [{ 'unit': 'rem', 'value': -0.2 }]
  },
  'ResumePage item info city': {
    'fontSize': [{ 'unit': 'rem', 'value': 0.35 }],
    'color': '#999'
  },
  'ResumePage item info city i': {
    'color': '#ec613e',
    'fontSize': [{ 'unit': 'rem', 'value': 0.35 }]
  },
  'ResumePage rm-title': {
    'padding': [{ 'unit': 'rem', 'value': 0.4 }, { 'unit': 'rem', 'value': 0.4 }, { 'unit': 'rem', 'value': 0.4 }, { 'unit': 'rem', 'value': 0.4 }],
    'color': '#5cabb2',
    'fontWeight': '700'
  },
  'ResumePage rm-div': {
    'padding': [{ 'unit': 'rem', 'value': 0.4 }, { 'unit': 'rem', 'value': 0.4 }, { 'unit': 'rem', 'value': 0.4 }, { 'unit': 'rem', 'value': 0.4 }],
    'background': '#fff'
  },
  'ResumePage job p': {
    'lineHeight': [{ 'unit': 'rem', 'value': 0.8 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.4 }]
  },
  'ResumePage job p i': {
    'marginRight': [{ 'unit': 'rem', 'value': 0.2 }],
    'color': '#5cabb2'
  },
  'ResumePage job p span': {
    'color': '#ec613e'
  },
  'ResumePage work work-step': {
    'borderLeft': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ededed' }],
    'paddingLeft': [{ 'unit': 'rem', 'value': 0.4 }],
    'paddingBottom': [{ 'unit': 'rem', 'value': 0.4 }],
    'position': 'relative'
  },
  'ResumePage work work-step::after': {
    'content': '''',
    'display': 'block',
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'rem', 'value': -0.12 }],
    'width': [{ 'unit': 'rem', 'value': 0.24 }],
    'height': [{ 'unit': 'rem', 'value': 0.24 }],
    'background': '#ededed',
    'borderRadius': '100%'
  },
  'ResumePage work work-step top': {
    'marginBottom': [{ 'unit': 'rem', 'value': 0.2 }]
  },
  'ResumePage edu edu-step': {
    'borderLeft': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ededed' }],
    'paddingLeft': [{ 'unit': 'rem', 'value': 0.4 }],
    'paddingBottom': [{ 'unit': 'rem', 'value': 0.4 }],
    'position': 'relative'
  },
  'ResumePage edu edu-step::after': {
    'content': '''',
    'display': 'block',
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'rem', 'value': -0.12 }],
    'width': [{ 'unit': 'rem', 'value': 0.24 }],
    'height': [{ 'unit': 'rem', 'value': 0.24 }],
    'background': '#ededed',
    'borderRadius': '100%'
  },
  'ResumePage edu edu-step mb': {
    'marginBottom': [{ 'unit': 'rem', 'value': 0.2 }]
  },
  'ResumePage edu edu-step int': {
    'color': '#999'
  },
  'ResumePage dec': {
    'lineHeight': [{ 'unit': 'rem', 'value': 0.6 }],
    'paddingBottom': [{ 'unit': 'rem', 'value': 1 }]
  },
  'ResumePage tgId': {
    'display': 'block',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'textAlign': 'center',
    'lineHeight': [{ 'unit': 'rem', 'value': 2 }],
    'marginBottom': [{ 'unit': 'rem', 'value': 2 }]
  },
  'ResumePage tgId span': {
    'color': '#23abac'
  },
  'ResumePage contact': {
    'position': 'fixed',
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'lineHeight': [{ 'unit': 'rem', 'value': 1.4 }],
    'textAlign': 'center',
    'background': '#23abac',
    'color': '#fff'
  }
});
