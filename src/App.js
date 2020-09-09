import React from 'react';
import { Switch, Route, HashRouter,BrowserRouter} from 'react-router-dom'
import './App.scss';
import Login from './views/login/index';

class App extends React.Component{
  constructor(){
    super();
    this.state = {};
  }

  render(){
    return(
        <BrowserRouter>
          <Switch>
            <Route component={Login} exact path="/"/>
          </Switch>
          {/* HashRouter用URL中的hash部分创建路由，URL中会附带# 不需要处理
          BrowserRouter的URL指向真实的URL地址，上线后需要后台处理URL指向
          switch路径相同的情况下只匹配第一个
          exact精准匹配 */}
        </BrowserRouter>
    );
  }
}

export default App;
