import { Avatar } from '@material-ui/core'
import React, { forwardRef } from 'react'
import './Message.css'
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import ReplyOutlinedIcon from '@material-ui/icons/ReplyOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
// import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';


const Message = forwardRef( ({avatarSrc, user, timestamp, message, imageUrl}, ref) => {
          return (
                    <div className='message' ref={ref}>
                              <div className="message__left">
                                        <Avatar src={avatarSrc}/>
                              </div>
                              <div className="message__right">
                                        <div className="message__rightName">
                                        <p className='message__childOne'>{user}</p>
                              
                                        </div>
                                        <p className='message__childTwo'>{message}</p>

                                        {/* timestamp
                                        {new Date(parseInt(timestamp)).toDateString()} */}
                                        
                                        <div className="message__rightOptions">
                                                  <ChatBubbleOutlineOutlinedIcon style={{ fontSize: 18 }} className='message__rightIcon message__rightOptionOne'/>
                                                  <ReplyOutlinedIcon style={{ fontSize: 18 }} className='message__rightIcon message__rightOptionTwo'/>
                                                  <FavoriteBorderOutlinedIcon style={{ fontSize: 18 }} className='message__rightIcon message__rightOptionThree'/>
                                                  <ShareOutlinedIcon style={{ fontSize: 18 }} className='message__rightIcon message__rightOptionFour'/>
                                        </div>
                              </div>
                           
                    </div>
          )
}
)
export default Message
