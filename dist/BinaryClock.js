"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = BinaryClock;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function BinaryClock(_ref) {
  var color = _ref.color,
      backgroundColor = _ref.backgroundColor,
      size = _ref.size;

  var _useState = (0, _react.useState)(new Date()),
      _useState2 = _slicedToArray(_useState, 2),
      currentTime = _useState2[0],
      setCurrentTime = _useState2[1];

  (0, _react.useEffect)(function () {
    var intervalId = setInterval(function () {
      setCurrentTime(new Date());
    }, 1000 * 60);
    return function () {
      return clearInterval(intervalId);
    };
  });
  var hour = currentTime.getHours().toString(2).split('');
  var minutes = currentTime.getMinutes().toString(2).split('');

  while (hour.length < 5) {
    hour.unshift(0);
  }

  while (minutes.length < 6) {
    minutes.unshift(0);
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      backgroundColor: backgroundColor,
      color: color,
      display: 'inline-block',
      padding: 10
    }
  }, /*#__PURE__*/_react.default.createElement("div", null, hour.map(function (digit, index) {
    return /*#__PURE__*/_react.default.createElement("span", {
      key: index,
      style: {
        height: size,
        width: size,
        marginRight: index < hour.length - 1 ? 4 : 0,
        color: color,
        backgroundColor: digit === '1' ? color : backgroundColor,
        border: "solid 1px ".concat(color),
        display: 'inline-block'
      }
    });
  })), /*#__PURE__*/_react.default.createElement("div", null, minutes.map(function (digit, index) {
    return /*#__PURE__*/_react.default.createElement("span", {
      key: index,
      style: {
        height: size,
        width: size,
        marginRight: index < minutes.length - 1 ? 4 : 0,
        color: color,
        backgroundColor: digit === '1' ? color : backgroundColor,
        border: "solid 1px ".concat(color),
        display: 'inline-block'
      }
    });
  })));
}

BinaryClock.prototype = {
  color: _propTypes.default.string,
  backgroundColor: _propTypes.default.string,
  size: _propTypes.default.number
};
BinaryClock.defaultProps = {
  color: 'black',
  backgroundColor: 'white',
  size: 10
};