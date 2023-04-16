//This is the starting point

import { AntDesignOutlined } from '@ant-design/icons';
import React from 'react'
import { Switch, Route, Link } from 'react-router-dom';
import {Layout, Typography, Space} from 'antd';


import { Navbar, Exchanges, HomePage, Cryptocurrency, News, CryptoDetails } from "./components";
import "./App.css"


const App = () => {
  return (
    <div className='app'>
        
        <div className='navbar'>
               <Navbar />
        </div>

        <div className='main'>
              <Layout>
                  <div className='routes'>
                      <Route exact path="/">
                         <HomePage/>
                      </Route>
                      <Route exact path="/exchange">
                         <Exchanges/>
                      </Route>
                      <Route exact path="/crypto">
                         <Cryptocurrency/>
                      </Route>
                      <Route exact path="/crypto/:coinId">
                         <CryptoDetails/>
                      </Route>
                      <Route exact path="/news">
                         <News/>
                      </Route>
                  </div>
              </Layout>
        </div>

        <div className='footer'>

        </div>
    </div>
  )
}

export default App
