const normalResult = {
  err: {
    msg: '正常',
    code: 0
  }
};

const errorResult = {
  'params': {
    msg: '上送参数错误',
    code: 1001
  },
  'loginFail': {
    msg: '登录失败',
    code: 1002
  },
  'loginExpired': {
    msg: '登录过期',
    code: 1003
  }
}

module.exports = {
  normalResult,
  errorResult
};
