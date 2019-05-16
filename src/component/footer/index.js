import React, { Component } from 'react';
import { Link }  from 'react-router-dom';
import './index.less'

const tabarArray = [
  {img: 'icon-home', text: '首页', link: '/home'},
  {img: 'icon-fenlei', text: '分类', link: '/sort'},
  {img: 'icon-gouwuchekong', text: '购物车', link: '/shop'},
  {img: 'icon-yonghu', text: '我的', link: '/my'}
]

const Tabbar = (WrapperComponents) => class Tabbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    }
  }
  itemChange = (i) => {
    this.setState({
      index: i
    })
  }
  render () {
    const url = window.location.href;
    console.log(url)
    return (
      <div className="contair">
        <WrapperComponents {...this.props}/>
        <div className="tabar">
          <div className="tabbar-content">
            {
              tabarArray.map((v,i) => (
                <Link to={v.link} className="tabar_item" key={i}>
                  <div className={'iconfont ' + v.img + (url.indexOf(v.link) > -1 ? ' active' : '')} />
                  <div className={"texts" + (url.indexOf(v.link) > -1 ? ' active' : '')}>{v.text}</div>
                </Link>
              ))
            }
          </div>
        </div>
      </div>
    )
  }
}



export default Tabbar;