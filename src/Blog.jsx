import React from 'react';
import Article from "./Article";

class Blog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isPublished: false,
            order: 1
        }
    }

    //公開状態を反転させる
    togglePublished = () => {
        this.setState({
            isPublished: !this.state.isPublished
        })
    };

    render() {
        return (
            <React.Fragment>
                <Article title={"Reactの使い方"}
                isPublished={this.state.isPublished}
                toggle={() => this.togglePublished()}
                order={this.state.order}
                />
            </React.Fragment>
        )
    }
}

export default Blog;

