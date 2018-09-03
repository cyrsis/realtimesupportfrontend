import React, { Component } from 'react';

class ChannelForm extends Component {
    onSubmit(e) {
        e.preventDefault();
        const node = this.refs.channel;
        const channelName = node.name;
        this.props.addChannel(channelName);
        node.value = "";

    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit.bind(this)}>
                    {/*Ussing ref is good for forms*/}
                    <input type="text" ref="channel"/>
                </form>
            </div>
        );
    }
}

export default ChannelForm;
