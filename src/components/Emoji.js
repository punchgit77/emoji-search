// import React from 'react'

// const Emoji = () => {
//     return (
//         <div>
//             hii do your over here...
//         </div> 
//     )
// }

// export default Emoji


import React, { useState } from 'react';
// import './App.css';
import Picker, { SKIN_TONE_MEDIUM_LIGHT } from 'emoji-picker-react';

const Emoji = () => {
    const [chooseYourEmoji, setEmoji] = useState(null);

    const onEmojiClick = (event, emojiObject) => {
        setEmoji(emojiObject);
    }

    return (
    <div className="main">
      <h1 className="h">Search Emoji here..</h1>
          <div className="div-1">
            <Picker onEmojiClick={onEmojiClick} skinTone={SKIN_TONE_MEDIUM_LIGHT}/>
          </div>
            { chooseYourEmoji }
      </div>
    );
};


export default Emoji;