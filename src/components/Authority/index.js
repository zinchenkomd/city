import React from 'react';
import {Timeline} from 'react-twitter-widgets'
import './styles.css';

function Authority(props) {
    const twitter = props.data.media.find((e) => {
        return e.type === 'twitter'
    });

    return (
        <div className="authority">
            <p className="name">{props.data.name}</p>
            <p className="position">{props.data.position}</p>
            {
                !!twitter &&
                <Timeline
                    dataSource={{
                        sourceType: 'profile',
                        screenName: twitter.user_name
                    }}
                    options={{
                        username: 'NYCMayorsOffice',
                        height: process.env.REACT_APP_TWITTER_IFRAME_HEIGHT,
                        width: '80%',
                        fontSize: twitter.user_name
                    }}
                />
            }
        </div>
    )
}

export default Authority;
