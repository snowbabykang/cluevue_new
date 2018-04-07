import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // maki
  '[class*="maki-"]:before': {
    'fontFamily': ''maki', sans-serif'
  },
  // entypo
  '[class*="entypo-"]:before': {
    'fontFamily': ''entypo', sans-serif'
  },
  // fontawesome
  '[class*="fontawesome-"]:before': {
    'fontFamily': ''FontAwesome', sans-serif'
  },
  'body': {
    'color': '#555!important',
    'fontFamily': '"Open Sans", Arial, sans-serif!important',
    'fontSize': [{ 'unit': 'px', 'value': 13 }],
    'lineHeight': [{ 'unit': 'px', 'value': 20 }],
    'overflowX': 'hidden!important',
    'minHeight': [{ 'unit': '%V', 'value': 1 }],
    'zIndex': '-2',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }],
    'background': 'url('../img/bg.jpg') no-repeat top center fixed',
    'MozBackgroundSize': 'cover',
    'WebkitBackgroundSize': 'cover',
    'OBackgroundSize': 'cover',
    'backgroundSize': 'cover'
  },
  // PREALOADER
  'a:hover': {
    'textDecoration': 'none!important'
  },
  '#preloader': {
    // IE 8 and below
    'height': [{ 'unit': 'px', 'value': 5 }],
    // position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    'backgroundColor': 'rgba(37, 45, 59, 1.0)',
    // change if the mask should have another color then white
    'zIndex': '2000',
    // makes sure it stays on top
    // background-image: url("../img/overlays/06.png");
  background-repeat: repeat;
  },
  '#mapContainer': {
    'fontFamily': 'sans-serif',
    'background': '#fff',
    'color': '#444',
    'height': [{ 'unit': '%V', 'value': 1 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  '#logo': {
    'left': [{ 'unit': 'px', 'value': 19 }],
    'position': 'relative',
    'top': [{ 'unit': 'px', 'value': -34 }],
    'maxWidth': [{ 'unit': 'px', 'value': 191 }]
  },
  '#logo-mobile': {
    'left': [{ 'unit': 'px', 'value': -33 }],
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': -14 }],
    'zIndex': '0'
  },
  '#logo h1': {
    'fontSize': [{ 'unit': 'px', 'value': 30 }],
    'fontWeight': '200',
    'letterSpacing': [{ 'unit': 'px', 'value': -1 }],
    'textDecoration': 'inherit',
    'textTransform': 'uppercase',
    'color': '#fff'
  },
  '#logo-mobile h1': {
    'fontSize': [{ 'unit': 'px', 'value': 30 }],
    'fontWeight': '200',
    'letterSpacing': [{ 'unit': 'px', 'value': -1 }],
    'textDecoration': 'inherit',
    'textTransform': 'uppercase',
    'color': '#fff'
  },
  '#logo h1 span': {
    'background': 'none repeat scroll 0 0 rgba(0, 0, 0, 0.2)',
    'borderRadius': '3px',
    'fontSize': [{ 'unit': 'px', 'value': 11 }],
    'marginLeft': [{ 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }],
    'position': 'relative',
    'top': [{ 'unit': 'px', 'value': -3 }]
  },
  '#logo-mobile h1 span': {
    'background': 'none repeat scroll 0 0 rgba(0, 0, 0, 0.2)',
    'borderRadius': '3px',
    'fontSize': [{ 'unit': 'px', 'value': 11 }],
    'marginLeft': [{ 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }],
    'position': 'relative',
    'top': [{ 'unit': 'px', 'value': -3 }]
  },
  // *
 * BOOTSRAP COUSTOM
  'container-fluid': {
    'paddingLeft': [{ 'unit': 'px', 'value': 0 }],
    'paddingRight': [{ 'unit': 'px', 'value': 0 }]
  },
  'row-fluid[class*="span"]': {
    'marginLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'navbar-toggle': {
    'position': 'relative',
    'float': 'right',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 16 }],
    'marginTop': [{ 'unit': 'px', 'value': 2 }],
    'marginRight': [{ 'unit': 'px', 'value': 15 }],
    'marginBottom': [{ 'unit': 'px', 'value': 15 }],
    'backgroundColor': 'transparent',
    'backgroundImage': 'none',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'transparent' }],
    'borderRadius': '4px!important',
    'fontSize': [{ 'unit': 'px', 'value': 31 }],
    'color': '#fff!important'
  },
  'nav>li>a:hover': {
    'textDecoration': 'none',
    'backgroundColor': 'transparent!important'
  },
  'nav>li>a:focus': {
    'textDecoration': 'none',
    'backgroundColor': 'transparent!important'
  },
  'navbar-inverse nav active>a': {
    'backgroundColor': '#111111',
    'color': '#FFFFFF',
    'borderRadius': '5px!important'
  },
  'navbar-inverse nav active>a:hover': {
    'backgroundColor': '#111111',
    'color': '#FFFFFF',
    'borderRadius': '5px!important'
  },
  'navbar-inverse nav active>a:focus': {
    'backgroundColor': '#111111',
    'color': '#FFFFFF',
    'borderRadius': '5px!important'
  },
  'navbar-top': {
    'position': 'relative',
    'top': [{ 'unit': 'px', 'value': 10 }]
  },
  'navbar-nav>li>a': {
    'color': '#F5F5F5!important',
    'fontSize': [{ 'unit': 'px', 'value': 13 }]
  },
  'nav-pills>li>a': {
    'color': '#999'
  },
  'navbar': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0)' }],
    'marginBottom': [{ 'unit': 'px', 'value': 0 }],
    'paddingTop': [{ 'unit': 'px', 'value': 8 }],
    'minHeight': [{ 'unit': 'px', 'value': 65 }],
    'position': 'relative!important'
  },
  'navbar-inner': {
    'minHeight': [{ 'unit': 'px', 'value': 60 }]
  },
  'dropdown-menu>li>a:hover': {
    'color': '#262626',
    'textDecoration': 'none',
    'backgroundColor': 'transparent!important'
  },
  'dropdown-menu>li>a:focus': {
    'color': '#262626',
    'textDecoration': 'none',
    'backgroundColor': 'transparent!important'
  },
  'dropdown-menu': {
    'backgroundClip': 'padding-box',
    'backgroundColor': '#FFFFFF',
    'borderRadius': '6px 6px 6px 6px',
    'display': 'none',
    'float': 'left',
    'left': [{ 'unit': 'px', 'value': 0 }],
    'listStyle': 'none outside none',
    'margin': [{ 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'minWidth': [{ 'unit': 'px', 'value': 160 }],
    'position': 'absolute',
    'top': [{ 'unit': '%V', 'value': 1 }],
    'zIndex': '2147483647!important',
    'WebkitBoxShadow': 'none!important',
    'boxShadow': [{ 'unit': 'string', 'value': 'none!important' }, { 'unit': 'string', 'value': 'none!important' }, { 'unit': 'string', 'value': 'none!important' }, { 'unit': 'string', 'value': 'none!important' }],
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc!important' }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, .15)' }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, .15)!important' }]
  },
  'dropdown-wrap:after': {
    'borderColor': '#FFFFFF rgba(0, 0, 0, 0)',
    'borderStyle': 'solid',
    'borderWidth': '0 13px 13px',
    'content': '""',
    'display': 'block',
    'left': [{ 'unit': '%H', 'value': 0.105 }],
    'marginLeft': [{ 'unit': 'px', 'value': -15 }],
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': -10 }],
    'width': [{ 'unit': 'px', 'value': 0 }],
    'zIndex': '1'
  },
  'dropdown-setting': {
    'borderLeft': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.1)' }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.1)' }, { 'unit': 'string', 'value': '!important' }],
    'borderRight': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.1)' }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.1)' }, { 'unit': 'string', 'value': '!important' }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.1)' }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.1)' }, { 'unit': 'string', 'value': '!important' }],
    'marginTop': [{ 'unit': 'px', 'value': 14 }, { 'unit': 'string', 'value': '!important' }],
    'position': 'absolute',
    'borderRadius': '4px!important',
    'width': [{ 'unit': 'px', 'value': 165 }]
  },
  'dropdown-setting:after': {
    'borderColor': '#FFFFFF rgba(0, 0, 0, 0)',
    'borderStyle': 'solid',
    'borderWidth': '0 13px 13px',
    'content': '""',
    'display': 'block',
    'left': [{ 'unit': '%H', 'value': 0.8 }],
    'marginLeft': [{ 'unit': 'px', 'value': -15 }],
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': -10 }],
    'width': [{ 'unit': 'px', 'value': 0 }],
    'zIndex': '1'
  },
  'dropdown-menudropdown-wrap b': {
    'background': 'none repeat scroll 0 0 #A8BDCF',
    'borderRadius': '3px',
    'color': '#FFFFFF',
    'fontSize': [{ 'unit': 'px', 'value': 11 }],
    'fontWeight': 'normal',
    'marginTop': [{ 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 4 }],
    'position': 'absolute',
    'right': [{ 'unit': 'px', 'value': 10 }]
  },
  'dropdown-menudropdown-wrap div': {
    'background': 'none repeat scroll 0 0 #A8BDCF',
    'bottom': [{ 'unit': 'px', 'value': 2 }],
    'color': '#FFFFFF',
    'fontSize': [{ 'unit': 'px', 'value': 13 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 6 }],
    'position': 'relative',
    'textAlign': 'center',
    'width': [{ 'unit': 'px', 'value': 230 }],
    'cursor': 'pointer'
  },
  'dropdown-menudropdown-wrap div:hover': {
    'background': 'none repeat scroll 0 0 #0DB8DF'
  },
  'inlinebar>canvas': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'textAlign': 'center'
  },
  'alert-warning': {
    'color': 'rgba(251, 180, 76, 1.0)!important',
    'backgroundColor': 'rgba(251, 180, 76, 0.1)!important'
  },
  'alert-danger': {
    'color': 'rgba(255, 107, 107, 0.9)!important',
    'backgroundColor': 'rgba(255, 107, 107, 0.1)!important'
  },
  'alert-success': {
    'backgroundColor': 'rgba(69, 182, 176, 0.1)!important',
    'color': '#45B6B0!important'
  },
  'alert-info': {
    'color': '#65C3DF!important',
    'backgroundColor': 'rgba(101, 195, 223, 0.1)!important'
  },
  'progress': {
    'backgroundColor': '#F5F5F5!important',
    'borderRadius': '4px!important',
    'height': [{ 'unit': 'px', 'value': 15 }],
    'marginBottom': [{ 'unit': 'px', 'value': 15 }],
    'overflow': 'hidden!important',
    'WebkitBoxShadow': '0 1px 0 rgba(0, 0, 0, 0.2) inset!important',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.2)' }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.2)' }, { 'unit': 'string', 'value': 'inset!important' }]
  },
  'progress-bar': {
    'fontSize': [{ 'unit': 'px', 'value': 10 }],
    'lineHeight': [{ 'unit': 'px', 'value': 14 }]
  },
  'progress-bar-success': {
    'backgroundColor': '#45B6B0!important'
  },
  'progress-bar-info': {
    'backgroundColor': '#65C3DF!important'
  },
  'progress-bar-warning': {
    'backgroundColor': '#FBB44C!important'
  },
  'progress-bar-danger': {
    'backgroundColor': '#FF6B6B!important'
  },
  'label': {
    'backgroundColor': '#A8BDCF!important',
    'color': '#FFFFFF',
    'display': 'inline-block',
    'fontFamily': 'Open Sans',
    'fontSize': [{ 'unit': 'px', 'value': 11 }],
    'fontWeight': 'normal',
    'lineHeight': [{ 'unit': 'px', 'value': 14 }],
    'padding': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 4 }],
    'verticalAlign': 'baseline',
    'whiteSpace': 'nowrap',
    'borderRadius': '.25em'
  },
  'badge': {
    'backgroundColor': '#A8BDCF!important',
    'color': '#FFFFFF',
    'display': 'inline-block',
    'fontFamily': 'Open Sans',
    'fontSize': [{ 'unit': 'px', 'value': 11 }],
    'fontWeight': 'normal',
    'lineHeight': [{ 'unit': 'px', 'value': 14 }],
    'padding': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 4 }],
    'verticalAlign': 'baseline',
    'whiteSpace': 'nowrap',
    'borderRadius': '.25em'
  },
  'label-success': {
    'backgroundColor': '#45B6B0!important'
  },
  'label-warning': {
    'backgroundColor': '#FBB44C!important'
  },
  'label-important': {
    'backgroundColor': '#FF6B6B!important'
  },
  'label-info': {
    'backgroundColor': '#65C3DF!important'
  },
  'label-inverse': {
    'backgroundColor': '#888!important'
  },
  'setting-wrap': {
    'margin': [{ 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 30 }],
    'width': [{ 'unit': 'px', 'value': 200 }],
    'minHeight': [{ 'unit': 'px', 'value': 100 }]
  },
  'btn': {
    'borderColor': '#c7d5e0!important',
    'background': '#FFFFFF',
    'display': 'inline-block',
    'padding': [{ 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 12 }, { 'unit': 'string', 'value': '!important' }, { 'unit': 'px', 'value': 12 }],
    'marginBottom': [{ 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'px', 'value': 12 }, { 'unit': 'string', 'value': '!important' }],
    'fontWeight': 'normal',
    'lineHeight': [{ 'unit': 'px', 'value': 1.428571429 }],
    'textAlign': 'center',
    'whiteSpace': 'nowrap',
    'verticalAlign': 'middle',
    'cursor': 'pointer',
    'WebkitUserSelect': 'none',
    'MozUserSelect': 'none',
    'MsUserSelect': 'none',
    'OUserSelect': 'none',
    'userSelect': 'none',
    'backgroundImage': 'none',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#DDDDDD' }],
    'borderRadius': '4px'
  },
  'btn-success': {
    'color': '#fff!important',
    'backgroundColor': '#45B6B0!important',
    'borderColor': '#45B6B0!important'
  },
  'btn-success:hover': {
    'color': '#fff!important',
    'backgroundColor': '#3DA09A!important',
    'borderColor': '#3DA09A!important'
  },
  'btn-success:focus': {
    'color': '#fff!important',
    'backgroundColor': '#3DA09A!important',
    'borderColor': '#3DA09A!important'
  },
  'btn-success:active': {
    'color': '#fff!important',
    'backgroundColor': '#3DA09A!important',
    'borderColor': '#3DA09A!important'
  },
  'btn-successactive': {
    'color': '#fff!important',
    'backgroundColor': '#3DA09A!important',
    'borderColor': '#3DA09A!important'
  },
  'open dropdown-togglebtn-success': {
    'color': '#fff!important',
    'backgroundColor': '#3DA09A!important',
    'borderColor': '#3DA09A!important'
  },
  'btn-info': {
    'color': '#fff!important',
    'backgroundColor': '#65C3DF!important',
    'borderColor': '#65C3DF!important'
  },
  'btn-info:hover': {
    'color': '#fff!important',
    'backgroundColor': '#60B8D1!important',
    'borderColor': '#60B8D1!important'
  },
  'btn-info:focus': {
    'color': '#fff!important',
    'backgroundColor': '#60B8D1!important',
    'borderColor': '#60B8D1!important'
  },
  'btn-info:active': {
    'color': '#fff!important',
    'backgroundColor': '#60B8D1!important',
    'borderColor': '#60B8D1!important'
  },
  'btn-infoactive': {
    'color': '#fff!important',
    'backgroundColor': '#60B8D1!important',
    'borderColor': '#60B8D1!important'
  },
  'open dropdown-togglebtn-info': {
    'color': '#fff!important',
    'backgroundColor': '#60B8D1!important',
    'borderColor': '#60B8D1!important'
  },
  'btn-warning': {
    'color': '#fff!important',
    'backgroundColor': '#FBB44C!important',
    'borderColor': '#FBB44C!important'
  },
  'btn-warning:hover': {
    'color': '#fff!important',
    'backgroundColor': '#EDA849!important',
    'borderColor': '#EDA849!important'
  },
  'btn-warning:focus': {
    'color': '#fff!important',
    'backgroundColor': '#EDA849!important',
    'borderColor': '#EDA849!important'
  },
  'btn-warning:active': {
    'color': '#fff!important',
    'backgroundColor': '#EDA849!important',
    'borderColor': '#EDA849!important'
  },
  'btn-warningactive': {
    'color': '#fff!important',
    'backgroundColor': '#EDA849!important',
    'borderColor': '#EDA849!important'
  },
  'open dropdown-togglebtn-warning': {
    'color': '#fff!important',
    'backgroundColor': '#EDA849!important',
    'borderColor': '#EDA849!important'
  },
  'btn-danger': {
    'color': '#fff!important',
    'backgroundColor': '#FF6B6B!important',
    'borderColor': '#FF6B6B!important'
  },
  'btn-danger:hover': {
    'color': '#fff!important',
    'backgroundColor': '#E86161!important',
    'borderColor': '#E86161!important'
  },
  'btn-danger:focus': {
    'color': '#fff!important',
    'backgroundColor': '#E86161!important',
    'borderColor': '#E86161!important'
  },
  'btn-danger:active': {
    'color': '#fff!important',
    'backgroundColor': '#E86161!important',
    'borderColor': '#E86161!important'
  },
  'btn-dangeractive': {
    'color': '#fff!important',
    'backgroundColor': '#E86161!important',
    'borderColor': '#E86161!important'
  },
  'open dropdown-togglebtn-danger': {
    'color': '#fff!important',
    'backgroundColor': '#E86161!important',
    'borderColor': '#E86161!important'
  },
  'btn-default:hover': {
    'color': '#FFF!important',
    'backgroundColor': '#9BAFBF!important',
    'borderColor': '#9BAFBF!important'
  },
  'btn-default:focus': {
    'color': '#FFF!important',
    'backgroundColor': '#9BAFBF!important',
    'borderColor': '#9BAFBF!important'
  },
  'btn-default:active': {
    'color': '#FFF!important',
    'backgroundColor': '#9BAFBF!important',
    'borderColor': '#9BAFBF!important'
  },
  'btn-defaultactive': {
    'color': '#FFF!important',
    'backgroundColor': '#9BAFBF!important',
    'borderColor': '#9BAFBF!important'
  },
  'open dropdown-togglebtn-default': {
    'color': '#FFF!important',
    'backgroundColor': '#9BAFBF!important',
    'borderColor': '#9BAFBF!important'
  },
  'btn-default': {
    'color': '#FFF!important',
    'backgroundColor': '#A8BDCF!important',
    'borderColor': '#A8BDCF!important'
  },
  'well': {
    'fontSize': [{ 'unit': 'px', 'value': 13 }],
    'minHeight': [{ 'unit': 'px', 'value': 20 }],
    'padding': [{ 'unit': 'px', 'value': 19 }, { 'unit': 'px', 'value': 19 }, { 'unit': 'px', 'value': 19 }, { 'unit': 'px', 'value': 19 }],
    'marginBottom': [{ 'unit': 'px', 'value': 20 }],
    'backgroundColor': '#f5f5f5!important',
    'border': [{ 'unit': 'string', 'value': 'none!important' }],
    'borderRadius': '4px',
    'WebkitBoxShadow': 'none !important',
    'boxShadow': [{ 'unit': 'string', 'value': 'none!important' }, { 'unit': 'string', 'value': 'none!important' }, { 'unit': 'string', 'value': 'none!important' }, { 'unit': 'string', 'value': 'none!important' }]
  },
  'input:-webkit-autofill': {
    'background': '#FFFFFF!important'
  },
  'textarea:-webkit-autofill': {
    'background': '#FFFFFF!important'
  },
  'form-control:focus': {
    'borderColor': '#45B6B0!important',
    'outline': '0',
    'WebkitBoxShadow': 'none!important',
    'boxShadow': [{ 'unit': 'string', 'value': 'none!important' }, { 'unit': 'string', 'value': 'none!important' }, { 'unit': 'string', 'value': 'none!important' }, { 'unit': 'string', 'value': 'none!important' }]
  },
  'nav open>a': {
    'background': 'none!important',
    'borderColor': 'none!important'
  },
  'nav open>a:hover': {
    'background': 'none!important',
    'borderColor': 'none!important'
  },
  'nav open>a:focus': {
    'background': 'none!important',
    'borderColor': 'none!important'
  },
  'dropdown-menu>li>a': {
    'fontSize': [{ 'unit': 'px', 'value': 13 }]
  },
  'dropdown-menu>li>a': {
    'clear': 'both',
    'color': '#777777!important',
    'display': 'block',
    'fontWeight': 'normal',
    'lineHeight': [{ 'unit': 'px', 'value': 1.42857 }],
    'padding': [{ 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 30 }],
    'whiteSpace': 'nowrap'
  },
  'dropdown-menu>li>a:hover': {
    'color': '#39B3D7!important'
  },
  'devider': {
    'fontFamily': ''BebasNeueRegular', Arial, Helvetica, sans-serif',
    'fontSize': [{ 'unit': 'px', 'value': 40 }],
    'borderBottom': [{ 'unit': 'px', 'value': 3 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#000000' }, { 'unit': 'string', 'value': '!important' }],
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#4A6390' }],
    'MozBoxShadow': '0 1px 0 #4A6390',
    'WebkitBoxShadow': '0 1px 0 #4A6390'
  },
  'divider-vertical': {
    'borderRight': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#000000' }],
    'boxShadow': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#4A6390' }],
    'float': 'right',
    'height': [{ 'unit': 'px', 'value': 60 }]
  },
  'form-control': {
    'backgroundColor': '#FFFFFF',
    'backgroundImage': 'none',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '!important' }],
    'borderRadius': '4px',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': '!important' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': '!important' }],
    'color': '#C7D5E0 !important',
    'fontSize': [{ 'unit': 'px', 'value': 13 }, { 'unit': 'string', 'value': '!important' }],
    'height': [{ 'unit': 'px', 'value': 31 }, { 'unit': 'string', 'value': '!important' }]
  },
  'form-update': {
    'backgroundColor': '#FFFFFF',
    'backgroundImage': 'none',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '!important' }],
    'borderRadius': '4px',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': '!important' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': '!important' }],
    'color': '#C7D5E0 !important',
    'fontSize': [{ 'unit': 'px', 'value': 13 }, { 'unit': 'string', 'value': '!important' }],
    'height': [{ 'unit': 'px', 'value': 70 }, { 'unit': 'string', 'value': '!important' }],
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'panel': {
    'backgroundColor': '#FFFFFF',
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0)' }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0)!important' }],
    'borderRadius': '4px',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.05)' }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.05)!important' }],
    'marginBottom': [{ 'unit': 'px', 'value': 20 }]
  },
  'carousel-controlright': {
    'background': 'transparent!important'
  },
  'carousel-controlleft': {
    'background': 'transparent!important'
  },
  'carousel-control': {
    'color': '#FFFFFF!important',
    'textShadow': [{ 'unit': 'string', 'value': 'none!important' }, { 'unit': 'string', 'value': 'none!important' }, { 'unit': 'string', 'value': 'none!important' }, { 'unit': 'string', 'value': 'none!important' }]
  },
  'modal-backdrop': {
    'backgroundColor': 'transparent!important',
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'position': 'fixed!important',
    'right': [{ 'unit': 'px', 'value': 0 }],
    'top': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 1 }, { 'unit': 'string', 'value': '!important' }],
    'zIndex': '0 !important'
  },
  'modal': {
    'background': 'none repeat scroll 0 0 rgba(0, 0, 0, 0.8)!important',
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'display': 'none',
    'left': [{ 'unit': 'px', 'value': 0 }],
    'outline': '0 none',
    'overflowX': 'auto',
    'overflowY': 'hidden!important',
    'position': 'fixed',
    'right': [{ 'unit': 'px', 'value': 0 }],
    'top': [{ 'unit': 'px', 'value': 0 }],
    'zIndex': '1050'
  },
  'list-group-item': {
    'backgroundColor': 'rgba(255, 255, 255, 0.1)!important',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#EEEEEE!important' }]
  },
  // *
 *BACKGROUND CHANGER
  'theme-bg': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }]
  },
  'theme-bg div': {
    'display': 'inline-block',
    'float': 'left'
  },
  '#button-bg': {
    'background': 'url("../img/small-bg5.jpg") repeat scroll 0 0 / cover rgba(0, 0, 0, 0)',
    'border': [{ 'unit': 'px', 'value': 4 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#FFFFFF' }],
    'borderRadius': '50%',
    'height': [{ 'unit': 'px', 'value': 25 }],
    'width': [{ 'unit': 'px', 'value': 25 }],
    'cursor': 'pointer'
  },
  '#button-bg2': {
    'background': 'url("../img/small-bg2.jpg") repeat scroll 0 0 / cover rgba(0, 0, 0, 0)',
    'border': [{ 'unit': 'px', 'value': 4 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#FFFFFF' }],
    'borderRadius': '50%',
    'height': [{ 'unit': 'px', 'value': 25 }],
    'width': [{ 'unit': 'px', 'value': 25 }],
    'cursor': 'pointer'
  },
  '#button-bg3': {
    'background': 'url("../img/small-bg.jpg") repeat scroll 0 0 / cover rgba(0, 0, 0, 0)',
    'border': [{ 'unit': 'px', 'value': 4 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#FFFFFF' }],
    'borderRadius': '50%',
    'height': [{ 'unit': 'px', 'value': 25 }],
    'width': [{ 'unit': 'px', 'value': 25 }],
    'cursor': 'pointer'
  },
  '#button-bg5': {
    'background': 'url("../img/giftly.png") repeat scroll 0 0 / cover rgba(0, 0, 0, 0)',
    'border': [{ 'unit': 'px', 'value': 4 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#FFFFFF' }],
    'borderRadius': '50%',
    'height': [{ 'unit': 'px', 'value': 25 }],
    'width': [{ 'unit': 'px', 'value': 25 }],
    'cursor': 'pointer'
  },
  '#button-bg6': {
    'background': 'none repeat scroll 0 0 #2C3E50',
    'border': [{ 'unit': 'px', 'value': 4 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#FFFFFF' }],
    'borderRadius': '50%',
    'height': [{ 'unit': 'px', 'value': 25 }],
    'width': [{ 'unit': 'px', 'value': 25 }],
    'cursor': 'pointer'
  },
  '#button-bg4': {
    'background': '#252d3b',
    'border': [{ 'unit': 'px', 'value': 4 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#FFFFFF' }],
    'borderRadius': '50%',
    'height': [{ 'unit': 'px', 'value': 25 }],
    'width': [{ 'unit': 'px', 'value': 25 }],
    'cursor': 'pointer'
  },
  '#button-bg7': {
    'background': 'url("../img/bg3.png") repeat scroll 0 0 / cover rgba(0, 0, 0, 0)',
    'border': [{ 'unit': 'px', 'value': 4 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#FFFFFF' }],
    'borderRadius': '50%',
    'height': [{ 'unit': 'px', 'value': 25 }],
    'width': [{ 'unit': 'px', 'value': 25 }],
    'cursor': 'pointer'
  },
  '#button-bg8': {
    'background': 'url("../img/small-bg8.jpg") repeat scroll 0 0 / cover rgba(0, 0, 0, 0)',
    'border': [{ 'unit': 'px', 'value': 4 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#FFFFFF' }],
    'borderRadius': '50%',
    'height': [{ 'unit': 'px', 'value': 25 }],
    'width': [{ 'unit': 'px', 'value': 25 }],
    'cursor': 'pointer'
  },
  '#button-bg9': {
    'background': 'url("../img/small-bg9.jpg") repeat scroll 0 0 / cover rgba(0, 0, 0, 0)',
    'border': [{ 'unit': 'px', 'value': 4 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#FFFFFF' }],
    'borderRadius': '50%',
    'height': [{ 'unit': 'px', 'value': 25 }],
    'width': [{ 'unit': 'px', 'value': 25 }],
    'cursor': 'pointer'
  },
  '#button-bg10': {
    'background': 'url("../img/small-bg10.jpg") repeat scroll 0 0 / cover rgba(0, 0, 0, 0)',
    'border': [{ 'unit': 'px', 'value': 4 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#FFFFFF' }],
    'borderRadius': '50%',
    'height': [{ 'unit': 'px', 'value': 25 }],
    'width': [{ 'unit': 'px', 'value': 25 }],
    'cursor': 'pointer'
  },
  '#button-bg11': {
    'background': 'url("../img/small-bg11.jpg") repeat scroll 0 0 / cover rgba(0, 0, 0, 0)',
    'border': [{ 'unit': 'px', 'value': 4 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#FFFFFF' }],
    'borderRadius': '50%',
    'height': [{ 'unit': 'px', 'value': 25 }],
    'width': [{ 'unit': 'px', 'value': 25 }],
    'cursor': 'pointer'
  },
  '#button-bg12': {
    'background': 'url("../img/small-bg12.jpg") repeat scroll 0 0 / cover rgba(0, 0, 0, 0)',
    'border': [{ 'unit': 'px', 'value': 4 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#FFFFFF' }],
    'borderRadius': '50%',
    'height': [{ 'unit': 'px', 'value': 25 }],
    'width': [{ 'unit': 'px', 'value': 25 }],
    'cursor': 'pointer'
  },
  '#button-bg13': {
    'background': 'url("../img/small-bg13.jpg") repeat scroll 0 0 / cover rgba(0, 0, 0, 0)',
    'border': [{ 'unit': 'px', 'value': 4 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#FFFFFF' }],
    'borderRadius': '50%',
    'height': [{ 'unit': 'px', 'value': 25 }],
    'width': [{ 'unit': 'px', 'value': 25 }],
    'cursor': 'pointer'
  },
  // *
 * HEADER MENU
  'header': {
    'position': 'fixed',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'zIndex': '9999',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 60 }],
    'background': '#000'
  },
  'nav-pad-top': {
    'margin': [{ 'unit': 'px', 'value': 13 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'imglogo': {
    'height': [{ 'unit': 'px', 'value': 38 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'position': 'relative',
    'top': [{ 'unit': 'px', 'value': 0 }]
  },
  'imgikon-check': {
    'height': [{ 'unit': 'px', 'value': 24 }],
    'width': [{ 'unit': 'px', 'value': 24 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'imgikon': {
    'height': [{ 'unit': 'px', 'value': 24 }],
    'width': [{ 'unit': 'px', 'value': 24 }]
  },
  'icon-menu:hover': {
    'color': '#0DB8DF'
  },
  'noft-red': {
    'background': 'none repeat scroll 0 0 #EA3F3F',
    'borderRadius': '26px',
    'color': '#FFFFFF',
    'fontSize': [{ 'unit': 'px', 'value': 10 }],
    'left': [{ 'unit': 'px', 'value': 25 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'position': 'absolute',
    'textAlign': 'center',
    'top': [{ 'unit': 'px', 'value': 5 }],
    'width': [{ 'unit': 'px', 'value': 20 }]
  },
  'noft-green': {
    'background': 'none repeat scroll 0 0 #4AC4BC',
    'borderRadius': '26px',
    'color': '#FFFFFF',
    'fontSize': [{ 'unit': 'px', 'value': 10 }],
    'left': [{ 'unit': 'px', 'value': 25 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'position': 'absolute',
    'textAlign': 'center',
    'top': [{ 'unit': 'px', 'value': 5 }],
    'width': [{ 'unit': 'px', 'value': 20 }]
  },
  'noft-yellow': {
    'background': 'none repeat scroll 0 0 #FFA200',
    'borderRadius': '26px',
    'color': '#FFFFFF',
    'fontSize': [{ 'unit': 'px', 'value': 10 }],
    'left': [{ 'unit': 'px', 'value': 25 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'position': 'absolute',
    'textAlign': 'center',
    'top': [{ 'unit': 'px', 'value': 5 }],
    'width': [{ 'unit': 'px', 'value': 20 }]
  },
  'noft-blue': {
    'background': 'none repeat scroll 0 0 #0DB8DF',
    'borderRadius': '3px',
    'color': '#FFFFFF',
    'float': 'right!important',
    'fontSize': [{ 'unit': 'px', 'value': 9 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }],
    'position': 'relative',
    'textAlign': 'center',
    'top': [{ 'unit': 'px', 'value': 0 }]
  },
  'noft-orange': {
    'background': 'none repeat scroll 0 0 #FFA200',
    'borderRadius': '3px',
    'color': '#FFFFFF',
    'float': 'right!important',
    'fontSize': [{ 'unit': 'px', 'value': 9 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }],
    'position': 'relative',
    'textAlign': 'center',
    'top': [{ 'unit': 'px', 'value': 0 }]
  },
  'noft-blue-number': {
    'background': 'none repeat scroll 0 0 #0DB8DF',
    'borderRadius': '50%',
    'color': '#FFFFFF',
    'float': 'right !important',
    'fontSize': [{ 'unit': 'px', 'value': 11 }],
    'height': [{ 'unit': 'px', 'value': 25 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'position': 'relative',
    'textAlign': 'center',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': 'px', 'value': 25 }]
  },
  'noft-purple-number': {
    'background': 'none repeat scroll 0 0 #FF6B6B',
    'borderRadius': '50%',
    'color': '#FFFFFF',
    'float': 'right !important',
    'fontSize': [{ 'unit': 'px', 'value': 11 }],
    'height': [{ 'unit': 'px', 'value': 25 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'position': 'relative',
    'textAlign': 'center',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': 'px', 'value': 25 }]
  },
  'admin-pic': {
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'rgba(255, 255, 255, 0.8)' }],
    'display': 'inline-block',
    'float': 'left',
    'height': [{ 'unit': 'px', 'value': 45 }],
    'marginLeft': [{ 'unit': 'px', 'value': -15 }],
    'marginRight': [{ 'unit': 'px', 'value': 19 }],
    'marginTop': [{ 'unit': 'px', 'value': -12 }],
    'width': [{ 'unit': 'px', 'value': 45 }]
  },
  'noft-icon': {
    'borderRadius': '50%',
    'color': '#FFFFFF',
    'float': 'left',
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'height': [{ 'unit': 'px', 'value': 25 }],
    'left': [{ 'unit': 'px', 'value': -13 }],
    'lineHeight': [{ 'unit': 'px', 'value': 23 }],
    'position': 'relative',
    'textAlign': 'center',
    'width': [{ 'unit': 'px', 'value': 25 }]
  },
  'img-msg': {
    'borderRadius': '50%',
    'color': '#FFFFFF',
    'height': [{ 'unit': 'px', 'value': 25 }],
    'left': [{ 'unit': 'px', 'value': -17 }],
    'position': 'relative',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': 'px', 'value': 25 }]
  },
  // *
 * SIDE MENU SEARCH
  '#search': {
    'float': 'right'
  },
  '#search input[type="text"]': {
    'background': 'url("../img/search-dark.png") no-repeat scroll 14px 10px #FFFFFF',
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'none' }],
    'color': '#555 !important',
    'width': [{ 'unit': 'px', 'value': 150 }],
    'padding': [{ 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 35 }],
    'WebkitBorderRadius': '4px',
    'MozBorderRadius': '4px',
    'borderRadius': '4px',
    // -webkit-transition: all 0.7s ease 0s;
  -moz-transition: all 0.7s ease 0s;
  -o-transition: all 0.7s ease 0s;
  transition: all 0.7s ease 0s;
  },
  '#search input[type="text"]:focus': {
    // background: url(../img/search-white.png) no-repeat 14px 10px #B5C4CF;
    'color': '#FFFFFF!important',
    'width': [{ 'unit': 'px', 'value': 200 }]
  },
  'search': {
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 60 }],
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  // input[type=text] {
    color: #fff;
}
  'search-menu': {
    'borderRadius': '4px',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }]
  },
  'dark': {
    'background': 'url("../img/search-white.png") no-repeat scroll 36px 12px',
    'marginTop': [{ 'unit': 'px', 'value': -18 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }],
    'borderRadius': '4px'
  },
  'dark input[type=text]': {
    'borderBottom': [{ 'unit': 'string', 'value': 'medium' }, { 'unit': 'string', 'value': 'none' }],
    'borderTop': [{ 'unit': 'string', 'value': 'medium' }, { 'unit': 'string', 'value': 'none' }],
    'borderLeft': [{ 'unit': 'string', 'value': 'medium' }, { 'unit': 'string', 'value': 'none' }],
    'borderRight': [{ 'unit': 'string', 'value': 'medium' }, { 'unit': 'string', 'value': 'none' }],
    'color': '#FFFFFF',
    'background': 'none repeat scroll 0 0 rgba(0, 0, 0, 0.1)',
    'borderRadius': '4px'
  },
  'input[type="search"]': {
    'fontFamily': 'inherit',
    'fontSize': [{ 'unit': '%V', 'value': 1 }]
  },
  'input[type="search"]': {
    // background: url("images/search-icon.png") no-repeat scroll 9px center #EDEDED;
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#CCCCCC' }],
    'borderRadius': '10em 10em 10em 10em',
    'padding': [{ 'unit': 'px', 'value': 9 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 9 }, { 'unit': 'px', 'value': 32 }],
    'width': [{ 'unit': 'px', 'value': 55 }]
  },
  'input[type="search"]:focus': {
    'backgroundColor': '#FFFFFF',
    'borderColor': '#6DCFF6',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'string', 'value': 'rgba(109, 207, 246, 0.5)' }],
    'width': [{ 'unit': 'px', 'value': 130 }]
  },
  'input:-moz-placeholder': {
    'color': '#999999'
  },
  '#demo-b input[type="search"]': {
    'color': 'rgba(0, 0, 0, 0)',
    'cursor': 'pointer',
    'paddingLeft': [{ 'unit': 'px', 'value': 10 }],
    'width': [{ 'unit': 'px', 'value': 15 }]
  },
  '#demo-b input[type="search"]:hover': {
    'backgroundColor': '#FFFFFF'
  },
  '#demo-b input[type="search"]:focus': {
    'backgroundColor': '#FFFFFF',
    'color': '#000000',
    'cursor': 'auto',
    'paddingLeft': [{ 'unit': 'px', 'value': 32 }],
    'width': [{ 'unit': 'px', 'value': 130 }]
  },
  '#demo-b input:-moz-placeholder': {
    'color': 'rgba(0, 0, 0, 0)'
  },
  'search-hover': {
    'display': 'block',
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 45 }],
    'left': [{ 'unit': 'px', 'value': 200 }],
    'right': [{ 'unit': 'px', 'value': -100 }]
  },
  'input': {
    'outline': 'none'
  },
  'input[type=search]': {
    'WebkitAppearance': 'textfield',
    'WebkitBoxSizing': 'content-box',
    'fontFamily': 'inherit',
    'fontSize': [{ 'unit': '%V', 'value': 1 }]
  },
  'input::-webkit-search-decoration': {
    'display': 'none'
  },
  'input::-webkit-search-cancel-button': {
    'display': 'none'
  },
  'input[type=search]': {
    'background': 'url("../img/search-white.png") no-repeat scroll 18px center rgba(0, 0, 0, 0.3)',
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#DDDDDD' }],
    'padding': [{ 'unit': 'px', 'value': 9 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 14 }, { 'unit': 'px', 'value': 32 }],
    'WebkitBorderRadius': '0',
    'MozBorderRadius': '0',
    'borderRadius': '0',
    'WebkitTransition': 'all 0.1s',
    'MozTransition': 'all 0.1s',
    'transition': 'all 0.1s'
  },
  'input[type=search]:focus': {
    'width': [{ 'unit': 'px', 'value': 300 }],
    'backgroundColor': '#252D3B',
    'borderColor': '#66CC75',
    'borderRadius': '0 4px 4px 0',
    'marginRight': [{ 'unit': 'px', 'value': 100 }],
    // -webkit-box-shadow: 0 0 5px rgba(109, 207, 246, .5);
  -moz-box-shadow: 0 0 5px rgba(109, 207, 246, .5);
  box-shadow: 0 0 5px rgba(109, 207, 246, .5);
  },
  'input:-moz-placeholder': {
    'color': '#999'
  },
  'input::-webkit-input-placeholder': {
    'color': '#999'
  },
  // Demo 2
  '#demo-2 input[type=search]': {
    'color': 'rgba(0, 0, 0, 0)',
    'cursor': 'pointer',
    'paddingLeft': [{ 'unit': 'px', 'value': 10 }],
    'width': [{ 'unit': 'px', 'value': 50 }]
  },
  '#demo-2 input[type=search]:hover': {
    'backgroundColor': '#252D3B'
  },
  '#demo-2 input[type=search]:focus': {
    'width': [{ 'unit': 'px', 'value': 200 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 50 }],
    'paddingTop': [{ 'unit': 'px', 'value': 9 }],
    'color': '#252D3B',
    'cursor': 'auto',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ddd' }],
    'boxShadow': [{ 'unit': 'string', 'value': 'none!important' }, { 'unit': 'string', 'value': 'none!important' }, { 'unit': 'string', 'value': 'none!important' }, { 'unit': 'string', 'value': 'none!important' }],
    'background': 'url("../img/search-dark.png") no-repeat scroll 18px center #ffffff'
  },
  '#demo-2 input:-moz-placeholder': {
    'color': 'transparent'
  },
  '#demo-2 input::-webkit-input-placeholder': {
    'color': 'transparent'
  },
  'map-frame': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'arrival': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'fontWeight': 'bold',
    'textAlign': 'center'
  },
  'table-information': {
    'width': [{ 'unit': '%H', 'value': 0.5 }],
    'position': 'fixed',
    'right': [{ 'unit': 'px', 'value': 15 }],
    'top': [{ 'unit': 'px', 'value': 20 }]
  },
  'toogle-menu': {
    'background': 'none repeat scroll 0 0 #000000',
    'borderRadius': '0 5px 5px 0',
    'color': '#FFFFFF',
    'cursor': 'pointer',
    'height': [{ 'unit': 'px', 'value': 22 }],
    'padding': [{ 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 6 }],
    'width': [{ 'unit': 'px', 'value': 18 }]
  },
  '#tree-wrap': {
    'height': [{ 'unit': 'px', 'value': 470 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'overflowY': 'none',
    'overflowX': 'none'
  },
  '#ticker': {
    'height': [{ 'unit': 'px', 'value': 80 }],
    'listStyleType': 'none',
    'overflow': 'hidden',
    'position': 'relative',
    'right': [{ 'unit': 'px', 'value': 27 }],
    'top': [{ 'unit': 'px', 'value': 25 }],
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  '#ticker li': {
    'color': '#F4AF0B',
    'fontFamily': ''BebasNeueRegular', Arial, Helvetica, sans-serif',
    'fontSize': [{ 'unit': 'px', 'value': 80 }],
    'padding': [{ 'unit': 'px', 'value': 22 }, { 'unit': 'px', 'value': 22 }, { 'unit': 'px', 'value': 22 }, { 'unit': 'px', 'value': 22 }],
    'textAlign': 'center'
  },
  'ticker2': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'listStyleType': 'none',
    'height': [{ 'unit': 'px', 'value': 100 }, { 'unit': 'string', 'value': '!important' }],
    'position': 'relative !important',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'top': [{ 'unit': 'px', 'value': 38 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'textShadow': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#000' }]
  },
  'ticker2 li': {
    'fontFamily': ''BebasNeueRegular', Arial, Helvetica, sans-serif',
    'fontSize': [{ 'unit': 'px', 'value': 60 }],
    'color': '#F4AF0B'
  },
  '#fade': {
    'fontWeight': 'normal',
    'left': [{ 'unit': 'px', 'value': -15 }],
    'listStyleType': 'none',
    'position': 'relative'
  },
  '#fade li': {
    'fontFamily': 'Arial, Helvetica, sans-serif',
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'fontWeight': 'normal',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'textAlign': 'left',
    'lineHeight': [{ 'unit': 'px', 'value': 26 }]
  },
  'info-list': {
    'textAlign': 'center!important',
    'fontSize': [{ 'unit': 'px', 'value': 22 }],
    'fontFamily': 'Arial, Helvetica, sans-serif',
    'fontWeight': 'bold',
    'textTransform': 'uppercase',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#000' }],
    'background': '#5272ab',
    // Old browsers
    // IE9 SVG, needs conditional override of 'filter' to 'none'
    'background': 'url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDEgMSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJncmFkLXVjZ2ctZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIwJSIgeTI9IjEwMCUiPgogICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzUyNzJhYiIgc3RvcC1vcGFjaXR5PSIxIi8+CiAgICA8c3RvcCBvZmZzZXQ9IjElIiBzdG9wLWNvbG9yPSIjMmUzZDU5IiBzdG9wLW9wYWNpdHk9IjEiLz4KICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzBkMTgzMiIgc3RvcC1vcGFjaXR5PSIxIi8+CiAgPC9saW5lYXJHcmFkaWVudD4KICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSJ1cmwoI2dyYWQtdWNnZy1nZW5lcmF0ZWQpIiAvPgo8L3N2Zz4=)',
    'background': '-moz-linear-gradient(top, #5272ab 0%, #2e3d59 1%, #0d1832 100%)',
    // FF3.6+
    'background': '-webkit-gradient(linear, left top, left bottom, color-stop(0%, #5272ab), color-stop(1%, #2e3d59), color-stop(100%, #0d1832))',
    // Chrome,Safari4+
    'background': '-webkit-linear-gradient(top, #5272ab 0%, #2e3d59 1%, #0d1832 100%)',
    // Chrome10+,Safari5.1+
    'background': '-o-linear-gradient(top, #5272ab 0%, #2e3d59 1%, #0d1832 100%)',
    // Opera 11.10+
    'background': '-ms-linear-gradient(top, #5272ab 0%, #2e3d59 1%, #0d1832 100%)',
    // IE10+
    'background': 'linear-gradient(to bottom, #5272ab 0%, #2e3d59 1%, #0d1832 100%)',
    // W3C
    'filter': 'progid: DXImageTransform.Microsoft.gradient(startColorstr='#5272ab', endColorstr='#0d1832', GradientType=0)',
    // IE6-8
  },
  'info-list a': {
    'textAlign': 'center'
  },
  '#jalur': {
    'fontWeight': 'bold',
    'left': [{ 'unit': 'px', 'value': -10 }],
    'listStyleType': 'none',
    'position': 'relative',
    'height': [{ 'unit': 'px', 'value': 80 }]
  },
  '#jalur li': {
    'color': '#F4AF0B',
    'fontFamily': ''BebasNeueRegular', Arial, Helvetica, sans-serif',
    'fontSize': [{ 'unit': 'px', 'value': 210 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 100 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 100 }, { 'unit': 'px', 'value': 0 }],
    'textAlign': 'center',
    'textShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#000000' }]
  },
  'subtittle': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }, { 'unit': 'string', 'value': '!important' }],
    'fontWeight': 'normal',
    'left': [{ 'unit': 'px', 'value': 60 }],
    'position': 'relative',
    'textTransform': 'none',
    'top': [{ 'unit': 'px', 'value': -81 }],
    'fontFamily': 'Arial, Helvetica, sans-serif',
    'textShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#000' }]
  },
  'clock-ticker': {
    'borderLeft': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#062358' }],
    'background': '#F4AF0B',
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': 'px', 'value': 45 }],
    'position': 'fixed',
    'right': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 0.07 }],
    'zIndex': '1031'
  },
  // CLOCK
  'fontFace': {
    'fontFamily': ''BebasNeueRegular'',
    'src': 'url('../font/bebasneue-webfont.eot')',
    'src': 'url('../font/bebasneue-webfont.eot?#iefix') format('embedded-opentype'), url('../font/bebasneue-webfont.woff') format('woff'), url('../font/bebasneue-webfont.ttf') format('truetype'), url('../font/bebasneue-webfont.svg#bebas_neueregular') format('svg')',
    'fontWeight': 'normal',
    'fontStyle': 'normal'
  },
  'clock': {
    'position': 'fixed',
    'top': [{ 'unit': 'px', 'value': 15 }],
    'right': [{ 'unit': 'px', 'value': 10 }]
  },
  'date-top': {
    'borderRight': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.4)' }],
    'boxShadow': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(255, 255, 255, 0.1)' }],
    'float': 'left',
    'marginLeft': [{ 'unit': 'px', 'value': -30 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }]
  },
  'date-top>li': {
    'display': 'inline'
  },
  // Simple Animation
  // *
 * NEWSSTICKER
  'glyphicon': {
    'marginRight': [{ 'unit': 'px', 'value': 4 }, { 'unit': 'string', 'value': '!important' }]
  },
  'pagination glyphicon': {
    'marginRight': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }]
  },
  'pagination a': {
    'color': '#555'
  },
  'panel ul': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'listStyle': 'none'
  },
  'news-item': {
    'padding': [{ 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 4 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'dotted' }, { 'unit': 'string', 'value': '#555' }]
  },
  'panel-grid': {
    'backgroundColor': '#FFFFFF',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0)' }],
    'borderRadius': '4px',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.05)' }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }]
  },
  'running-text': {
    'background': 'none repeat scroll 0 0 rgba(0, 0, 0, 0.2)',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.2)' }],
    'borderRadius': '30px',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(255, 255, 255, 0.1)' }],
    'color': '#FFFFFF',
    'margin': [{ 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 6 }],
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 45 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }],
    'width': [{ 'unit': '%H', 'value': 0.5 }]
  },
  '#nt-title': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  '#nt-title li': {
    'listStyle': 'none outside none',
    'overflow': 'hidden',
    'textOverflow': 'ellipsis',
    'whiteSpace': 'nowrap'
  },
  'digital': {
    'borderRight': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.4)' }],
    'boxShadow': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(255, 255, 255, 0.1)' }],
    'float': 'left',
    'marginLeft': [{ 'unit': 'px', 'value': -25 }],
    'marginRight': [{ 'unit': 'px', 'value': -25 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }]
  },
  'digital li': {
    'display': 'inline'
  },
  'meridiem': {
    'fontSize': [{ 'unit': 'px', 'value': 10 }]
  },
  'tittle-content-header>div': {
    'float': 'left',
    'marginRight': [{ 'unit': 'px', 'value': 10 }]
  },
  'tickercontainer': {
    // the outer div
    'background': 'rgba(0, 0, 0, 1.0)',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 45 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'overflow': 'hidden',
    'position': 'fixed',
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'zIndex': '999'
  },
  'tickercontainer mask': {
    // that serves as a mask. so you get a sort of padding both left and right
    'position': 'relative',
    'paddingLeft': [{ 'unit': 'px', 'value': 10 }],
    'paddingRight': [{ 'unit': 'px', 'value': 10 }],
    'top': [{ 'unit': 'px', 'value': 13 }],
    'height': [{ 'unit': 'px', 'value': 20 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'overflow': 'hidden'
  },
  'ulnewsticker': {
    'font': [{ 'unit': 'string', 'value': 'bold' }, { 'unit': 'px', 'value': 35 }],
    'listStyleType': 'none',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'position': 'relative',
    'textTransform': 'uppercase'
  },
  'ulnewsticker li': {
    'float': 'left',
    'backgroundPosition': '-2px -2px',
    'backgroundRepeat': 'no-repeat',
    'color': '#FFFFFF',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 25 }],
    'paddingRight': [{ 'unit': 'px', 'value': 19 }]
  },
  'ulnewsticker a': {
    'whiteSpace': 'nowrap',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'color': '#fff',
    'font': [{ 'unit': 'string', 'value': 'bold' }, { 'unit': 'px', 'value': 10 }, { 'unit': 'string', 'value': 'Verdana' }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 50 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'ulnewsticker span': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  '#webticker2': {
    'float': 'right'
  },
  '#webticker2 li': {
    'float': 'right',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
  },
  'informasi-dtng': {
    'background': '#0C1220',
    'height': [{ 'unit': '%V', 'value': 1 }],
    'width': [{ 'unit': '%H', 'value': 0.3 }],
    'position': 'fixed',
    'right': [{ 'unit': 'px', 'value': 0 }],
    'top': [{ 'unit': 'px', 'value': 107 }],
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }]
  },
  'progress-table': {
    'marginTop': [{ 'unit': 'px', 'value': 25 }],
    'color': '#000'
  },
  'table-center': {
    'textAlign': 'center',
    'fontFamily': ''BebasNeueRegular', Arial, Helvetica, sans-serif',
    'fontSize': [{ 'unit': 'px', 'value': 22 }]
  },
  'table-halte': {
    'fontFamily': 'Arial, Helvetica, sans-serif',
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'fontWeight': 'bold',
    'textAlign': 'left !important'
  },
  'progress': {
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }]
  },
  'progressactive bar': {
    'borderRadius': '5px!important'
  },
  'progress-bg': {
    'background': '#F4AF0B',
    'borderRadius': '5px',
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }],
    'marginTop': [{ 'unit': 'px', 'value': 85 }]
  },
  'imgbus-icon': {
    'float': 'right',
    'position': 'relative',
    'right': [{ 'unit': 'px', 'value': 3 }],
    'top': [{ 'unit': 'px', 'value': 1 }],
    'zIndex': '5 !important'
  },
  'label': {
    'fontWeight': 'normal!important',
    'textTransform': 'capitalize!important'
  },
  '#label ul': {
    'marginLeft': [{ 'unit': 'px', 'value': -35 }]
  },
  '#label ul li': {
    'display': 'inline',
    'marginRight': [{ 'unit': 'px', 'value': 5 }]
  },
  // *
 * SIDEBAR
  '#menu-showhide': {
    'margin': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }]
  },
  'side-dash': {
    'margin': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }],
    'width': [{ 'unit': 'px', 'value': 230 }]
  },
  'side-dash h3': {
    'color': '#FFFFFF !important',
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'marginBottom': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'string', 'value': '!important' }],
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }]
  },
  'side-dash h3 span': {
    'background': 'none repeat scroll 0 0 rgba(0, 0, 0, 0.2)',
    'borderRadius': '24px',
    'marginLeft': [{ 'unit': 'px', 'value': -10 }],
    'padding': [{ 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 12 }],
    'textAlign': 'center'
  },
  'side-dashh-list': {
    'marginBottom': [{ 'unit': 'px', 'value': 25 }],
    'marginLeft': [{ 'unit': 'px', 'value': -30 }]
  },
  'side-bar-list': {
    'marginBottom': [{ 'unit': 'px', 'value': 25 }],
    'marginLeft': [{ 'unit': 'px', 'value': -30 }]
  },
  'side-dashh-list li': {
    'fontSize': [{ 'unit': 'px', 'value': 12 }, { 'unit': 'string', 'value': '!important' }],
    'lineHeight': [{ 'unit': 'em', 'value': 1.6 }, { 'unit': 'string', 'value': '!important' }]
  },
  'side-bar-list li': {
    'fontSize': [{ 'unit': 'px', 'value': 12 }, { 'unit': 'string', 'value': '!important' }],
    'lineHeight': [{ 'unit': 'em', 'value': 1.6 }, { 'unit': 'string', 'value': '!important' }]
  },
  'side-dashh-list span': {
    'float': 'right !important',
    'paddingRight': [{ 'unit': 'px', 'value': 15 }]
  },
  'side-dashh-list span i': {
    'left': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }],
    'marginLeft': [{ 'unit': 'px', 'value': 8 }]
  },
  'side-bar-list li': {
    'fontSize': [{ 'unit': 'px', 'value': 12 }, { 'unit': 'string', 'value': '!important' }],
    'lineHeight': [{ 'unit': 'em', 'value': 4 }, { 'unit': 'string', 'value': '!important' }]
  },
  'linebar': {
    'float': 'right',
    'marginRight': [{ 'unit': 'px', 'value': 10 }]
  },
  'linebar2': {
    'float': 'right',
    'marginRight': [{ 'unit': 'px', 'value': 10 }]
  },
  'linebar3': {
    'float': 'right',
    'marginRight': [{ 'unit': 'px', 'value': 10 }]
  },
  'scroll': {
    'float': 'left',
    'width': [{ 'unit': '%H', 'value': 0.21 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'marginLeft': [{ 'unit': '%H', 'value': 0.04 }],
    'marginTop': [{ 'unit': 'px', 'value': 40 }]
  },
  'side-bar': {
  },
  'topnav': {
    'padding': [{ 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 28 }, { 'unit': 'px', 'value': 25 }, { 'unit': 'px', 'value': 0 }]
  },
  'imgicon-menu': {
    'marginLeft': [{ 'unit': 'px', 'value': 10 }],
    'marginRight': [{ 'unit': 'px', 'value': 3 }],
    'marginTop': [{ 'unit': 'px', 'value': 3 }]
  },
  'ultopnav': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'lineHeight': [{ 'unit': 'em', 'value': 0.5 }],
    'listStyle': 'none!important',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.1)' }]
  },
  'ultopnav li': {
  },
  'ultopnav li a': {
    'color': '#FFFFFF !important',
    'display': 'block',
    'fontSize': [{ 'unit': 'px', 'value': 13 }],
    'lineHeight': [{ 'unit': 'px', 'value': 25 }],
    'listStyle': 'none outside none',
    'textDecoration': 'none',
    'textTransform': 'capitalize'
  },
  'menucon-main': {
    'color': 'red!important'
  },
  // *
 * DATA TOOLTIP
  'ui-tooltip': {
    'background': '#A6A7B3!important',
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'white!important' }]
  },
  'arrow:after': {
    'background': '#A6A7B3!important',
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'white!important' }]
  },
  'ui-tooltip': {
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 10 }],
    'color': '#ffffff!important',
    'borderRadius': '20px',
    'font': [{ 'unit': 'string', 'value': 'normal' }, { 'unit': 'px', 'value': 10 }, { 'unit': 'string', 'value': 'Neue",' }, { 'unit': 'string', 'value': 'Sans-Serif!important' }],
    'textTransform': 'none!important',
    'boxShadow': [{ 'unit': 'string', 'value': 'none!important' }, { 'unit': 'string', 'value': 'none!important' }, { 'unit': 'string', 'value': 'none!important' }, { 'unit': 'string', 'value': 'none!important' }],
    'marginTop': [{ 'unit': 'px', 'value': -80 }]
  },
  'arrow': {
    'width': [{ 'unit': 'px', 'value': 70 }],
    'height': [{ 'unit': 'px', 'value': 16 }],
    'overflow': 'hidden',
    'position': 'absolute',
    'left': [{ 'unit': '%H', 'value': 0.5 }],
    'marginLeft': [{ 'unit': 'px', 'value': -35 }],
    'bottom': [{ 'unit': 'px', 'value': -16 }]
  },
  'arrowtop': {
    'top': [{ 'unit': 'px', 'value': -16 }],
    'bottom': [{ 'unit': 'string', 'value': 'auto' }]
  },
  'arrowleft': {
    'left': [{ 'unit': '%H', 'value': 0.2 }]
  },
  'arrow:after': {
    'content': '""',
    'position': 'absolute',
    'left': [{ 'unit': 'px', 'value': 20 }],
    'top': [{ 'unit': 'px', 'value': -20 }],
    'width': [{ 'unit': 'px', 'value': 25 }],
    'height': [{ 'unit': 'px', 'value': 25 }],
    'boxShadow': [{ 'unit': 'string', 'value': 'none!important' }, { 'unit': 'string', 'value': 'none!important' }, { 'unit': 'string', 'value': 'none!important' }, { 'unit': 'string', 'value': 'none!important' }],
    'WebkitTransform': 'rotate(45deg)',
    'MozTransform': 'rotate(45deg)',
    'MsTransform': 'rotate(45deg)',
    'OTransform': 'rotate(45deg)',
    'tranform': 'rotate(45deg)'
  },
  'arrowtop:after': {
    'bottom': [{ 'unit': 'px', 'value': -20 }],
    'top': [{ 'unit': 'string', 'value': 'auto' }]
  },
  'ultopnav ul': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'ultopnav ul li': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'clear': 'both',
    'listStyle': 'none outside none'
  },
  'ultopnav ul li a': {
    'background': 'none repeat scroll 0 0 rgba(0, 0, 0, 0.3)',
    'color': 'rgba(255, 255, 255, 0.9) !important',
    'fontSize': [{ 'unit': 'px', 'value': 13 }],
    'fontWeight': 'normal',
    'outline': '0 none',
    'paddingLeft': [{ 'unit': 'px', 'value': 30 }],
    // transition: all 0.2s ease 0s;
  },
  'ultopnav ul li a i': {
  },
  'ultopnav ul ul li a': {
    'color': '#444',
    'paddingLeft': [{ 'unit': 'px', 'value': 40 }],
    'background': '#252d3b',
    'transition': 'all 0.2s ease 0s'
  },
  'ultopnav h4': {
    'float': 'right !important',
    'marginTop': [{ 'unit': 'px', 'value': -2 }]
  },
  'nest-bg': {
    'marginTop': [{ 'unit': 'px', 'value': 40 }]
  },
  'dahboard-gauge': {
    'background': '#fff',
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }],
    'borderRadius': '3px',
    'margin': [{ 'unit': 'px', 'value': 25 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'position': 'relative',
    'WebkitBoxShadow': '0 5px 5px rgba(0, 0, 0, 0.2)',
    'MozBoxShadow': '0 5px 5px rgba(0, 0, 0, 0.2)',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.2)' }]
  },
  'dahboard-gauge:after': {
    'MozBorderBottomColors': 'none',
    'MozBorderLeftColors': 'none',
    'MozBorderRightColors': 'none',
    'MozBorderTopColors': 'none',
    'backgroundColor': '#FFFFFF',
    'borderColor': '-moz-use-text-color #CCCCCC #CCCCCC',
    'borderImage': 'none',
    'borderStyle': 'none solid solid',
    'borderWidth': '0 1px 1px',
    'bottom': [{ 'unit': 'px', 'value': -3 }],
    'content': '""',
    'display': 'block',
    'height': [{ 'unit': 'px', 'value': 1 }],
    'left': [{ 'unit': 'px', 'value': 3 }],
    'position': 'absolute',
    'right': [{ 'unit': 'px', 'value': 3 }],
    'borderRadius': '0 0 3px 3px'
  },
  'dahboard-gauge:before': {
    'MozBorderBottomColors': 'none',
    'MozBorderLeftColors': 'none',
    'MozBorderRightColors': 'none',
    'MozBorderTopColors': 'none',
    'backgroundColor': '#FFFFFF',
    'borderColor': '-moz-use-text-color #CCCCCC #CCCCCC',
    'borderImage': 'none',
    'borderStyle': 'none solid solid',
    'borderWidth': '0 1px 1px',
    'bottom': [{ 'unit': 'px', 'value': -3 }],
    'content': '""',
    'display': 'block',
    'height': [{ 'unit': 'px', 'value': 1 }],
    'left': [{ 'unit': 'px', 'value': 3 }],
    'position': 'absolute',
    'right': [{ 'unit': 'px', 'value': 3 }],
    'borderRadius': '0 0 3px 3px'
  },
  'dahboard-gauge:before': {
    'bottom': [{ 'unit': 'px', 'value': -5 }],
    'left': [{ 'unit': 'px', 'value': 6 }],
    'right': [{ 'unit': 'px', 'value': 6 }]
  },
  // *
 * TOP NAVBAR
  'navbar-inverse navbar-inner': {
    'background': '#20262E !important',
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#FFFFFF' }, { 'unit': 'string', 'value': '!important' }],
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': '!important' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': '!important' }]
  },
  'navbar-color': {
    'borderBottom': [{ 'unit': 'px', 'value': 4 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#FFFFFF' }],
    'borderTop': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#0F1D2F' }]
  },
  'noft-pos': {
    'position': 'absolute!important',
    'top': [{ 'unit': 'px', 'value': -10 }],
    'zIndex': '2147483647',
    'right': [{ 'unit': 'px', 'value': 0 }]
  },
  'badge': {
    'borderRadius': '9px 9px 9px 9px',
    'paddingLeft': [{ 'unit': 'px', 'value': 6 }],
    'paddingRight': [{ 'unit': 'px', 'value': 6 }]
  },
  'navbar brand': {
    'fontSize': [{ 'unit': 'px', 'value': 22 }, { 'unit': 'string', 'value': '!important' }],
    'letterSpacing': [{ 'unit': 'px', 'value': -2 }],
    'textTransform': 'uppercase'
  },
  'navbar brand span': {
    'textTransform': 'uppercase',
    'fontWeight': 'bold',
    'letterSpacing': [{ 'unit': 'px', 'value': -2 }]
  },
  'navbar brand i': {
    'backgroundColor': 'rgba(0, 0, 0, 0.3)',
    'borderRadius': '2px 2px 2px 2px',
    'color': '#F4F4F4',
    'fontSize': [{ 'unit': 'px', 'value': 9 }],
    'fontStyle': 'normal',
    'letterSpacing': [{ 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 3 }],
    'position': 'relative',
    'right': [{ 'unit': 'px', 'value': -7 }],
    'top': [{ 'unit': 'px', 'value': -4 }]
  },
  'devider-nav-top': {
    'width': [{ 'unit': 'px', 'value': 2 }],
    'height': [{ 'unit': 'px', 'value': 60 }],
    'borderRight': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.3)' }],
    'display': 'block',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 7 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'btn-wigdet': {
    'margin': [{ 'unit': 'px', 'value': -7 }, { 'unit': 'px', 'value': 25 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'input-widget': {
    'margin': [{ 'unit': 'px', 'value': -7 }, { 'unit': 'px', 'value': 25 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'margin-iconic': {
    'marginRight': [{ 'unit': 'px', 'value': 10 }]
  },
  // *
 * SLIDE PANEL
  'wrapper': {
    'background': '#fff',
    'height': [{ 'unit': 'px', 'value': 200 }],
    'width': [{ 'unit': 'px', 'value': 300 }]
  },
  '#theme-drawer': {
    'color': '#000',
    'float': 'right'
  },
  '#sidePanel': {
    'width': [{ 'unit': 'px', 'value': 500 }],
    'position': 'fixed',
    'right': [{ 'unit': 'px', 'value': -220 }],
    'top': [{ 'unit': 'px', 'value': 0 }]
  },
  '#panelHandle': {
    'background': 'none repeat scroll 0 0 #000000',
    'borderRadius': '5px 0 0 5px',
    'cursor': 'pointer',
    'float': 'left',
    'height': [{ 'unit': 'px', 'value': 26 }],
    'left': [{ 'unit': 'px', 'value': -320 }],
    'padding': [{ 'unit': 'px', 'value': 7 }, { 'unit': 'px', 'value': 7 }, { 'unit': 'px', 'value': 7 }, { 'unit': 'px', 'value': 7 }],
    'position': 'relative',
    'width': [{ 'unit': 'px', 'value': 26 }],
    'top': [{ 'unit': 'px', 'value': 150 }]
  },
  '#panelContent': {
    'float': 'left',
    'width': [{ 'unit': 'px', 'value': 250 }],
    'height': [{ 'unit': 'px', 'value': 600 }],
    'backgroundColor': 'rgba(255, 255, 255, 0.8)',
    'borderRadius': '0',
    'padding': [{ 'unit': 'px', 'value': 80 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 15 }]
  },
  '#panelContent h4': {
    'color': '#000'
  },
  '#panelHandle p': {
    'MozTransform': 'rotate(90deg)',
    'WebkitTransform': 'rotate(90deg)',
    'color': '#FFFFFF',
    'fontSize': [{ 'unit': 'px', 'value': 24 }],
    'fontWeight': 'bold',
    'right': [{ 'unit': 'px', 'value': -4 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'position': 'relative',
    'top': [{ 'unit': 'px', 'value': 26 }]
  },
  // *
 * BREADCRUMB
  'wrap-pagination': {
    'height': [{ 'unit': 'px', 'value': 50 }],
    'background': '#ffffff',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'position': 'fixed',
    'top': [{ 'unit': 'px', 'value': 61 }]
  },
  'breadcrumb': {
    'backgroundColor': '#F5F5F5 !important',
    'borderRadius': '0 !important',
    'listStyle': 'none outside none !important',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'string', 'value': '!important' }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }],
    'zIndex': '99'
  },
  'breadcrumb li': {
    'display': 'inline-block',
    'textShadow': [{ 'unit': 'string', 'value': 'none!important' }, { 'unit': 'string', 'value': 'none!important' }, { 'unit': 'string', 'value': 'none!important' }, { 'unit': 'string', 'value': 'none!important' }]
  },
  'breadcrumb li a': {
    'color': '#555 !important',
    'fontSize': [{ 'unit': 'px', 'value': 13 }],
    'transition': 'all 0.4s ease 0s'
  },
  'breadcrumb li a:hover': {
    'color': '#6ADAE4 !important',
    'textDecoration': 'none'
  },
  'nav-date-picker': {
    'cursor': 'pointer',
    'paddingLeft': [{ 'unit': 'px', 'value': 20 }]
  },
  'datepicker-headline': {
    'fontStyle': 'normal',
    'marginRight': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'string', 'value': '!important' }]
  },
  'datepicker-wrap': {
    'position': 'absolute',
    'right': [{ 'unit': 'px', 'value': 84 }]
  },
  '#breadcrumb': {
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.04)' }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'overflow': 'hidden',
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 20 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'background': 'none repeat scroll 0 0 rgba(0, 0, 0, 0.02)'
  },
  '#breadcrumb li': {
    'listStyleType': 'none',
    'float': 'left',
    'paddingLeft': [{ 'unit': 'px', 'value': 10 }]
  },
  '#breadcrumb linkWay>span': {
    'listStyleType': 'none',
    'float': 'left',
    'paddingLeft': [{ 'unit': 'px', 'value': 10 }]
  },
  '#breadcrumb a': {
    'height': [{ 'unit': 'px', 'value': 30 }],
    'display': 'block',
    'backgroundImage': 'url('')',
    'backgroundRepeat': 'no-repeat',
    'backgroundPosition': 'right',
    'paddingRight': [{ 'unit': 'px', 'value': 0 }],
    'textDecoration': 'none',
    'color': '#555'
  },
  'home': {
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'margin': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 0 }]
  },
  // *
 * CONTENT
  'form_center': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'width': [{ 'unit': '%H', 'value': 0.7 }]
  },
  'top-val': {
    'marginBottom': [{ 'unit': 'px', 'value': 20 }]
  },
  'put-dash': {
    'backgroundColor': 'rgba(0, 0, 0, 0.05) !important'
  },
  'tittle-content': {
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.2)' }],
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#FFFFFF' }],
    'display': 'none',
    'height': [{ 'unit': 'px', 'value': 40 }],
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'tittle-content-header': {
    'color': '#555 !important',
    'fontFamily': '"Open Sans"',
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'fontWeight': 'normal',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 60 }],
    'textTransform': 'uppercase'
  },
  'tittle-content-header>span>i': {
    'fontSize': [{ 'unit': 'px', 'value': 13 }],
    'fontStyle': 'normal',
    'fontWeight': 'normal',
    'textTransform': 'capitalize'
  },
  'tittle-content-header span': {
  },
  'tittle-middle-header': {
    'margin': [{ 'unit': 'px', 'value': -17 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': -17 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 0 }]
  },
  'tittle-alert': {
    'color': '#4AC4BC'
  },
  'nest': {
    'background': 'none repeat scroll 0 0 #fff',
    'clear': 'both',
    'position': 'relative',
    'borderRadius': '3px'
  },
  'nest': {
  },
  'middleNav': {
  },
  'sItem': {
  },
  'statsDetailed': {
  },
  'nest title': {
    'height': [{ 'unit': 'px', 'value': 50 }],
    'backgroundColor': '#595F69',
    'borderRadius': '4px 4px 0 0'
  },
  'nest title h6': {
    'color': '#F1F1F1',
    'float': 'left',
    'fontFamily': ''Open Sans Condensed', serif',
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'fontWeight': 'normal',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 12 }],
    'position': 'relative',
    'textTransform': 'uppercase',
    'top': [{ 'unit': 'px', 'value': 4 }]
  },
  'slidder-bar-nest': {
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }],
    'marginBottom': [{ 'unit': 'px', 'value': 30 }]
  },
  'nest title titleIcon': {
    'background': 'none repeat scroll 0 0 #323a45',
    'borderRadius': '3px 0 0 0',
    'color': '#fff',
    'float': 'left',
    'fontSize': [{ 'unit': 'px', 'value': 18 }],
    'height': [{ 'unit': 'px', 'value': 30 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 13 }, { 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 7 }, { 'unit': 'px', 'value': 18 }],
    'width': [{ 'unit': 'px', 'value': 21 }]
  },
  'nest title titleToggle': {
    'borderRadius': '3px 0 0',
    'float': 'right',
    'fontSize': [{ 'unit': 'px', 'value': 24 }],
    'margin': [{ 'unit': 'px', 'value': 14 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'nav-toggle': {
    'color': '#FFF',
    'position': 'relative'
  },
  'nav-toggle:hover': {
    'color': '#323A45'
  },
  'nest title titleClose': {
    'borderRadius': '3px 0 0',
    'float': 'right',
    'fontSize': [{ 'unit': 'px', 'value': 24 }],
    'margin': [{ 'unit': 'px', 'value': 14 }, { 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'gone': {
    'color': 'rgba(0, 0, 0, 0.2)',
    'position': 'relative'
  },
  'gone:hover': {
    'color': 'rgba(0, 0, 0, 0.5)'
  },
  'fullexe': {
    'background': 'none repeat scroll 0 0 #FFFFFF',
    'borderRadius': '3px',
    'color': '#595F69',
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'padding': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 5 }],
    'position': 'relative',
    'right': [{ 'unit': 'px', 'value': -7 }],
    'top': [{ 'unit': 'px', 'value': -4 }]
  },
  'fullexe:hover': {
    'color': '#fff',
    'background': 'none repeat scroll 0 0 #323A45'
  },
  'body-nest': {
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }],
    'background': 'none repeat scroll 0 0 #ffffff',
    'borderRadius': '0 0 4px 4px'
  },
  'page-extra': {
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }],
    'background': 'none repeat scroll 0 0 #ffffff',
    'margin': [{ 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'borderRadius': '4px'
  },
  'page-error': {
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }],
    'margin': [{ 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 0.5 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'position': 'relative',
    'zIndex': '5000'
  },
  'imgsidebar-icon': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'float': 'left'
  },
  'copyright': {
    'bottom': [{ 'unit': 'px', 'value': 5 }],
    'color': '#000000',
    'fontSize': [{ 'unit': 'px', 'value': 11 }, { 'unit': 'string', 'value': '!important' }],
    'position': 'fixed',
    'right': [{ 'unit': 'px', 'value': 10 }]
  },
  // *
 *TITLE NAV ALT
  'nest title-alt': {
    'borderRadius': '4px 4px 0 0',
    'height': [{ 'unit': 'px', 'value': 50 }],
    'margin': [{ 'unit': 'px', 'value': 30 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'dotted' }, { 'unit': 'string', 'value': '#DDDDDD' }]
  },
  'nest title-alt h6': {
    'color': '#555',
    'float': 'left',
    'fontFamily': ''Open Sans', serif',
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'fontWeight': 'normal',
    'left': [{ 'unit': 'px', 'value': 15 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 5 }],
    'position': 'relative',
    'textTransform': 'uppercase',
    'top': [{ 'unit': 'px', 'value': 6 }]
  },
  'nest title-alt titleIcon': {
    'background': 'none repeat scroll 0 0 #323a45',
    'borderRadius': '3px 0 0 0',
    'color': '#555',
    'float': 'left',
    'fontSize': [{ 'unit': 'px', 'value': 18 }],
    'height': [{ 'unit': 'px', 'value': 30 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 13 }, { 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 7 }, { 'unit': 'px', 'value': 18 }],
    'width': [{ 'unit': 'px', 'value': 21 }]
  },
  'nest title-alt titleToggle': {
    'borderRadius': '3px 0 0',
    'float': 'right',
    'margin': [{ 'unit': 'px', 'value': 14 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'nest title-alt titleToggle nav-toggle-alt': {
    'color': '#DDDDDD',
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'position': 'relative'
  },
  'nest title-alt titleToggle nav-toggle-alt:hover': {
    'color': '#3498DB'
  },
  'nest title-alt titleClose': {
    'borderRadius': '3px 0 0',
    'float': 'right',
    'margin': [{ 'unit': 'px', 'value': 14 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'nest title-alt titleClose gone': {
    'color': '#DDDDDD',
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'position': 'relative'
  },
  'nest title-alt titleClose gone:hover': {
    'color': '#FF0064'
  },
  'nest title-alt titleFull': {
    'borderRadius': '3px 0 0',
    'float': 'right',
    'fontSize': [{ 'unit': 'px', 'value': 24 }],
    'margin': [{ 'unit': 'px', 'value': 14 }, { 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'display': 'none'
  },
  'nest title-alt titleFull fullexe': {
    'background': 'none repeat scroll 0 0 rgba(0, 0, 0, 0)',
    'color': '#DDDDDD',
    'fontSize': [{ 'unit': 'px', 'value': 19 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'position': 'relative',
    'right': [{ 'unit': 'px', 'value': -5 }],
    'top': [{ 'unit': 'px', 'value': 0 }]
  },
  'nest title-alt titleFull fullexe:hover': {
    'color': '#6ADAE4'
  },
  // REALTIME
  'direction': {
    'textDecoration': 'none',
    'marginTop': [{ 'unit': 'px', 'value': -20 }]
  },
  'direction li': {
    'listStyle': 'none outside none',
    'margin': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }],
    'textDecoration': 'none'
  },
  'direction-icon': {
    'borderRadius': '50%',
    'color': '#FFFFFF',
    'float': 'left',
    'fontSize': [{ 'unit': 'px', 'value': 34 }],
    'height': [{ 'unit': 'px', 'value': 55 }],
    'left': [{ 'unit': 'px', 'value': -25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 50 }],
    'position': 'relative',
    'textAlign': 'center',
    'width': [{ 'unit': 'px', 'value': 55 }]
  },
  'direction p': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'direction h3': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'direction h3 span': {
    'background': 'none repeat scroll 0 0 #A8BDCF',
    'borderRadius': '3px',
    'color': '#FFFFFF',
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }],
    'position': 'relative',
    'textTransform': 'uppercase',
    'top': [{ 'unit': 'px', 'value': -3 }]
  },
  'direction divider': {
    'background': 'none repeat scroll 0 0 #F1F1F1',
    'height': [{ 'unit': 'px', 'value': 1 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'marginBottom': [{ 'unit': 'px', 'value': 0 }],
    'marginLeft': [{ 'unit': 'px', 'value': 0 }],
    'marginRight': [{ 'unit': 'px', 'value': 0 }],
    'marginTop': [{ 'unit': 'px', 'value': -12 }, { 'unit': 'string', 'value': '!important' }],
    'position': 'absolute',
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'armada>span': {
    'background': 'none repeat scroll 0 0 #ddd',
    'borderRadius': '0 10px 10px 0',
    'color': '#FFFFFF',
    'left': [{ 'unit': 'px', 'value': -5 }],
    'padding': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 10 }],
    'position': 'relative',
    'textTransform': 'uppercase',
    'top': [{ 'unit': 'px', 'value': -5 }]
  },
  'armada>p': {
    'fontWeight': 'bold'
  },
  'armada i': {
    'fontSize': [{ 'unit': 'px', 'value': 11 }],
    'fontWeight': 'normal',
    'textTransform': 'lowercase'
  },
  'armada-devider': {
    'borderRight': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'dashed' }, { 'unit': 'string', 'value': '#DDDDDD' }],
    'width': [{ 'unit': '%H', 'value': 0.23 }],
    'paddingTop': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'string', 'value': '!important' }]
  },
  'driver-devider': {
    'width': [{ 'unit': '%H', 'value': 0.4 }],
    'paddingTop': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'string', 'value': '!important' }]
  },
  'driver-devider>h3': {
    'float': 'left',
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'fontWeight': 'bold',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'driver-devider>p': {
    'float': 'left',
    'left': [{ 'unit': 'px', 'value': -20 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }],
    'position': 'relative'
  },
  'armada-pic': {
    'border': [{ 'unit': 'px', 'value': 4 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.1)' }],
    'display': 'inline-block',
    'float': 'left',
    'marginRight': [{ 'unit': 'px', 'value': 19 }],
    'marginTop': [{ 'unit': 'px', 'value': -5 }],
    'width': [{ 'unit': 'px', 'value': 52 }]
  },
  'progress-devider span': {
    'marginTop': [{ 'unit': 'px', 'value': 0 }]
  },
  'progress-bar-plane': {
    'backgroundColor': '#AB6DB0'
  },
  'chart-wrap': {
    'backgroundColor': '#FFFFFF',
    'borderRadius': '4px',
    'minHeight': [{ 'unit': 'px', 'value': 307 }],
    'padding': [{ 'unit': 'px', 'value': 280 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }],
    'position': 'relative',
    'marginTop': [{ 'unit': 'px', 'value': 30 }]
  },
  'chart-dash': {
    'background': 'none repeat scroll 0 0 #45B6B0',
    'borderRadius': '4px 4px 0 0',
    'left': [{ 'unit': 'px', 'value': 0 }],
    'minHeight': [{ 'unit': 'px', 'value': 200 }],
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'zIndex': '0',
    'padding': [{ 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 30 }]
  },
  'weather-wrap': {
    'backgroundColor': '#65C3DF',
    'backgroundRepeat': 'no-repeat',
    'backgroundSize': '100% 100%',
    'borderRadius': '4px',
    'color': '#FFFFFF',
    'minHeight': [{ 'unit': 'px', 'value': 307 }],
    'position': 'relative',
    'marginTop': [{ 'unit': 'px', 'value': 30 }]
  },
  'berlin': {
    'borderRadius': '4px 4px 0 0',
    'clip': 'rect(0px, auto, 80%, 0px)',
    'position': 'absolute',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 0.65 }]
  },
  'temperature': {
    'fontSize': [{ 'unit': 'px', 'value': 21 }],
    'margin': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }],
    'zIndex': '1'
  },
  'temperature span': {
    'float': 'right'
  },
  'weather-icon': {
    'margin': [{ 'unit': 'px', 'value': 70 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }],
    'zIndex': '1'
  },
  'weather-icon i': {
    'fontSize': [{ 'unit': 'px', 'value': 90 }]
  },
  'weather-text': {
  },
  'weather-text>h3': {
    'float': 'right',
    'fontSize': [{ 'unit': 'px', 'value': 57 }],
    'letterSpacing': [{ 'unit': 'px', 'value': -8 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 25 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 25 }],
    'position': 'relative'
  },
  'weather-text>h3>i': {
    'fontSize': [{ 'unit': 'px', 'value': 47 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }]
  },
  'weather-text>h2': {
    'fontSize': [{ 'unit': 'px', 'value': 30 }],
    'fontWeight': '600',
    'letterSpacing': [{ 'unit': 'px', 'value': -1 }],
    'position': 'relative',
    'top': [{ 'unit': 'px', 'value': 30 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 25 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 25 }]
  },
  'weather-text>h2>i': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'fontStyle': 'normal',
    'position': 'relative',
    'top': [{ 'unit': 'px', 'value': -15 }]
  },
  'weather-dash': {
    'background': 'none repeat scroll 0 0 rgba(255, 255, 255, 0.2)',
    'padding': [{ 'unit': '%V', 'value': 0.05 }, { 'unit': 'px', 'value': 20 }, { 'unit': '%V', 'value': 0.05 }, { 'unit': 'px', 'value': 20 }]
  },
  'daily-weather': {
    'textAlign': 'center'
  },
  'daily-weather>h2': {
    'background': 'none repeat scroll 0 0 rgba(0, 0, 0, 0.2)',
    'borderRadius': '3px',
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }],
    'textAlign': 'center',
    'textTransform': 'uppercase'
  },
  'daily-weather>h3': {
    'fontSize': [{ 'unit': 'px', 'value': 30 }],
    'fontWeight': 'bold',
    'margin': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }],
    'textAlign': 'center',
    'textTransform': 'uppercase'
  },
  'daily-weather h3 span': {
    'fontSize': [{ 'unit': 'px', 'value': 15 }]
  },
  'daily-weather>h4': {
    'fontSize': [{ 'unit': 'px', 'value': 30 }],
    'margin': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }],
    'textAlign': 'center',
    'textTransform': 'uppercase'
  },
  'daily-weather>h5': {
    'fontSize': [{ 'unit': 'px', 'value': 18 }],
    'fontWeight': 'normal',
    'margin': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 0 }],
    'textAlign': 'center',
    'textTransform': 'uppercase'
  },
  'daily-weather>h5>p': {
    'fontSize': [{ 'unit': 'px', 'value': 12 }]
  },
  'traffic>h2': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'traffic>h1': {
    'color': '#45B6B0',
    'fontSize': [{ 'unit': 'px', 'value': 35 }],
    'fontWeight': '600',
    'margin': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }]
  },
  'speed>h2': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'speed>h1': {
    'color': '#45B6B0',
    'fontSize': [{ 'unit': 'px', 'value': 50 }],
    'fontWeight': '600',
    'margin': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }]
  },
  'speed>h1>span': {
    'background': 'none repeat scroll 0 0 #45B6B0',
    'borderRadius': '3px',
    'color': '#FFFFFF',
    'fontSize': [{ 'unit': 'px', 'value': 11 }],
    'fontWeight': 'normal',
    'left': [{ 'unit': 'px', 'value': -5 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }],
    'position': 'relative',
    'textTransform': 'uppercase'
  },
  'traffic-rates>h4': {
    'background': 'none repeat scroll 0 0 #45B6B0',
    'borderRadius': '4px',
    'color': '#FFFFFF',
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'fontWeight': 'normal',
    'marginTop': [{ 'unit': 'px', 'value': 25 }],
    'padding': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 0 }],
    'textAlign': 'center'
  },
  'traffic-rates>h1': {
    'color': '#45B6B0',
    'fontSize': [{ 'unit': 'px', 'value': 28 }],
    'fontWeight': '600',
    'textAlign': 'center'
  },
  'traffic-rates>h1>span': {
    'fontSize': [{ 'unit': 'px', 'value': 11 }]
  },
  // PULGIN CONTENT
  'tooltip-examples': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'tooltip-examples li': {
    'display': 'inline'
  },
  'tooltip-examples li a': {
    'textDecoration': 'none',
    'color': '#666666',
    'cursor': 'pointer',
    'marginLeft': [{ 'unit': 'px', 'value': 10 }]
  },
  // *
 *  CHECKBOX
  'check-box-list': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'check-box-list li': {
    'display': 'inline-block',
    'textDecoration': 'none',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'list': {
    'float': 'left',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'paddingRight': [{ 'unit': 'px', 'value': 60 }]
  },
  'list li': {
    'position': 'relative',
    'listStyle': 'none'
  },
  'list label': {
    'position': 'relative',
    'right': [{ 'unit': 'px', 'value': -26 }],
    'top': [{ 'unit': 'px', 'value': -20 }]
  },
  'warning-color': {
    'background': '#595F69!important',
    'color': '#FFF!important'
  },
  'dash-ico': {
    'fontSize': [{ 'unit': 'px', 'value': 45 }]
  },
  'chat-left': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 0.8 }],
    'color': '#ffffff',
    'padding': [{ 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 12 }],
    'background': 'rgb(26, 188, 156)',
    'WebkitBorderRadius': '5px',
    'MozBorderRadius': '5px',
    'borderRadius': '5px',
    'left': [{ 'unit': 'px', 'value': 22 }]
  },
  'chat-left:after': {
    'content': '''',
    'position': 'absolute',
    'borderStyle': 'solid',
    'borderWidth': '13px 15px 13px 0',
    'borderColor': 'transparent rgb(26, 188, 156)',
    'display': 'block',
    'width': [{ 'unit': 'px', 'value': 0 }],
    'zIndex': '1',
    'marginTop': [{ 'unit': 'px', 'value': -13 }],
    'left': [{ 'unit': 'px', 'value': -15 }],
    'top': [{ 'unit': 'px', 'value': 30 }]
  },
  'chat-right': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 0.8 }],
    'color': '#fff',
    'padding': [{ 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 12 }],
    'background': '#3498DB',
    'WebkitBorderRadius': '3px',
    'MozBorderRadius': '3px',
    'borderRadius': '5px',
    'left': [{ 'unit': 'px', 'value': 0 }]
  },
  'chat-right:after': {
    'content': '''',
    'position': 'absolute',
    'borderStyle': 'solid',
    'borderWidth': '13px 0 13px 15px',
    'borderColor': 'transparent #3498DB',
    'display': 'block',
    'width': [{ 'unit': 'px', 'value': 0 }],
    'zIndex': '1',
    'marginTop': [{ 'unit': 'px', 'value': -13 }],
    'right': [{ 'unit': 'px', 'value': -15 }],
    'top': [{ 'unit': 'px', 'value': 30 }]
  },
  'media-heading': {
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'dotted' }, { 'unit': 'string', 'value': 'rgba(255, 255, 255, 0.5)' }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }]
  },
  'message-form': {
    'margin': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'background': '#f8f8f8'
  },
  'graphControls': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }]
  },
  'gauge': {
    'textAlign': 'center',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }]
  },
  'fullscreen': {
    'display': 'block',
    'position': 'fixed',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'overflowY': 'scroll',
    'overflowX': 'hidden',
    'zIndex': '9999',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'background': 'inherit',
    'backgroundColor': '#fff'
  },
  'body-flow': {
    'overflowY': 'hidden'
  },
  'body-flow-scroll': {
    'overflowY': 'auto!important'
  },
  // *
 * TOP DASHBOARD
  'profit': {
    'backgroundColor': '#FFFFFF',
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }],
    'color': 'rgba(0, 0, 0, 0.4)',
    'position': 'relative',
    'borderRadius': '4px',
    'marginBottom': [{ 'unit': 'px', 'value': 15 }],
    'zIndex': '0'
  },
  'profit headline': {
    'color': '#fff',
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 40 }]
  },
  'profit headline h3': {
    'fontSize': [{ 'unit': 'px', 'value': 15 }],
    'fontWeight': 'normal',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }],
    'textTransform': 'uppercase'
  },
  'profit headline h3 span': {
    'backgroundColor': '#FF6B6B',
    'borderRadius': '20px',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }]
  },
  'profit headline h3 i': {
    'fontStyle': 'normal',
    'marginLeft': [{ 'unit': 'px', 'value': 5 }]
  },
  'profit value': {
    'borderRadius': '6px',
    'font': [{ 'unit': 'em', 'value': 5 }, { 'unit': 'string', 'value': 'Open' }, { 'unit': 'string', 'value': 'Sans' }],
    'letterSpacing': [{ 'unit': 'px', 'value': -3 }],
    'margin': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'position': 'relative',
    'textAlign': 'center',
    'color': '#FF6B6B'
  },
  'profit value span': {
    'fontSize': [{ 'unit': 'px', 'value': 60 }],
    'marginRight': [{ 'unit': 'px', 'value': 10 }],
    'position': 'relative',
    'top': [{ 'unit': 'px', 'value': 0 }]
  },
  'start-min': {
    'fontSize': [{ 'unit': 'px', 'value': 30 }],
    'textIndent': '0!important'
  },
  'clock-position': {
    'top': [{ 'unit': 'px', 'value': -20 }],
    'position': 'relative',
    'right': [{ 'unit': 'px', 'value': -6 }]
  },
  'getting-started': {
    'position': 'relative',
    'left': [{ 'unit': 'px', 'value': -20 }]
  },
  'profit value i': {
    'fontSize': [{ 'unit': 'px', 'value': 27 }],
    'fontStyle': 'normal',
    'letterSpacing': [{ 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }],
    'textTransform': 'uppercase'
  },
  'profit value b': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'fontStyle': 'normal',
    'fontWeight': 'normal',
    'letterSpacing': [{ 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }],
    'textTransform': 'uppercase'
  },
  'profit profit-line': {
    'textAlign': 'center'
  },
  'revenue': {
    'backgroundColor': '#FFFFFF',
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }],
    'color': 'rgba(0, 0, 0, 0.4)',
    'position': 'relative',
    'borderRadius': '4px',
    'marginBottom': [{ 'unit': 'px', 'value': 15 }]
  },
  'revenue headline': {
    'color': '#fff',
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 40 }]
  },
  'revenue headline h3': {
    'fontSize': [{ 'unit': 'px', 'value': 15 }],
    'fontWeight': 'normal',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }],
    'textTransform': 'uppercase'
  },
  'revenue headline h3 span': {
    'backgroundColor': '#FFA200',
    'borderRadius': '20px',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }]
  },
  'revenue headline h3 i': {
    'fontStyle': 'normal',
    'marginLeft': [{ 'unit': 'px', 'value': 5 }]
  },
  'revenue value': {
    'borderRadius': '6px',
    'font': [{ 'unit': 'em', 'value': 5 }, { 'unit': 'string', 'value': 'Open' }, { 'unit': 'string', 'value': 'Sans' }],
    'letterSpacing': [{ 'unit': 'px', 'value': -3 }],
    'margin': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'position': 'relative',
    'textAlign': 'center',
    'color': '#FFA200'
  },
  'revenue value span': {
    'fontSize': [{ 'unit': 'px', 'value': 25 }],
    'marginRight': [{ 'unit': 'px', 'value': 5 }],
    'position': 'relative',
    'top': [{ 'unit': 'px', 'value': -20 }]
  },
  'revenue profit-line': {
    'textAlign': 'center'
  },
  'revenue value i': {
    'fontSize': [{ 'unit': 'px', 'value': 27 }],
    'fontStyle': 'normal',
    'letterSpacing': [{ 'unit': 'px', 'value': -1 }],
    'margin': [{ 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'textTransform': 'uppercase'
  },
  'b#speed': {
    'fontWeight': 'normal',
    'fontSize': [{ 'unit': 'px', 'value': 60 }]
  },
  'gauge-position': {
    'top': [{ 'unit': 'px', 'value': 30 }],
    'position': 'relative',
    'right': [{ 'unit': 'px', 'value': -20 }]
  },
  'order': {
    'backgroundColor': '#FFFFFF',
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }],
    'color': 'rgba(0, 0, 0, 0.4)',
    'position': 'relative',
    'borderRadius': '4px',
    'marginBottom': [{ 'unit': 'px', 'value': 15 }]
  },
  'order headline': {
    'color': '#fff',
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 40 }]
  },
  'order headline h3': {
    'fontSize': [{ 'unit': 'px', 'value': 15 }],
    'fontWeight': 'normal',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }],
    'textTransform': 'uppercase'
  },
  'order headline h3 span': {
    'backgroundColor': '#45B6B0',
    'borderRadius': '20px',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }]
  },
  'order headline h3 i': {
    'fontStyle': 'normal'
  },
  'order value': {
    'borderRadius': '6px',
    'font': [{ 'unit': 'em', 'value': 5 }, { 'unit': 'string', 'value': 'Open' }, { 'unit': 'string', 'value': 'Sans' }],
    'letterSpacing': [{ 'unit': 'px', 'value': -3 }],
    'margin': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'position': 'relative',
    'textAlign': 'center',
    'color': '#45B6B0'
  },
  'order value span': {
    'fontSize': [{ 'unit': 'px', 'value': 25 }],
    'marginRight': [{ 'unit': 'px', 'value': 5 }],
    'position': 'relative',
    'top': [{ 'unit': 'px', 'value': -20 }]
  },
  'order profit-line': {
    'textAlign': 'center'
  },
  'order value i': {
    'fontSize': [{ 'unit': 'px', 'value': 27 }],
    'fontStyle': 'normal',
    'letterSpacing': [{ 'unit': 'px', 'value': -1 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }],
    'textTransform': 'uppercase'
  },
  'order value b': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'fontStyle': 'normal',
    'letterSpacing': [{ 'unit': 'px', 'value': -1 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }],
    'textTransform': 'uppercase',
    'fontWeight': 'normal'
  },
  'member': {
    'backgroundColor': '#FFFFFF',
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }],
    'color': 'rgba(0, 0, 0, 0.4)',
    'position': 'relative',
    'borderRadius': '4px',
    'marginBottom': [{ 'unit': 'px', 'value': 15 }]
  },
  'member headline': {
    'color': '#fff',
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 40 }]
  },
  'member headline h3': {
    'fontSize': [{ 'unit': 'px', 'value': 15 }],
    'fontWeight': 'normal',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }]
  },
  'member headline h3 span': {
    'backgroundColor': '#65C3DF',
    'borderRadius': '20px',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }]
  },
  'member headline h3 i': {
    'fontStyle': 'normal'
  },
  'member value': {
    'borderRadius': '6px',
    'font': [{ 'unit': 'em', 'value': 5 }, { 'unit': 'string', 'value': 'Open' }, { 'unit': 'string', 'value': 'Sans' }],
    'letterSpacing': [{ 'unit': 'px', 'value': -3 }],
    'margin': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'position': 'relative',
    'textAlign': 'center',
    'color': '#65C3DF'
  },
  'member value span': {
    'fontSize': [{ 'unit': 'px', 'value': 25 }],
    'marginRight': [{ 'unit': 'px', 'value': 5 }],
    'position': 'relative',
    'top': [{ 'unit': 'px', 'value': -20 }]
  },
  'member value b': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'fontStyle': 'normal',
    'fontWeight': 'normal',
    'letterSpacing': [{ 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }],
    'textTransform': 'uppercase'
  },
  'member profit-line': {
    'textAlign': 'center',
    'fontSize': [{ 'unit': 'px', 'value': 12 }]
  },
  'member value i': {
    'fontSize': [{ 'unit': 'px', 'value': 27 }],
    'fontStyle': 'normal',
    'letterSpacing': [{ 'unit': 'px', 'value': -1 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }]
  },
  'profit headline titleClose': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'position': 'absolute',
    'right': [{ 'unit': 'px', 'value': 17 }],
    'top': [{ 'unit': 'px', 'value': 10 }]
  },
  'revenue headline titleClose': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'position': 'absolute',
    'right': [{ 'unit': 'px', 'value': 17 }],
    'top': [{ 'unit': 'px', 'value': 10 }]
  },
  'order headline titleClose': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'position': 'absolute',
    'right': [{ 'unit': 'px', 'value': 17 }],
    'top': [{ 'unit': 'px', 'value': 10 }]
  },
  'member headline titleClose': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'position': 'absolute',
    'right': [{ 'unit': 'px', 'value': 17 }],
    'top': [{ 'unit': 'px', 'value': 10 }]
  },
  // *
 * PAPER FLOAD
  'paper-wrap': {
    'backgroundColor': 'none repeat scroll 0 0 #ffffff',
    'backgroundPosition': '-1px 0',
    'backgroundRepeat': 'no-repeat',
    'position': 'relative',
    'overflow': 'hidden',
    'background': 'linear-gradient(45deg, transparent 20px, green 20px), linear-gradient(135deg, transparent 20px, green 20px), linear-gradient(225deg, transparent 20px, green 20px), linear-gradient(315deg, transparent 20px, green 20px)',
    'backgroundPosition': 'bottom left, top left, top right, bottom right',
    'backgroundSize': '50% 50%',
    'backgroundRepeat': 'no-repeat',
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }],
    'minHeight': [{ 'unit': 'px', 'value': 1430 }]
  },
  'beveltlbr': {
    'background': '#f5f5f5',
    'background': '-moz-linear-gradient(45deg, #f5f5f5 30px, #f5f5f5 30px), -moz-linear-gradient(135deg, transparent 30px, #f5f5f5 30px), -moz-linear-gradient(225deg, #f5f5f5 30px, #f5f5f5 30px), -moz-linear-gradient(315deg, transparent 30px, #f5f5f5 30px)',
    'background': '-o-linear-gradient(45deg, #f5f5f5 30px, #f5f5f5 30px), -o-linear-gradient(135deg, transparent 30px, #f5f5f5 30px), -o-linear-gradient(225deg, #f5f5f5 30px, #f5f5f5 30px), -o-linear-gradient(315deg, transparent 30px, #f5f5f5 30px)',
    'background': '-webkit-linear-gradient(45deg, #f5f5f5 30px, #f5f5f5 30px), -webkit-linear-gradient(135deg, transparent 30px, #f5f5f5 30px), -webkit-linear-gradient(225deg, #f5f5f5 30px, #f5f5f5 30px), -webkit-linear-gradient(315deg, transparent 30px, #f5f5f5 30px)'
  },
  'bevelall': {
    'backgroundPosition': 'bottom left, bottom right, top right, top left',
    'MozBackgroundSize': '52% 52%',
    'WebkitBackgroundSize': '52% 52%',
    'backgroundSize': '52% 52%',
    'backgroundRepeat': 'no-repeat'
  },
  'beveltrbl': {
    'backgroundPosition': 'bottom left, bottom right, top right, top left',
    'MozBackgroundSize': '52% 52%',
    'WebkitBackgroundSize': '52% 52%',
    'backgroundSize': '52% 52%',
    'backgroundRepeat': 'no-repeat'
  },
  'beveltlbr': {
    'backgroundPosition': 'bottom left, bottom right, top right, top left',
    'MozBackgroundSize': '52% 52%',
    'WebkitBackgroundSize': '52% 52%',
    'backgroundSize': '52% 52%',
    'backgroundRepeat': 'no-repeat'
  },
  'beveltr': {
    'backgroundPosition': 'bottom left, bottom right, top right, top left',
    'MozBackgroundSize': '52% 52%',
    'WebkitBackgroundSize': '52% 52%',
    'backgroundSize': '52% 52%',
    'backgroundRepeat': 'no-repeat'
  },
  'paper-wrap:before': {
    'content': '""',
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'borderWidth': '0 42px 42px 0',
    'borderStyle': 'solid',
    'borderColor': '#ffffff rgba(0, 0, 0, 0.1)',
    'WebkitBoxShadow': '0 0 0 rgba(0, 0, 0, 0.4), 0 0 10px rgba(0, 0, 0, 0.3)',
    'MozBoxShadow': '0 0 0 rgba(0, 0, 0, 0.4), 0 0 10px rgba(0, 0, 0, 0.3)',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.4)' }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.4),' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.3)' }],
    'WebkitTransform': 'rotate(-90deg)',
    'MozTransform': 'rotate(-90deg)',
    'MsTransform': 'rotate(-90deg)',
    'OTransform': 'rotate(-90deg)',
    'filter': 'progid: DXImageTransform.Microsoft.BasicImage(rotation=3)'
  },
  'content-wrap': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 30 }]
  },
  '#paper-top': {
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#DDDDDD' }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': 'px', 'value': 40 }],
    '<w767': {
      'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'string', 'value': '!important' }],
      'height': [{ 'unit': 'string', 'value': 'auto' }]
    }
  },
  'devider-vertical': {
    'borderRight': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'dashed' }, { 'unit': 'string', 'value': '#CCCCCC' }],
    'height': [{ 'unit': 'px', 'value': 74 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': -35 }],
    'width': [{ 'unit': 'px', 'value': 3 }]
  },
  '#paper-middle': {
    'background': 'none repeat scroll 0 0 #E0E8EF',
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#DDDDDD' }],
    'height': [{ 'unit': 'px', 'value': 400 }],
    'marginBottom': [{ 'unit': 'px', 'value': 30 }],
    'marginTop': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'gauge-wrap li': {
    'listStyle': 'none',
    'display': 'inline-block'
  },
  '#sheetswitch': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'right': [{ 'unit': 'px', 'value': 20 }],
    // background: url('../images/bg_grad.jpg');
    'borderLeft': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#23B2D2' }],
    'borderRight': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#23B2D2' }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#23B2D2' }],
    'paddingTop': [{ 'unit': 'px', 'value': 10 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 10 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 5 }],
    'paddingRight': [{ 'unit': 'px', 'value': 5 }]
  },
  '#sheetswitch img': {
    'border': [{ 'unit': 'string', 'value': 'none' }]
  },
  '#sheetswitch swatch': {
    'marginRight': [{ 'unit': 'px', 'value': 15 }],
    'display': 'block',
    'width': [{ 'unit': 'px', 'value': 16 }],
    'height': [{ 'unit': 'px', 'value': 16 }],
    'float': 'left',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'white' }]
  },
  '#sheetswitch swatch_hi': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#777' }]
  },
  'sheetswitch_prev': {
    'marginRight': [{ 'unit': 'px', 'value': 15 }]
  },
  'sheetswitch_next': {
    'float': 'left'
  },
  'sheetswitch_prev': {
    'float': 'left'
  },
  // FOOTER
  'wrap-footer': {
    'marginTop': [{ 'unit': 'px', 'value': 60 }]
  },
  'footer-space': {
    'height': [{ 'unit': 'px', 'value': 60 }],
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  '#footer': {
    'background': 'none repeat scroll 0 0 #f8f8f8',
    'borderTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#DDDDDD' }],
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': 'px', 'value': 50 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'position': 'absolute',
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  '#footer ul': {
    'float': 'right',
    'margin': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 15 }],
    'textDecoration': 'none'
  },
  '#footer ul li': {
    'color': '#555555',
    'display': 'inline-block',
    'fontSize': [{ 'unit': 'px', 'value': 14 }, { 'unit': 'string', 'value': '!important' }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 6 }],
    'textDecoration': 'none'
  },
  'copyright': {
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'color': '#666666',
    'float': 'right',
    'fontSize': [{ 'unit': 'px', 'value': 12 }, { 'unit': 'string', 'value': '!important' }],
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 15 }],
    'position': 'relative'
  },
  'devider-footer': {
    'borderLeft': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#DDDDDD' }],
    'float': 'right',
    'height': [{ 'unit': 'px', 'value': 50 }],
    'marginTop': [{ 'unit': 'px', 'value': -10 }],
    'width': [{ 'unit': 'px', 'value': 4 }]
  },
  'devider-left': {
    'borderLeft': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#DDDDDD' }],
    'float': 'left',
    'height': [{ 'unit': 'px', 'value': 50 }],
    'width': [{ 'unit': 'px', 'value': 4 }]
  },
  // *
 * LEFT MENU
 * Left mobile menu
  // *
 * RIGHT MENU/ SLIDING CONTENT
  'right-wrapper': {
    'background': 'rgba(0, 0, 0, 0.2)',
    'margin': [{ 'unit': 'px', 'value': 75 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }],
    'minHeight': [{ 'unit': 'px', 'value': 300 }],
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 15 }],
    'borderRadius': '4px'
  },
  'right-wrapper h3': {
    'color': '#FFFFFF',
    'fontSize': [{ 'unit': 'px', 'value': 13 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }]
  },
  'right-wrapper h3 i': {
    'fontStyle': 'normal'
  },
  'right-wrapper h3 span': {
    'background': 'rgba(0, 0, 0, 0.1)',
    'padding': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 10 }],
    'borderRadius': '11px',
    'color': '#FFFFFF',
    'fontSize': [{ 'unit': 'px', 'value': 13 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }],
    'fontWeight': 'normal'
  },
  'chat': {
    'margin': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': -19 }]
  },
  'chat li': {
    'listStyle': 'none',
    'display': 'block',
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'chat li a': {
    'color': '#FFFFFF',
    'textDecoration': 'none'
  },
  'chat li a span': {
    'width': [{ 'unit': 'px', 'value': 22 }],
    'height': [{ 'unit': 'px', 'value': 22 }]
  },
  'chat li b': {
    'position': 'relative',
    'fontWeight': 'normal',
    'top': [{ 'unit': 'px', 'value': -5 }]
  },
  'chat li i': {
    'fontSize': [{ 'unit': 'px', 'value': 10 }],
    'color': 'rgba(255, 255, 255, 0.3)',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 30 }],
    'position': 'relative',
    'top': [{ 'unit': 'px', 'value': -18 }]
  },
  'imgimg-chat': {
    'width': [{ 'unit': 'px', 'value': 30 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': -10 }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.2)' }]
  },
  'img-offline': {
    'filter': 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\'><filter id=\'grayscale\'><feColorMatrix type=\'matrix\' values=\'0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0\'/></filter></svg>#grayscale")',
    // Firefox 10+, Firefox on Android
    'filter': 'gray',
    // IE6-9
    'WebkitFilter': 'grayscale(100%)',
    // Chrome 19+, Safari 6+, Safari 6+ iOS
  },
  'label-chat': {
    'marginBottom': [{ 'unit': 'px', 'value': 25 }],
    'fontSize': [{ 'unit': 'px', 'value': 11 }]
  },
  'widget-knob': {
    'float': 'left',
    'width': [{ 'unit': 'px', 'value': 60 }],
    'display': 'block',
    'marginBottom': [{ 'unit': 'px', 'value': -15 }]
  },
  'widget-def': {
    'float': 'left',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'display': 'inline-block',
    'position': 'relative',
    'top': [{ 'unit': 'px', 'value': -35 }],
    'left': [{ 'unit': 'px', 'value': 65 }]
  },
  'widget-def b': {
    'position': 'relative',
    'fontWeight': 'normal',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'color': '#fff',
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'textTransform': 'capitalize',
    'float': 'left'
  },
  'widget-def i': {
    'position': 'relative',
    'fontWeight': 'normal',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'color': '#fff',
    'fontSize': [{ 'unit': 'px', 'value': 10 }],
    'float': 'left',
    'fontStyle': 'normal',
    'color': 'rgba(255, 255, 255, 0.3)',
    'display': 'block'
  },
  'buttonnavbar-toggletoggle-menu-mobile': {
    'position': 'absolute',
    'right': [{ 'unit': 'px', 'value': 40 }]
  },
  'invoice-header': {
    'background': '#EFEFF0',
    'color': '#fff',
    'borderRadius': '4px 4px 0 0',
    'margin': [{ 'unit': 'px', 'value': -16 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 0 }]
  },
  'smallpull-right': {
    'color': '#fff',
    'fontSize': [{ 'unit': 'px', 'value': 17 }],
    'margin': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 0 }]
  },
  'page-header': {
    'paddingBottom': [{ 'unit': 'px', 'value': 9 }],
    'margin': [{ 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }],
    'borderBottom': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#eee!important' }]
  }
});
