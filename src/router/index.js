import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import '../static/iconfont.css';
import Home from '../view/home'
import Sort from '../view/sort'
import Shop from '../view/shop'
import My from '../view/my'
import Details from '../view/detail'
export default () => (
    <BrowserRouter>
        <Switch>
			<Route path='/' exact render={()=> (
               <Redirect to={'/home'}/>
			)}/>
            <Route path="/home" exact={true} component= {Home}></Route>
            <Route path="/sort" exact={true} component= {Sort}></Route>
            <Route path="/shop" exact={true} component= {Shop}></Route>
            <Route path="/my" exact={true} component= {My}></Route>
			<Route path="/detail" exact={true} component= {Details}></Route>
        </Switch>
    </BrowserRouter>
)