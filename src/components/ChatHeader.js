import React from 'react'
import './ChatHeader.css'
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';

function ChatHeader() {
          return (
                    <div className='chatHeader'>
                              <p>Paper Shot</p>
                              <div className="chatHeader__right">
                                        <ExploreOutlinedIcon style={{ fontSize: 28 }} className='chat__headerRightIcons headerExplore__Icon'/>
                                        <NotificationsNoneOutlinedIcon style={{ fontSize: 28 }} className='chat__headerRightIcons'/>
                                        <HelpOutlineOutlinedIcon style={{ fontSize: 28 }} className='chat__headerRightIcons'/>
                                        <PeopleAltIcon style={{ fontSize: 28 }} className='chat__headerRightIcons'/>
                              </div>
                    </div>
          )
}

export default ChatHeader
