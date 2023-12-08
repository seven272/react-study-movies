import React from 'react'
import './App.css'
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import Main from './layouts/Main'


class App extends React.Component {
  constructor() {
    super()
    this.state = {
    }
  }

  render() {
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    )
  }
}

// const App = () => {
//   return (
//     <>
//       <Header />
//       <Main />
//       <Footer />
//     </>
//   )
// }

export default App
