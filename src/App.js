import React, { useEffect, useState } from 'react'
import {
  Layout,
  Header,
  Content,
  Footer
} from './components'
import { PopUp } from './components/commonComponents'
import './App.scss'
import { scrollFunc } from './components/animationFunc'

export const App = () => {
  const [showLoader, loaderStatus] = useState(true)
  const [popUpstate, togglePopUp] = useState(true)

  useEffect(() => {
    window.addEventListener('scroll', scrollFunc)
    setTimeout(() => {
      loaderStatus(false)
    }, 0)
  })

  const newWebRedirection = () => {
    window.location.href = 'https://deepakc.netlify.app/'
    togglePopUp(false)
  }

  const closePopUp = () => {
    togglePopUp(false)
  }
  return (
    <div className='App'>
      {showLoader
        ? <div className='page-loader'>
          <div className='loader-content'>
            D
            <div className='spinner-border text-light' role='status' />
          </div>
        </div>
        : <React.Fragment>
          {popUpstate &&
            <PopUp
              close={closePopUp}
              newWebRedirection={newWebRedirection}
              />
          }
          <Layout>
            <Header />
            <Content />
            <Footer />
          </Layout>
        </React.Fragment>
      }
    </div>
  )
}

export default App
