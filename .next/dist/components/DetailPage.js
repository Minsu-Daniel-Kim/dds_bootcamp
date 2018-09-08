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

var _reactDropzone = require('react-dropzone');

var _reactDropzone2 = _interopRequireDefault(_reactDropzone);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _reactDropzoneS3Uploader = require('react-dropzone-s3-uploader');

var _reactDropzoneS3Uploader2 = _interopRequireDefault(_reactDropzoneS3Uploader);

var _FileUpload = require('./FileUpload');

var _FileUpload2 = _interopRequireDefault(_FileUpload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Daniel/Desktop/ds_bootcamp/components/DetailPage.js';


var DetailPage = function (_Component) {
  (0, _inherits3.default)(DetailPage, _Component);

  function DetailPage() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, DetailPage);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = DetailPage.__proto__ || (0, _getPrototypeOf2.default)(DetailPage)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      s3Url: 'https://kaj011.amazonaws.com',
      uploadOptions: {
        server: 'http://localhost:3000'
        // ,
        // signingUrlQueryParams: {uploadType: 'avatar'}
      }
    }, _this.handleFinishedUpload = function (info) {
      console.log('File uploaded with filename', info.filename);
      console.log('Access it on s3 at', info.fileUrl);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(DetailPage, [{
    key: 'render',

    // const s3Url = 'https://kaj011.s3.amazonaws.com'

    // onDrop = (acceptedFiles, rejectedFiles) => {
    //   console.log('onDrop');
    //   console.log(acceptedFiles[0]);
    //
    //   const file = acceptedFiles[0];
    //
    //   // this.fileUpload(acceptedFiles)
    //   // .then((response) => {
    //   //   console.log(response.data);
    //   // });
    //
    //   this.fileUpload(file, endpoint)
    //   .then((response) => {
    //     console.log(response.data);
    //   });


    //
    // acceptedFiles.map(file => {
    //   axios({
    //      url: endpoint,
    //      method: 'post',
    //      data: {
    //        file,
    //        name: 'test',
    //      },
    //    })
    //     .then(response => {
    //       console.log(response.data)
    //     })
    //     .catch((error) => {
    //       console.log(error.response.data);
    //     });
    //   });
    // // });

    // }
    // fileUpload(file, endpoint){
    //   const url = endpoint;
    //   const formData = new FormData();
    //   formData.append('file',file)
    //   const config = {
    //       headers: {
    //           // "X-Requested-With": "XMLHttpRequest",
    //           'Access-Control-Allow-Origin': '*'
    //       }
    //   }
    //   return post(url, formData,config)
    // }


    value: function render() {
      return _react2.default.createElement(_semanticUiReact.Modal, { trigger: _react2.default.createElement(_semanticUiReact.Button, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          }
        }, 'Detail'), __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, _react2.default.createElement(_semanticUiReact.Modal.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, 'Profile Picture'), _react2.default.createElement(_semanticUiReact.Modal.Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, _react2.default.createElement(_semanticUiReact.Modal.Description, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, _react2.default.createElement(_semanticUiReact.Form, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, _react2.default.createElement(_semanticUiReact.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, 'Description'), _react2.default.createElement(_semanticUiReact.Form.Field, { control: _semanticUiReact.TextArea, placeholder: 'Add a more detailed description...', __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }), _react2.default.createElement(_semanticUiReact.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, 'Jupyter Notebook'), _react2.default.createElement(_semanticUiReact.Button, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, ' Show Notebook '), _react2.default.createElement('iframe', { style: { width: '100%' }, src: 'https://s3-us-west-1.amazonaws.com/kaj011/prediction.html', scrolling: 'yes', __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }), _react2.default.createElement(_FileUpload2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }), _react2.default.createElement(_semanticUiReact.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, 'Add Comment'), _react2.default.createElement(_semanticUiReact.Form.Field, { control: _semanticUiReact.TextArea, placeholder: 'Write a comment...', __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      })))));
    }
  }]);

  return DetailPage;
}(_react.Component);

;

