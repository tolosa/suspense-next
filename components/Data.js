import suspender from 'lib/suspender'

function fakeRequest() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('data!')
    }, 2000)
  })
}

const request = suspender(fakeRequest())

const Data = () => {
  const data = request.read()
  return (
    <p>{data}</p>
  )
}

export default Data
