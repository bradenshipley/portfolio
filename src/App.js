import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Landing from './Components/Landing/Landing'
import AboutMe from './Components/AboutMe/AboutMe'
import Skills from './Components/Skills/Skills'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'

class App extends Component {
  constructor(props) {
    super(props)
    this.AboutMe = React.createRef()
    this.Skills = React.createRef()
    this.Projects = React.createRef()
    this.Contact = React.createRef()
    this.handleScroll = this.handleScroll.bind(this)
  }
  handleScroll(param) {
    console.log(param)
    console.log(typeof Param)
    // window.scrollY(window.innerHeight)
    this.param.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  render() {
    return (
      <div className="App">
        <Navbar handleScroll={this.handleScroll} />
        <Landing />
        <> <AboutMe ref={this.AboutMe} /></>
        <> <Skills ref={this.Skills} /></>
        <> <Projects ref={this.Projects} /></>
        <> <Contact ref={this.Contact} /></>
      </div>
    );
  }
}

export default App;
