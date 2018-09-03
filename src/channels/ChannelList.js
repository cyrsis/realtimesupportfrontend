import React, { Component } from 'react';
import Channel from "./Channel";

class ChannelList extends Component {
    render() {
        return (
            <div>

                this.props.channels.map(chan=> {
                <Channel
                  channel ={chan}
                  setChannel ={this.props.setChannel}
                />
            })

            </div>
        );
    }
}

export default ChannelList;
