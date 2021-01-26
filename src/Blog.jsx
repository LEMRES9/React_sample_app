import React from 'react';
import Article from "./Article";

class Blog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isPublished: false,
            count: 0
        }
    }
    //ボタンをクリックされた時　カウントを１つ上げる
    componentDidMount(){
        document.getElementById('counter').addEventListener('click',() => this.countUp())
    }

    //公開状態を反転させる
    togglePublished = () => {
        this.setState({
            isPublished: !this.state.isPublished
        })
    };

    countUp = () => {
        this.setState({
            count: this.state.count + 1
        })
    };

    render() {
        return (
            <React.Fragment>
                <Article title={"Reactの使い方"}
                isPublished={this.state.isPublished}
                toggle={() => this.togglePublished()}
                count={this.state.count}
                />
            </React.Fragment>
        )
    }
}

export default Blog;

