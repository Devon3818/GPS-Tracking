import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'ResumeLabourPage item': {
    'display': 'block',
    'padding': [{ 'unit': 'rem', 'value': 0.4 }, { 'unit': 'rem', 'value': 0.4 }, { 'unit': 'rem', 'value': 0.4 }, { 'unit': 'rem', 'value': 0.4 }],
    'background': '#fff',
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ededed' }]
  },
  'ResumeLabourPage item uimg': {
    'width': [{ 'unit': 'rem', 'value': 1.5 }],
    'height': [{ 'unit': 'rem', 'value': 1.5 }],
    'borderRadius': '100%',
    'marginRight': [{ 'unit': 'rem', 'value': 0.4 }]
  },
  'ResumeLabourPage item info': {
    'width': [{ 'unit': '%H', 'value': NaN }],
    'height': [{ 'unit': 'rem', 'value': 1.5 }],
    'overflow': 'hidden'
  },
  'ResumeLabourPage item info top': {
    'marginBottom': [{ 'unit': 'rem', 'value': 0.65 }]
  },
  'ResumeLabourPage item info top name': {
    'fontSize': [{ 'unit': 'rem', 'value': 0.4 }],
    'fontWeight': '700',
    'marginRight': [{ 'unit': 'rem', 'value': 0.4 }]
  },
  'ResumeLabourPage item info top sex': {
    'fontSize': [{ 'unit': 'rem', 'value': 0.35 }],
    'marginRight': [{ 'unit': 'rem', 'value': 0.4 }]
  },
  'ResumeLabourPage item info top pi': {
    'color': '#999',
    'fontSize': [{ 'unit': 'rem', 'value': 0.35 }]
  },
  'ResumeLabourPage item info dec': {
    'fontSize': [{ 'unit': 'rem', 'value': 0.35 }],
    'color': '#999',
    'marginBottom': [{ 'unit': 'rem', 'value': 0.2 }]
  },
  'ResumeLabourPage item info dec i': {
    'fontSize': [{ 'unit': 'rem', 'value': 0.6 }],
    'position': 'relative',
    'top': [{ 'unit': 'rem', 'value': -0.2 }]
  },
  'ResumeLabourPage item info city': {
    'fontSize': [{ 'unit': 'rem', 'value': 0.35 }],
    'color': '#999'
  },
  'ResumeLabourPage item info city i': {
    'color': '#ec613e',
    'fontSize': [{ 'unit': 'rem', 'value': 0.35 }]
  },
  'ResumeLabourPage rm-title': {
    'padding': [{ 'unit': 'rem', 'value': 0.4 }, { 'unit': 'rem', 'value': 0.4 }, { 'unit': 'rem', 'value': 0.4 }, { 'unit': 'rem', 'value': 0.4 }],
    'color': '#5cabb2',
    'fontWeight': '700'
  },
  'ResumeLabourPage rm-div': {
    'padding': [{ 'unit': 'rem', 'value': 0.4 }, { 'unit': 'rem', 'value': 0.4 }, { 'unit': 'rem', 'value': 0.4 }, { 'unit': 'rem', 'value': 0.4 }],
    'background': '#fff'
  },
  'ResumeLabourPage job p': {
    'lineHeight': [{ 'unit': 'rem', 'value': 0.8 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.4 }]
  },
  'ResumeLabourPage job p i': {
    'marginRight': [{ 'unit': 'rem', 'value': 0.2 }],
    'color': '#5cabb2'
  },
  'ResumeLabourPage job p span': {
    'color': '#ec613e'
  },
  'ResumeLabourPage work work-step': {
    'borderLeft': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ededed' }],
    'paddingLeft': [{ 'unit': 'rem', 'value': 0.4 }],
    'paddingBottom': [{ 'unit': 'rem', 'value': 0.4 }],
    'position': 'relative'
  },
  'ResumeLabourPage work work-step::after': {
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
  'ResumeLabourPage work work-step top': {
    'marginBottom': [{ 'unit': 'rem', 'value': 0.2 }]
  },
  'ResumeLabourPage edu edu-step': {
    'borderLeft': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ededed' }],
    'paddingLeft': [{ 'unit': 'rem', 'value': 0.4 }],
    'paddingBottom': [{ 'unit': 'rem', 'value': 0.4 }],
    'position': 'relative'
  },
  'ResumeLabourPage edu edu-step::after': {
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
  'ResumeLabourPage edu edu-step mb': {
    'marginBottom': [{ 'unit': 'rem', 'value': 0.2 }]
  },
  'ResumeLabourPage edu edu-step int': {
    'color': '#999'
  },
  'ResumeLabourPage dec': {
    'lineHeight': [{ 'unit': 'rem', 'value': 0.6 }],
    'paddingBottom': [{ 'unit': 'rem', 'value': 1 }]
  },
  'ResumeLabourPage tgId': {
    'display': 'block',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'textAlign': 'center',
    'lineHeight': [{ 'unit': 'rem', 'value': 2 }],
    'marginBottom': [{ 'unit': 'rem', 'value': 2 }]
  },
  'ResumeLabourPage tgId span': {
    'color': '#23abac'
  },
  'ResumeLabourPage contact': {
    'position': 'fixed',
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'lineHeight': [{ 'unit': 'rem', 'value': 1.4 }],
    'textAlign': 'center',
    'background': '#23abac',
    'color': '#fff'
  }
});
