'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _balanceText2 = require('balance-text');

var _balanceText3 = _interopRequireDefault(_balanceText2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BalanceText = function (_React$Component) {
  _inherits(BalanceText, _React$Component);

  function BalanceText() {
    _classCallCheck(this, BalanceText);

    var _this = _possibleConstructorReturn(this, (BalanceText.__proto__ || Object.getPrototypeOf(BalanceText)).call(this));

    _this._handleResize = function () {
      if (!_this.props.resize) {
        return;
      }

      _this._balanceText();
    };
    return _this;
  }

  _createClass(BalanceText, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('resize', this._handleResize);
      this._balanceText();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this._balanceText();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this._handleResize);
    }
  }, {
    key: '_balanceText',
    value: function _balanceText() {
      var container = this.container;


      container.style.visibility = 'visible';

      _balanceText3.default.balanceText(container);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          style = _props.style;


      var combinedStyle = _extends({}, style, { visibility: 'hidden' });

      return _react2.default.createElement(
        'div',
        { style: combinedStyle },
        _react2.default.createElement(
          'span',
          { ref: function ref(container) {
              _this2.container = container;
            } },
          children
        )
      );
    }
  }]);

  return BalanceText;
}(_react2.default.Component);

BalanceText.defaultProps = {
  resize: true
};
BalanceText.propTypes = {
  children: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.arrayOf(_react2.default.PropTypes.node), _react2.default.PropTypes.node]),
  style: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.arrayOf(_react2.default.PropTypes.any), _react2.default.PropTypes.any]),
  resize: _react2.default.PropTypes.bool
};
exports.default = BalanceText;