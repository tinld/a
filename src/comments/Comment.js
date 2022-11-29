import React, { useState, useEffect } from "react";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";

import data from "./data.json";
import CommentSection from "./CommentSection";

import "./style.css";

const Comment = (props) => {
  const [comment, setComment] = useState(data);
  const userId = "02a";
  const avatarUrl = "https://ui-avatars.com/api/name=Adam&background=random";
  const name = "Adam Scott";
  const signinUrl = "/signin";
  const signupUrl = "/signup";

  let count = 0;
  comment.map((i) => {
    count += 1;
    i.replies && i.replies.map((i) => (count += 1));
  });

  useEffect(() => {}, []);

  // const customInputFunc = (props) => {
  //   return (
  //     <CustomInputt
  //       parentId={props.parentId}
  //       cancellor={props.cancellor}
  //       value={props.value}
  //       edit={props.edit}
  //       submit={props.submit}
  //       handleCancel={props.handleCancel}
  //       onChange={(e) => {
  //         console.log("onChange");
  //       }}
  //     />
  //   );
  // };

  return (
    <SlidingPane
      // hideHeader={true}
      closeIcon={<div>X</div>}
      className="some-custom-class"
      overlayClassName="some-custom-overlay-class"
      isOpen={props.isPaneOpen}
      // title="Hey, it is optional pane title.  I can be React component too."
      // subtitle="Optional subtitle."
      width={"400px"}
      onRequestClose={() => {
        // triggered on "<" on left top click or on outside click
        props.onClose(false);
      }}
    >
      <CommentSection
        currentUser={
          userId && { userId: userId, avatarUrl: avatarUrl, name: name }
        }
        commentsArray={comment}
        setComment={setComment}
        signinUrl={signinUrl}
        signupUrl={signupUrl}
        // customInput={customInputFunc}
      />
    </SlidingPane>
  );
};

export default Comment;
