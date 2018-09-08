'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _TicketList = require('../components/TicketList');

var _TicketList2 = _interopRequireDefault(_TicketList);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Daniel/Desktop/ds_bootcamp/pages/board.js?entry';
// import {Card, Grid, Button} from 'semantic-ui-react';


var Board = function (_Component) {
  (0, _inherits3.default)(Board, _Component);

  function Board(props) {
    (0, _classCallCheck3.default)(this, Board);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Board.__proto__ || (0, _getPrototypeOf2.default)(Board)).call(this, props));

    _this.state = {
      backlogTickets: null

    };

    _axios2.default.get('https://jsonplaceholder.typicode.com/posts').then(function (response) {

      // const posts = response.data.map(post => {
      //   // console.log(post);
      //   return <div> {post.title} </div>;
      // })

      _this.setState({ backlogTickets: response.data });
    });

    return _this;
  }
  // state = {
  //   posts: []
  // };
  //
  // static async getInitialProps(props) {
  //   console.log('hi1');
  //   axios.get('https://jsonplaceholder.typicode.com/posts')
  //   .then(response => {
  //     console.log('here');
  //     console.log(response);
  //     this.setState({reponse});
  //   })
  //
  //   return {hi:2};
  //
  // }

  (0, _createClass3.default)(Board, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, ' ', this.state.posts, ' '), _react2.default.createElement(_semanticUiReact.Grid, { columns: 5, padded: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, _react2.default.createElement(_TicketList2.default, { listName: 'Backlog', tickets: this.state.backlogTickets, __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      })), _react2.default.createElement(_semanticUiReact.Grid.Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, _react2.default.createElement(_TicketList2.default, { listName: 'Get Started', __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      })), _react2.default.createElement(_semanticUiReact.Grid.Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, _react2.default.createElement(_TicketList2.default, { listName: 'In Progress', __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      })), _react2.default.createElement(_semanticUiReact.Grid.Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, _react2.default.createElement(_TicketList2.default, { listName: 'In Review', __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      })), _react2.default.createElement(_semanticUiReact.Grid.Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, _react2.default.createElement(_TicketList2.default, { listName: 'Completed', __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }))));
    }
  }]);

  return Board;
}(_react.Component);

exports.default = Board;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2JvYXJkLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ29udGFpbmVyIiwiR3JpZCIsIlNlZ21lbnQiLCJCdXR0b24iLCJDYXJkIiwiSW1hZ2UiLCJMYXlvdXQiLCJUaWNrZXRMaXN0IiwiYXhpb3MiLCJCb2FyZCIsInByb3BzIiwic3RhdGUiLCJiYWNrbG9nVGlja2V0cyIsImdldCIsInRoZW4iLCJzZXRTdGF0ZSIsInJlc3BvbnNlIiwiZGF0YSIsInBvc3RzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUTs7OztBQUVmLEFBQVEsQUFBVSxBQUFNLEFBQVMsQUFBUSxBQUFNOztBQUMvQyxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFnQjs7OztBQUN2QixBQUFPOzs7Ozs7O0FBSlA7OztJLEFBT007aUNBQ0o7O2lCQUFBLEFBQVksT0FBTzt3Q0FBQTs7b0lBQUEsQUFDYixBQUNOOztVQUFBLEFBQUs7c0JBQUwsQUFBYSxBQUNLLEFBSWhCOztBQUxXLEFBQ1g7O29CQUlBLEFBQU0sSUFBTixBQUFVLDhDQUFWLEFBQ0MsS0FBSyxvQkFBWSxBQUdoQjs7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7WUFBQSxBQUFLLFNBQVMsRUFBQyxnQkFBZ0IsU0FBL0IsQUFBYyxBQUEwQixBQUN6QztBQWpCZ0IsQUFPakI7O1dBYUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7NkJBRVMsQUFDUDs2QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUVFO0FBRkY7QUFBQSxPQUFBLGtCQUVFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUFPLFVBQUEsQUFBSyxNQUFaLEFBQWtCLE9BRnBCLEFBRUUsQUFDQSxzQkFBQSxBQUFDLHVDQUFLLFNBQU4sQUFBZSxHQUFHLFFBQWxCO29CQUFBO3NCQUFBLEFBQ0U7QUFERjt5QkFDRyxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUMsc0NBQVcsVUFBWixBQUFxQixXQUFVLFNBQVMsS0FBQSxBQUFLLE1BQTdDLEFBQW1EO29CQUFuRDtzQkFGSixBQUNFLEFBQ0UsQUFFRjtBQUZFOzJCQUVELGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQyxzQ0FBVyxVQUFaLEFBQXFCO29CQUFyQjtzQkFMSixBQUlFLEFBQ0UsQUFFRjtBQUZFOzJCQUVELGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQyxzQ0FBVyxVQUFaLEFBQXFCO29CQUFyQjtzQkFSSixBQU9FLEFBQ0UsQUFFRjtBQUZFOzJCQUVELGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQyxzQ0FBVyxVQUFaLEFBQXFCO29CQUFyQjtzQkFYSixBQVVFLEFBQ0UsQUFFRjtBQUZFOzJCQUVELGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQyxzQ0FBVyxVQUFaLEFBQXFCO29CQUFyQjtzQkFsQlIsQUFDRSxBQUdFLEFBYUUsQUFDRSxBQUtUO0FBTFM7Ozs7OztBQTFEUSxBLEFBbUVwQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJib2FyZC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvRGFuaWVsL0Rlc2t0b3AvZHNfYm9vdGNhbXAifQ==