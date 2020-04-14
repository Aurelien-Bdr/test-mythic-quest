import React from 'react';
import ReactPlayer from 'react-player';
import './ResponsivePlayer.css';




const ResponsivePlayer = () => {
    return (
        <div className='player-wrapper'>
            <ReactPlayer
                className='react-player'
                url='https://www.youtube.com/watch?v=ZROB4TnYH_I'
                width='50%'
                height='50%'
                controls={true}
            />
        </div>
    )
}


export default ResponsivePlayer;