const request = (option) => {
  return new Promise((resolve, reject) => {
    fetch(`http://dev.31huiyi.com/api/${option.url}`,
      {
        method: option.method,
        credentials: 'include',
        body: option.arg
      })
      .then(res => {})
      .catch(error => {
        console.log(error)
      })
  })
}

export default{
  get (url) {
    return request({url: url, method: 'GET'})
  },
  post (url, arg) {
    return request({url, method: 'POST', arg})
  }
}
