var WaterGauge =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(1);

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	var WaterGauge = React.createClass({
	  displayName: 'WaterGauge',

	  propTypes: {
	    size: React.PropTypes.number,
	    backgroundColor: React.PropTypes.string,
	    liquidColor: React.PropTypes.string,
	    percentColor: React.PropTypes.string
	  },
	  getDefaultProps: function getDefaultProps() {
	    return {
	      size: 100,
	      backgroundColor: 'white',
	      liquidColor: 'blue',
	      percentColor: 'white'
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      percentComplete: 0
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    this.updateCss();
	  },
	  componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
	    this.updateCss();
	  },
	  updateCss: function updateCss() {
	    document.getElementById("wave").style.top = "" + (this.props.size - this.state.percentComplete * this.props.size / 100 - 5) + "px";
	    document.getElementById("wave").style.backgroundImage = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:svg='http://www.w3.org/2000/svg' width='240' height='600'%3E%3Cg transform='scale(1,0.20000000149011612) '%3E%3Cpath fill='" + this.props.liquidColor + "' d='m425.600824,8090.652986c-161.801,-1.801 -112.507645,211.167255 -271.308645,209.366255c-158.801,-1.80101 -153.908645,-167.958678 -227.308645,-168.559678c-73.4,-0.601 -145.613992,-753.851837 -163.213992,-753.851837l-3.139912,-7341.522536c41.6,0 63.199,28.799 79.199,49.6c15.2,20 23.2,30.4 40.801,30.4c16.8,0 25.6,-10.4 40.8,-30.4c16,-20.8 36.8,-49.6 79.2,-49.6c42.399,0 63.199,28.799 79.199,49.6c15.2,20 23.2,30.4 40.801,30.4c16.8,0 25.6,-10.4 40.8,-30.4c16,-20.8 36.8,-49.6 79.2,-49.6c41.6,0 63.199,28.799 79.199,49.6c15.2,20 23.2,30.4 40.801,30.4l0,48l31.25926,973.48148z'/%3E%3C/g%3E%3C/svg%3E\")";
	  },
	  changePercentComplete: function changePercentComplete() {
	    if (this.state.percentComplete >= 100) return;
	    this.setState({ percentComplete: this.state.percentComplete + 5 });
	  },

	  render: function render() {
	    var _props = this.props;
	    var backgroundColor = _props.backgroundColor;
	    var liquidColor = _props.liquidColor;
	    var percentColor = _props.percentColor;
	    var size = _props.size;


	    var percentComplete = this.state.percentComplete;

	    return React.createElement(
	      'div',
	      { onClick: this.changePercentComplete.bind(this) },
	      React.createElement(
	        'svg',
	        { width: size, height: size, style: { zIndex: 5, overflow: "visible" } },
	        React.createElement('circle', { id: 'surr-circle', r: size / 2 + 3, cx: size / 2, cy: size / 2, fill: 'none', stroke: liquidColor, strokeWidth: '2' })
	      ),
	      React.createElement(
	        'div',
	        { className: 'water-level',
	          style: {
	            backgroundColor: backgroundColor,
	            height: size + "px",
	            width: size + "px"
	          } },
	        React.createElement(
	          'svg',
	          { id: 'svg', width: size, height: size },
	          React.createElement(
	            'defs',
	            null,
	            React.createElement(
	              'mask',
	              { id: 'hole' },
	              React.createElement('rect', { width: '100%', height: '100%', fill: 'white' }),
	              React.createElement('circle', { id: 'mask-circle', r: size / 2, cx: size / 2, cy: size / 2 })
	            )
	          ),
	          React.createElement('rect', { id: 'rect',
	            width: size, height: size,
	            x: '0', y: '0',
	            fill: backgroundColor, mask: 'url(#hole)' })
	        ),
	        React.createElement('div', { id: 'wave',
	          style: {
	            height: size + 30 + "px",
	            width: size + 100 + "px"
	          } }),
	        React.createElement(
	          'h1',
	          { className: 'percentage', style: { color: percentColor } },
	          percentComplete,
	          '%'
	        )
	      )
	    );
	  }
	});

	module.exports = WaterGauge;

/***/ }
/******/ ]);