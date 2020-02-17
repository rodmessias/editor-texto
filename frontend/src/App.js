import React, { Component } from 'react';
import './App.css';
import { TextEditor } from './components';

class App extends Component {
  render() {
    document.title = 'Editor de texto - React'
    const linkMaterialIcons = document.createElement('link')
    linkMaterialIcons.setAttribute('rel','stylesheet')
    linkMaterialIcons.setAttribute('href', 'https://fonts.googleapis.com/icon?family=Material+Icons')

    document.head.insertAdjacentElement('beforeend', linkMaterialIcons)
    return (
      <div className="container">
        <TextEditor />
      </div>
    );
  }
}

export default App;
