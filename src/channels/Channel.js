import React, { Component } from 'react';


//Respond:
//Channel Name - for display
//Funtion- to call when clicked
class Channel extends Component {


    onClick(e) {
        e.preventDefault(); //Pass it on the upper event

        const {setChannel, channel} = this.props;
        setChannel(channel);


    }


    render() {

        const {channel} = this.props;
        return (
            <div>

                <li>
                    <a onClick={this.onClick.bind(this)}>
                        {channel.name}
                    </a>
                </li>


            </div>
        );
    }
}

export default Channel;
