import React, { Component } from 'react'
import './Navbar.css'

class Navbar extends Component {
  state = {
    isTop: true,
    links: ['About Me', 'Skills', 'Projects', 'Contact']
  }
  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100;
      if (isTop !== this.state.isTop) {
        // console.log('no longer at top')
        this.setState({ isTop })
      }
    });
  }

  render() {
    const links = this.state.links
      .map((el, i) => {
        return (
          <div className="link" key={i} onClick={() => this.props.handleScroll(el)}>
            {el}
          </div>
        )
      })
    return (
      <div className={this.state.isTop ? 'Navbar' : 'Navbar2'} >
        {links}
      </div>)
  }
}
export default Navbar
