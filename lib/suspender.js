const PENDING = 'pending'
const SUCCESS = 'success'
const ERROR = 'error'

const suspender = (promise) => {
  let status = PENDING
  let response

  const suspender = promise.then(
    (res) => [status, response] = [SUCCESS, res],
    (err) => [status, response] = [ERROR, err]
  )

  const read = () => {
    switch (status) {
      case PENDING:
        throw suspender
      case ERROR:
        throw response
      default:
        return response
    }
  }

  return { read }
}

export default suspender
