if (window.location.pathname.match('/p/')) {

  // 详细页面

  var _parent, _href, _text;

  if (document.querySelectorAll('head meta[property="og:video"]')[0]) {
    _parent = document.querySelector('._q3gpi');
    _href = document.querySelectorAll('head meta[property="og:video"]')[0].content;
    _text = '视频';
  } else {
    _parent = document.querySelector('._jjzlb');
    _href = document.querySelectorAll('head meta[property="og:image"]')[0].content;
    _text = '图片';
  }

  addBtn(_parent, _href, _text);

} else if (window.location.pathname === '/') {

  // 首页信息流页面

  var _box = document.querySelector('._qj7yb');
  var _parent, _href, _text;

  _box.addEventListener('mouseover', function(event) {

    if (event.target.className === '_icyx7') {
      _parent = event.target.parentNode;
      _href = event.target.src;
      _text = '图片';

      addBtn(_parent, _href, _text);
    } else if (event.target.className === '_c2kdw') {
      _parent = event.target.parentNode;
      _href = _parent.querySelector('._c8hkj').src;
      _text = '视频';

      addBtn(_parent, _href, _text);
    }

  });

} else {

  // 个人页面弹窗详细页面

  addAriaListener('react-root', function() {

    var _parent, _href, _text;
    var modal = document.querySelector('._a1rcs');

    if (modal.querySelector('._c8hkj')) {
      _parent = modal.querySelector('._q3gpi');
      _href = modal.querySelector('._c8hkj').src;
      _text = '视频';
    } else {
      _parent = modal.querySelector('._jjzlb');
      _href = modal.querySelector('._icyx7').src;
      _text = '图片';
    }

    addBtn(_parent, _href, _text);

  });

}

// 监听属性，判断当前页弹窗打开页面
function addAriaListener(elemId, callback) {

  var elem = document.getElementById(elemId);
  var lastName = elem.getAttribute('aria-hidden');

  window.setInterval(function() {
    var currentName = elem.getAttribute('aria-hidden');
    if (currentName !== lastName) {
      if (currentName === 'true') {
        callback();
      }

      lastName = currentName;
    }
  }, 10);

}


function addBtn(parent, href, text) {

  var _parent = parent;
  var _href = href;
  var _text = text;
  var _link = document.createElement('a');

  _link.className = 'downloadLink';
  _link.target = '_blank';
  _link.href = _href;
  _link.innerHTML = '打开原' + _text;

  _link.addEventListener('click', function(e) {
    e.stopPropagation();
  }, false);

  _parent.appendChild(_link);

}