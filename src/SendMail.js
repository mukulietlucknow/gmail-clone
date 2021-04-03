import React from "react";
import "./SendMail.css";
import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import {useDispatch} from 'react-redux';
import {closeSendMessage} from './features/counter/mailSlice';
import { db } from './firebase';
import firebase from "firebase";

function SendMail() {
    const dispatch = useDispatch();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data) => {
      console.log(data);
    db.collection('email').add(
        {
            to:data.to,
            subject:data.subject,
            message:data.message,
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
    });
    dispatch(closeSendMessage())
  };
  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <CloseIcon className="sendMail__close" onClick={() => dispatch(closeSendMessage())}/>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="to"
          placeholder="To"
          type="text"
          className=""
          {...register("to", { required: true })}
        />
        {errors.to && <p className="sendMail__error">it is required</p>}

        <input
          name="subject"
          placeholder="Subject"
          type="text"
          className=""
          {...register("subject", { required: true })}
        />
        <input
          name="message"
          placeholder="Message"
          type="text"
          className="sendMail_message"
          {...register("message", { required: true })}
        />

        <div className="sendMail__options">
          <Button className="sendMail__send" color="primary" variant="contained" type="submit">Send</Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
