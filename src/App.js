import React from 'react';
import { Switch, Route, HashRouter,BrowserRouter} from 'react-router-dom'
import './App.scss';
import Home from './views/Home';
import About from './views/About';

class App extends React.Component{
  constructor(){
    super();
    this.state = {};
  }

  render(){
    return(
      <div>
        <h1>test</h1>
        <BrowserRouter>
          <Switch>
            <Route component={Home} exact path="/"/>
            <Route component={About} path="/about" />
          </Switch>
          {/* HashRouter用URL中的hash部分创建路由，URL中会附带# 不需要处理
          BrowserRouter的URL指向真实的URL地址，上线后需要后台处理URL指向
          switch路径相同的情况下只匹配第一个
          exact精准匹配 */}
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
