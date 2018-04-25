const request = (option) => {
  return new Promise((resolve, reject) => {
    fetch(`/api/${option.url}`,
      {
        method: option.method,
        credentials: 'include',
        body: option.arg
      })
      .then(res => {
        console.log(res)
      })
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
