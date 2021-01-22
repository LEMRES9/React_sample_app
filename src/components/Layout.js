import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {title: "oh..."};
  }
  
  changeTitle(title) {
    this.setState({title});
  }

    render() {
      /*コンマn秒ごとに　更新をかけ　title を下記に書き換える
      setTimeout(
        () => { this.setState({title: "yea!!!"}); }
      , 2000
      );
      */
      
      return (
        <div>
          <Header chengeTitle={this.changeTitle.bind(this)} title={this.state.title} />
          <Footer />
        </div>
      );
      }
    }