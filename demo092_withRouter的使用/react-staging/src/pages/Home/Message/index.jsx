import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Detail from "./Detail";

export default class Message extends Component {
  state = {
    messageArr: [
      { id: "01", title: "消息1" },
      { id: "02", title: "消息2" },
      { id: "03", title: "消息3" },
    ],
  };

  pushShow = (id, title) => {
    //push跳轉+攜帶state參數
    this.props.history.push(`/home/message/detail`, { id, title });
  };

  replaceShow = (id, title) => {
    //replace跳轉+攜帶state參數
    this.props.history.replace(`/home/message/detail`, { id, title });
  };

  back = () => {
    this.props.history.goBack();
  };

  forward = () => {
    this.props.history.goForward();
  };

  go = () => {
    this.props.history.go(this.page.value);
  };

  render() {
    const { messageArr } = this.state;

    return (
      <div>
        <ul>
          {messageArr.map((msgObj) => {
            return (
              <li key={msgObj.id}>
                {/* 此處不需要用到高亮效果所以使用Link */}
                {/* 向路由組件傳遞params參數 */}
                {/* <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>
                  {msgObj.title}
                </Link> */}
                {/* 向路由組件傳遞search參數 */}
                {/* <Link
                  to={`/home/message/detail?id=${msgObj.id}&title=${msgObj.title}`}
                >
                  {msgObj.title}
                </Link> */}
                {/* 向路由組件傳遞state參數 */}
                <Link
                  to={{
                    pathname: "/home/message/detail",
                    state: { id: msgObj.id, title: msgObj.title },
                  }}
                >
                  {msgObj.title}
                </Link>
                &nbsp;
                <button onClick={() => this.pushShow(msgObj.id, msgObj.title)}>
                  push查看
                </button>
                &nbsp;
                <button
                  onClick={() => this.replaceShow(msgObj.id, msgObj.title)}
                >
                  replace查看
                </button>
              </li>
            );
          })}
        </ul>
        <hr />
        {/* 聲明接收params參數 */}
        {/* <Route path="/home/message/detail/:id/:title" component={Detail} /> */}
        {/* search參數無須聲明接收，正常註冊路由即可 */}
        {/* <Route path="/home/message/detail" component={Detail} /> */}
        {/* state參數無須聲明接收，正常註冊路由即可 */}
        <Route path="/home/message/detail" component={Detail} />
        <button onClick={this.back}>後退</button>
        &nbsp;
        <button onClick={this.forward}>前進</button>
        &nbsp;
        <button onClick={this.go}>go</button>
        &nbsp;
        <input type="text" ref={(currentNode) => (this.page = currentNode)} />
      </div>
    );
  }
}
