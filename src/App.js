import React, { Component } from 'react'
import Navbar from './component/Navbar'
import News from './component/News'
import {Route, Routes} from "react-router-dom";


export class App extends Component {

  apiKey = process.env.REACT_APP_NEWS_API

  render() {
    return (
      <div>
        
        <Navbar />

        <Routes>
          <Route exact path='/' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" category='general' country='in'/>} />
          <Route exact path='/business' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" category='business' country='in'/>} />
          <Route exact path='/entertainment' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" category='entertainment' country='in'/>} />
          <Route exact path='/health' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" category='health' country='in'/>} />
          <Route exact path='/science' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" category='science' country='in'/>} />
          <Route exact path='/sports' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" category='sports' country='in'/>} />
          <Route exact path='/technology' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" category='technology' country='in'/>} />
        </Routes>
      </div>
    )
  } 
}

export default App

