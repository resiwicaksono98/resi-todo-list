import React from 'react'
import { Provider } from 'react-redux'
import Sidebar from './components/sidebar'
import store from './config/redux/store'
import Routing from './router/routing'

function App() {
  return (
    <div >
      <Provider store={store}>
        <div className='min-h-screen  bg-white'>
          <div className="flex">
            <div className="md:w-1/5 sm:w-2/5 bg-gray-800 xs:bg-gray:200 min-h-screen px-4 pt-6">
              <Sidebar />
            </div>
            <div className="w-4/5 p-5">
              <Routing />
            </div>
          </div>
        </div>
      </Provider>

    </div>
  )
}

export default App
