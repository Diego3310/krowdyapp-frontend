import React, { Component } from 'react';
import SiderComponent from './components/Sider/Sider';
import { Layout } from 'antd';

//img
import logo from './assets/img/logo.png'

//Css
import './App.css';
import "antd/dist/antd.css";

//constants
const { Header } = Layout;

class App extends Component {

  render() {
    return (
      <div>
        <Header style={{ background: '#fff', padding: 0}}>
          <figure className="header__logo__container">
            <img className="header__logo" src={logo}  alt="logo" />
          </figure>
        </Header>
        <div className="component__divider"> 
        </div>
        <SiderComponent/>
      </div>
    );
  }
}

export default App;
