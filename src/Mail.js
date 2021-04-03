import React from 'react'
import "./Mail.css";
import { IconButton} from '@material-ui/core';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import {useHistory} from "react-router-dom";
import MoveToInboxOutlinedIcon from '@material-ui/icons/MoveToInboxOutlined';
import ErrorOutlineOutlinedIcon from '@material-ui/icons/ErrorOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import DraftsOutlinedIcon from '@material-ui/icons/DraftsOutlined';
import WatchLaterOutlinedIcon from '@material-ui/icons/WatchLaterOutlined';
import LabelImportantOutlinedIcon from '@material-ui/icons/LabelImportantOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import UnfoldMoreOutlinedIcon from '@material-ui/icons/UnfoldMoreOutlined';
import PrintOutlinedIcon from '@material-ui/icons/PrintOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import {useSelector} from 'react-redux';
import {selectOpenMail} from './features/counter/mailSlice';


function Mail() {
    const history = useHistory();
    const selectedMail = useSelector(selectOpenMail);
    return (
        <div className="mail">
            <div className="mail__tools">
                <div className="mails__toolsLeft">
                    <IconButton onClick={() => history.push("/")}>
                        <ArrowBackOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <MoveToInboxOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <ErrorOutlineOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <DeleteOutlineOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <WatchLaterOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <LabelImportantOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertOutlinedIcon />
                    </IconButton>
                </div>
                <div className="mail__toolsRight">
                    <IconButton>
                        <UnfoldMoreOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <PrintOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <ExitToAppOutlinedIcon />
                    </IconButton>
                </div>
            </div>
            <div className="mail__body">
                <div className="mail__bodyHeader">
                    <h2>{selectedMail?.subject}</h2>
                    <LabelImportantOutlinedIcon className="mail__important"/>
                    <p>{selectedMail?.title}</p>
                    <p className="mail__time">10 PM</p>
                </div>
                <div className="mail__message">
                    <p>{selectedMail?.desc}</p>
                </div>
            </div>
        </div>
    )
}

export default Mail
