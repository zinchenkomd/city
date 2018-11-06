import React from 'react';
import {Timeline} from 'react-twitter-widgets'
import styles from './styles.css';

function Authority(props) {
    const twitter = props.data.media.find((e) => {
        return e.type === 'twitter'
    });

    return (
        <div className={styles.authority}>
            <p className={styles.name}>{props.data.name}</p>
            <p className={styles.position}>{props.data.position}</p>
            {
                !!twitter &&
                <Timeline
                    dataSource={{
                        sourceType: 'profile',
                        screenName: twitter.user_name
                    }}
                    options={{
                        username: 'NYCMayorsOffice',
                        height: TWITTER_IFRAME_HEIGHT,
                        width: '80%',
                        fontSize: twitter.user_name
                    }}
                />
            }
        </div>
    )
}

export default Authority;
