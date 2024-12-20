// 动态标题脚本
(function() {
  var originalTitle = document.title;
  var titleTime;
  var idleTime = 5 * 1000; // 设置用户离开的时间阈值，这里是5秒

  // 设置标题为离开提示
  function setTitleLeave() {
    document.title = 'w(ﾟДﾟ)w 不要走！再看看嘛！';
  }

  // 设置标题为欢迎回来
  function setTitleReturn() {
    document.title = '♪(^∇^*)欢迎回来！';
    setTimeout(function() {
      document.title = originalTitle;
    }, 2000); // 2秒后恢复原始标题
  }

  // 检测用户是否离开页面
  function checkIdleTime() {
    clearTimeout(titleTime);
    titleTime = setTimeout(setTitleLeave, idleTime);
  }

  // 检测用户是否返回页面
  function checkActiveTime() {
    clearTimeout(titleTime);
    setTitleReturn();
  }

  // 监听事件
  window.addEventListener('blur', checkIdleTime);
  window.addEventListener('focus', checkActiveTime);

  // 初始化
  setTitleReturn();
})();

