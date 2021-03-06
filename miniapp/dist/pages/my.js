'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var my = function (_wepy$page) {
  _inherits(my, _wepy$page);

  function my() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, my);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = my.__proto__ || Object.getPrototypeOf(my)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '个人中心'
    }, _this.data = {
      height: 0,
      width: 0,
      head: '../my/head.png',
      name: '这里是昵称🇨🇳',
      order: '../my/order.png',
      address: '../my/address.png',
      shop: '../images/shop.png',
      phone: '../my/phone.png',
      arrow: '../my/arrow.png',
      favorite: '../images/favoriteMy.png'
    }, _this.methods = {
      pageOrder: function pageOrder() {
        _wepy2.default.navigateTo({
          url: './class/order'
        });
      },
      pageFavorite: function pageFavorite() {
        _wepy2.default.navigateTo({
          url: './class/collection'
        });
      },
      pageAddress: function pageAddress() {
        _wepy2.default.chooseAddress({
          success: function success(res) {
            console.log(JSON.stringify(res));
          },
          fail: function fail(err) {
            console.log(JSON.stringify(err));
          }
        });
        // wepy.navigateTo({
        //   url: './my/address'
        // })
      },
      pageContact: function pageContact() {
        _wepy2.default.setClipboardData({
          data: '18331290663',
          success: function success(res) {
            _wepy2.default.showActionSheet({
              itemList: ['18331290663'],
              success: function success(res) {
                if (res.tapIndex === 0) {
                  _wepy2.default.showToast({
                    title: '已复制',
                    icon: 'success',
                    duration: 1000
                  });
                }
              }
            });
          }
        });
        // wepy.showModal({
        //   title: '手机:',
        //   content: '18331290663'
        // })
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(my, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      _wepy2.default.getUserInfo({
        success: function success(res) {
          self.name = res.userInfo.nickName;
          self.head = res.userInfo.avatarUrl;
        }
      });
      _wepy2.default.getSystemInfo({
        success: function success(res) {
          self.height = res.windowHeight;
          self.width = res.windowWidth;
        }
      });
    }
  }, {
    key: 'onShow',
    value: function onShow() {}
  }]);

  return my;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(my , 'pages/my'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LmpzIl0sIm5hbWVzIjpbIm15IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJoZWlnaHQiLCJ3aWR0aCIsImhlYWQiLCJuYW1lIiwib3JkZXIiLCJhZGRyZXNzIiwic2hvcCIsInBob25lIiwiYXJyb3ciLCJmYXZvcml0ZSIsIm1ldGhvZHMiLCJwYWdlT3JkZXIiLCJuYXZpZ2F0ZVRvIiwidXJsIiwicGFnZUZhdm9yaXRlIiwicGFnZUFkZHJlc3MiLCJjaG9vc2VBZGRyZXNzIiwic3VjY2VzcyIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwic3RyaW5naWZ5IiwiZmFpbCIsImVyciIsInBhZ2VDb250YWN0Iiwic2V0Q2xpcGJvYXJkRGF0YSIsInNob3dBY3Rpb25TaGVldCIsIml0ZW1MaXN0IiwidGFwSW5kZXgiLCJzaG93VG9hc3QiLCJ0aXRsZSIsImljb24iLCJkdXJhdGlvbiIsInNlbGYiLCJnZXRVc2VySW5mbyIsInVzZXJJbmZvIiwibmlja05hbWUiLCJhdmF0YXJVcmwiLCJnZXRTeXN0ZW1JbmZvIiwid2luZG93SGVpZ2h0Iiwid2luZG93V2lkdGgiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxFOzs7Ozs7Ozs7Ozs7Ozs4S0FDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsY0FBUSxDQURIO0FBRUxDLGFBQU8sQ0FGRjtBQUdMQyxZQUFNLGdCQUhEO0FBSUxDLFlBQU0sV0FKRDtBQUtMQyxhQUFPLGlCQUxGO0FBTUxDLGVBQVMsbUJBTko7QUFPTEMsWUFBTSxvQkFQRDtBQVFMQyxhQUFPLGlCQVJGO0FBU0xDLGFBQU8saUJBVEY7QUFVTEMsZ0JBQVU7QUFWTCxLLFFBWVBDLE8sR0FBVTtBQUNSQyxlQURRLHVCQUNJO0FBQ1YsdUJBQUtDLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0QsT0FMTztBQU1SQyxrQkFOUSwwQkFNTztBQUNiLHVCQUFLRixVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdELE9BVk87QUFXUkUsaUJBWFEseUJBV007QUFDWix1QkFBS0MsYUFBTCxDQUFtQjtBQUNqQkMsbUJBQVMsaUJBQVVDLEdBQVYsRUFBZTtBQUN0QkMsb0JBQVFDLEdBQVIsQ0FBWUMsS0FBS0MsU0FBTCxDQUFlSixHQUFmLENBQVo7QUFDRCxXQUhnQjtBQUlqQkssZ0JBQU0sY0FBVUMsR0FBVixFQUFlO0FBQ25CTCxvQkFBUUMsR0FBUixDQUFZQyxLQUFLQyxTQUFMLENBQWVFLEdBQWYsQ0FBWjtBQUNEO0FBTmdCLFNBQW5CO0FBUUE7QUFDQTtBQUNBO0FBQ0QsT0F2Qk87QUF3QlJDLGlCQXhCUSx5QkF3Qk07QUFDWix1QkFBS0MsZ0JBQUwsQ0FBc0I7QUFDcEIzQixnQkFBTSxhQURjO0FBRXBCa0IsbUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQiwyQkFBS1MsZUFBTCxDQUFxQjtBQUNuQkMsd0JBQVUsQ0FBQyxhQUFELENBRFM7QUFFbkJYLHVCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckIsb0JBQUlBLElBQUlXLFFBQUosS0FBaUIsQ0FBckIsRUFBd0I7QUFDdEIsaUNBQUtDLFNBQUwsQ0FBZTtBQUNiQywyQkFBTyxLQURNO0FBRWJDLDBCQUFNLFNBRk87QUFHYkMsOEJBQVU7QUFIRyxtQkFBZjtBQUtEO0FBQ0Y7QUFWa0IsYUFBckI7QUFZRDtBQWZtQixTQUF0QjtBQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNEO0FBOUNPLEs7Ozs7OzZCQWdERDtBQUNQLFVBQUlDLE9BQU8sSUFBWDtBQUNBLHFCQUFLQyxXQUFMLENBQWlCO0FBQ2ZsQixpQkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCZ0IsZUFBSy9CLElBQUwsR0FBWWUsSUFBSWtCLFFBQUosQ0FBYUMsUUFBekI7QUFDQUgsZUFBS2hDLElBQUwsR0FBWWdCLElBQUlrQixRQUFKLENBQWFFLFNBQXpCO0FBQ0Q7QUFKYyxPQUFqQjtBQU1BLHFCQUFLQyxhQUFMLENBQW1CO0FBQ2pCdEIsZUFEaUIsbUJBQ1RDLEdBRFMsRUFDSjtBQUNYZ0IsZUFBS2xDLE1BQUwsR0FBY2tCLElBQUlzQixZQUFsQjtBQUNBTixlQUFLakMsS0FBTCxHQUFhaUIsSUFBSXVCLFdBQWpCO0FBQ0Q7QUFKZ0IsT0FBbkI7QUFNRDs7OzZCQUNRLENBQUU7Ozs7RUEvRW1CLGVBQUtDLEk7O2tCQUFoQjlDLEUiLCJmaWxlIjoibXkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBteSBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5Liq5Lq65Lit5b+DJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgaGVpZ2h0OiAwLFxuICAgIHdpZHRoOiAwLFxuICAgIGhlYWQ6ICcuLi9teS9oZWFkLnBuZycsXG4gICAgbmFtZTogJ+i/memHjOaYr+aYteensPCfh6jwn4ezJyxcbiAgICBvcmRlcjogJy4uL215L29yZGVyLnBuZycsXG4gICAgYWRkcmVzczogJy4uL215L2FkZHJlc3MucG5nJyxcbiAgICBzaG9wOiAnLi4vaW1hZ2VzL3Nob3AucG5nJyxcbiAgICBwaG9uZTogJy4uL215L3Bob25lLnBuZycsXG4gICAgYXJyb3c6ICcuLi9teS9hcnJvdy5wbmcnLFxuICAgIGZhdm9yaXRlOiAnLi4vaW1hZ2VzL2Zhdm9yaXRlTXkucG5nJ1xuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgcGFnZU9yZGVyKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi9jbGFzcy9vcmRlcidcbiAgICAgIH0pXG4gICAgfSxcbiAgICBwYWdlRmF2b3JpdGUoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuL2NsYXNzL2NvbGxlY3Rpb24nXG4gICAgICB9KVxuICAgIH0sXG4gICAgcGFnZUFkZHJlc3MoKSB7XG4gICAgICB3ZXB5LmNob29zZUFkZHJlc3Moe1xuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzKSlcbiAgICAgICAgfSxcbiAgICAgICAgZmFpbDogZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGVycikpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAvLyB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgLy8gICB1cmw6ICcuL215L2FkZHJlc3MnXG4gICAgICAvLyB9KVxuICAgIH0sXG4gICAgcGFnZUNvbnRhY3QoKSB7XG4gICAgICB3ZXB5LnNldENsaXBib2FyZERhdGEoe1xuICAgICAgICBkYXRhOiAnMTgzMzEyOTA2NjMnLFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICB3ZXB5LnNob3dBY3Rpb25TaGVldCh7XG4gICAgICAgICAgICBpdGVtTGlzdDogWycxODMzMTI5MDY2MyddLFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICAgIGlmIChyZXMudGFwSW5kZXggPT09IDApIHtcbiAgICAgICAgICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgICB0aXRsZTogJ+W3suWkjeWIticsXG4gICAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTAwMFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLy8gd2VweS5zaG93TW9kYWwoe1xuICAgICAgLy8gICB0aXRsZTogJ+aJi+acujonLFxuICAgICAgLy8gICBjb250ZW50OiAnMTgzMzEyOTA2NjMnXG4gICAgICAvLyB9KVxuICAgIH1cbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgd2VweS5nZXRVc2VySW5mbyh7XG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgc2VsZi5uYW1lID0gcmVzLnVzZXJJbmZvLm5pY2tOYW1lXG4gICAgICAgIHNlbGYuaGVhZCA9IHJlcy51c2VySW5mby5hdmF0YXJVcmxcbiAgICAgIH1cbiAgICB9KVxuICAgIHdlcHkuZ2V0U3lzdGVtSW5mbyh7XG4gICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICBzZWxmLmhlaWdodCA9IHJlcy53aW5kb3dIZWlnaHRcbiAgICAgICAgc2VsZi53aWR0aCA9IHJlcy53aW5kb3dXaWR0aFxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgb25TaG93KCkge31cbn1cbiJdfQ==