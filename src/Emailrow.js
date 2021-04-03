import React from "react";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import LabelOutlinedIcon from "@material-ui/icons/LabelOutlined";
import { Checkbox, IconButton } from "@material-ui/core";
import "./emailRow.css";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectMail } from "./features/counter/mailSlice";

function EmailRow({ title, subject, desc, time, id }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const openMail = () => {
    dispatch(selectMail({ title, subject, desc, time, id }));
    history.push("/mail");
  };
  return (
    <div onClick={openMail} className="emailRow">
      <div className="emailRow_options">
        <Checkbox />
        <IconButton>
          <StarBorderIcon />
        </IconButton>
        <IconButton>
          <LabelOutlinedIcon />
        </IconButton>
      </div>
      <div className="emailRow_title">
        <h3>{title}</h3>
      </div>
      <div className="emailRow_message">
        <h4>
          {subject} <span className="emailRow__desc"> - {desc}</span>
        </h4>
      </div>
      <p className="emailRow_time">{time}</p>
    </div>
  );
}

export default EmailRow;
