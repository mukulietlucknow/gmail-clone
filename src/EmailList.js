import React, {useState,useEffect } from 'react';
import "./EmailList.css";
import { Checkbox,IconButton} from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import RedoIcon from '@material-ui/icons/Redo';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';
import SettingsIcon from '@material-ui/icons/Settings';
import Section from "./Section";
import InboxIcon from '@material-ui/icons/Inbox';
import PeopleIcon from '@material-ui/icons/People';
import ViewCarouselIcon from '@material-ui/icons/ViewCarousel';
import EmailRow from "./Emailrow";
import { db } from "./firebase";

function EmailList() {
    const [emails, setEmails] = useState([]);
    useEffect(() =>{
        db.collection('email').orderBy('timestamp', 'desc').onSnapshot((snapshot) => setEmails(snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
        }))));
    }, []);

    return (
        <div className="emailList">
            <div className="emailList__settings">
                <div className="emailList__settingsLeft">
                    <Checkbox />
                    <IconButton>
                        <ArrowDownwardIcon />
                    </IconButton>
                    <IconButton>
                        <RedoIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
                <div className="emailList__settingsLRight">
                    <IconButton>
                        <ChevronLeftIcon />
                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon />
                    </IconButton>
                    <IconButton>
                        <KeyboardHideIcon />
                    </IconButton>
                    <IconButton>
                        <SettingsIcon />
                    </IconButton>
                </div>
            </div>
            <div className="emailList__sections">
                <Section  Icon={InboxIcon} title="Primary" selected={true} color="red"/>
                <Section  Icon={PeopleIcon} title="Social" selected={false} color="blue"/>
                <Section  Icon={ViewCarouselIcon} title="Promotion" selected={false} color="green"/>
            </div>
            <div className="emailList__list">
                {/* {   
                    
                    emails.map(({id, data:{to,subject, message, timestamp}}) => (
                        <EmailRow 
                        id={id}
                        key={id}
                        title={to}
                        subject={subject}
                        desc={message}
                        time={timestamp}
                        />
                    ))
                } */}

                {
                    emails.map((id, data) => {
                        console.log(id.data)
                    })
                }

                {   
                    emails.map((id, data) =>
                        <EmailRow 
                        key={id.id}
                        id={id.id}
                        title={"Twitch"}
                        subject={id.data.subject}
                        desc={id.data.message}
                        time={"10 PM"}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default EmailList
