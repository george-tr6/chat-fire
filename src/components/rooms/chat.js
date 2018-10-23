import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMessages, getRoomInfo } from '../../actions';

class Chat extends Component {
    componentDidMount() {
        const {getRoomInfo, match: {params}} = this.props;

        this.dbRef = getRoomInfo(params.room_id);

    }

    componentWillUnmount(){
        this.dbRef.off();
    }

    render(){
        const { messages } = this.props;
        const messageElements = Object.keys(messages).map(key => {
            const {name, message} = messages[key];
            return (
                <li key={key} className="collection-item">
                    <b>{name}:</b> {message}
                </li>
            );
        });
        return (
            <div>
                <h1 className="center">Chat Room</h1>
                <ul className="collection">
                    {messageElements}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        messages: state.chat.messages
    }
}

export default connect(mapStateToProps, {
    getMessages,
    getRoomInfo
})(Chat);