import React, { Component } from 'react';
import './App.css';
// import scrollToComponent from 'react-scroll-to-component'

import Landing from './Components/Landing/Landing'
import AboutMe from './Components/AboutMe/AboutMe'
import Skills from './Components/Skills/Skills'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isTop: true,
      links: ['About Me', 'Skills', 'Projects', 'Contact']
    }
    // this.handleScroll = this.handleScroll.bind(this)
  }
  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop })
      }
    })
  }
  handleScroll = (el) => {
    if (el == 'About Me') {
      let selection = document.getElementById("aboutme")
      selection.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
    } else {
      let lowercase = el.toLowerCase()
      let selection = document.getElementById(lowercase)
      selection.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
    }
  }
  render() {
    const links = this.state.links
      .map((el, i) => {
        return (
          <div className="link" key={i} onClick={() => this.handleScroll(el)}>
            {el}
          </div>
        )
      })
    return (
      <div className="App">
        <div className={this.state.isTop ? 'Navbar' : 'Navbar2'} >
          {links}
        </div>
        <Landing />
        <div id='aboutme'> <AboutMe /></div>
        <div id='skills' > <Skills /></div>
        <div id='projects'> <Projects /></div>
        <div id='contact'> <Contact /></div>
      </div>
    );
  }
}

export default App;