exports.default = DetailPage;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRGV0YWlsUGFnZS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkJ1dHRvbiIsIkhlYWRlciIsIkljb24iLCJJbWFnZSIsIk1vZGFsIiwiVGV4dEFyZWEiLCJJbnB1dEZvcm1hdCIsIkZvcm0iLCJEcm9wem9uZSIsImF4aW9zIiwicG9zdCIsIkRyb3B6b25lUzNVcGxvYWRlciIsIkZpbGVVcGxvYWQiLCJEZXRhaWxQYWdlIiwic3RhdGUiLCJzM1VybCIsInVwbG9hZE9wdGlvbnMiLCJzZXJ2ZXIiLCJoYW5kbGVGaW5pc2hlZFVwbG9hZCIsImNvbnNvbGUiLCJsb2ciLCJpbmZvIiwiZmlsZW5hbWUiLCJmaWxlVXJsIiwid2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7O0FBQ2YsQUFBUyxBQUFRLEFBQVEsQUFBTSxBQUFPLEFBQU8sQUFBVSxBQUFhOztBQUNwRSxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU87Ozs7QUFDUCxBQUFPLEFBQWdCOzs7Ozs7Ozs7SUFHakIsQTs7Ozs7Ozs7Ozs7Ozs7b05BRUosQTthQUFRLEFBQ0MsQUFDUDs7Z0JBQ1UsQUFDUjtBQUNBO0FBTEksQUFFUyxBO0FBQUEsQUFDYjtBQUhJLEFBQ04sYSxBQVFGLHVCQUF1QixnQkFBUSxBQUM3QjtjQUFBLEFBQVEsSUFBUixBQUFZLCtCQUErQixLQUEzQyxBQUFnRCxBQUNoRDtjQUFBLEFBQVEsSUFBUixBQUFZLHNCQUFzQixLQUFsQyxBQUF1QyxBQUN4QztBOzs7O1NBRUQ7O0FBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdFOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUY7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OzZCQUlTLEFBQ1A7NkJBQ0UsQUFBQyx3Q0FBTSx5QkFBUyxBQUFDOztzQkFBRDt3QkFBQTtBQUFBO0FBQUEsU0FBQSxFQUFoQixBQUFnQjtvQkFBaEI7c0JBQUEsQUFFRTtBQUZGO09BQUEsa0JBRUcsY0FBRCx1QkFBQSxBQUFPOztvQkFBUDtzQkFBQTtBQUFBO0FBQUEsU0FGRixBQUVFLEFBQ0Esb0NBQUMsY0FBRCx1QkFBQSxBQUFPOztvQkFBUDtzQkFBQSxBQUVFO0FBRkY7QUFBQSx5QkFFRyxjQUFELHVCQUFBLEFBQU87O29CQUFQO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUM7O29CQUFEO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDRSw4Q0FBQSxBQUFDLHNCQUFELEFBQU0sU0FBTixBQUFZLEFBQVMsb0NBQVUsYUFBL0IsQUFBMkM7b0JBQTNDO3NCQUZKLEFBRUksQUFDRjtBQURFOzBCQUNGLEFBQUM7O29CQUFEO3NCQUFBO0FBQUE7QUFBQSxTQUhGLEFBR0UsQUFDQSxxQ0FBQSxBQUFDOztvQkFBRDtzQkFBQTtBQUFBO0FBQUEsU0FKRixBQUlFLEFBQ0EsOERBQVEsT0FBTyxFQUFDLE9BQWhCLEFBQWUsQUFBUSxVQUFTLEtBQWhDLEFBQW9DLDZEQUE2RCxXQUFqRyxBQUEyRztvQkFBM0c7c0JBTEYsQUFLRSxBQUNFO0FBREY7MEJBQ0UsQUFBQzs7b0JBQUQ7c0JBTkosQUFNSSxBQVlGO0FBWkU7QUFBQSwwQkFZRixBQUFDOztvQkFBRDtzQkFBQTtBQUFBO0FBQUEsU0FsQkYsQUFrQkUsQUFDRSw4Q0FBQSxBQUFDLHNCQUFELEFBQU0sU0FBTixBQUFZLEFBQVMsb0NBQVUsYUFBL0IsQUFBMkM7b0JBQTNDO3NCQTFCWixBQUNFLEFBR0UsQUFFRSxBQUNFLEFBbUJJLEFBWWI7QUFaYTs7Ozs7O0EsQUFqR1M7O0FBOEd4QixBQUVEOztrQkFBQSxBQUFlIiwiZmlsZSI6IkRldGFpbFBhZ2UuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL0RhbmllbC9EZXNrdG9wL2RzX2Jvb3RjYW1wIn0=