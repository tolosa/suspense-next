import { useState } from 'react'
import suspender from 'lib/suspender'

function fakeRequest() {
  const request = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')
    }, 2000)
  })
  return suspender(request)
}

const initialRequest = fakeRequest()

const Data = () => {
  const [request, setRequest] = useState(initialRequest)
  const data = request.read()
  return (
    <>
      <p>{data}</p>
      <button type="button" onClick={() => setRequest(fakeRequest())}>Reload</button>
    </>
  )
}

export default Data
