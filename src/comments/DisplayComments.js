import React, { useContext } from "react";
import InputField from "./InputField";
import { ActionContext } from "./ActionContext";
import "reactjs-popup/dist/index.css";
import CommentStructure from "./CommentStructure";

// import styles from "../style.css";

const DisplayComments = ({ comments }) => {
  const actions = useContext(ActionContext);

  // <InputField cancellor={i.comId} parentId={i.comId} />
  const ActionsReplies = (cancellor, parentId) => {
    let filter = actions.replies.filter((o) => o.id === cancellor);
    console.log("ActionsReplies : ", cancellor, parentId, filter);
    if (filter.length !== 0) {
      // userInfo > fullName
      let value = "";
      if (cancellor !== parentId) {
        value = `<a class="tags" href="${filter[0].userInfo.userId}">
            ${filter[0].userInfo.fullName}
          </a>`;
      }
      //  <div className={"replySection"}>

      return (
        <InputField cancellor={cancellor} parentId={parentId} value={value} />
      );
    }
  };

  return (
    <div>
      {comments.map((i, index) => (
        <div key={i.comId}>
          {actions.editArr.filter((id) => id === i.comId).length !== 0 ? (
            <InputField cancellor={i.comId} value={i.text} edit />
          ) : (
            <CommentStructure i={i} handleEdit={() => actions.handleAction} />
          )}
          <div className={"replySection"}>
            {/* {actions.replies.filter((o) => o.id === i.comId).length !== 0 && (
              <InputField cancellor={i.comId} parentId={i.comId} />
            )} */}
            {ActionsReplies(i.comId, i.comId)}
            {/* </div>
          <div className={"replySection"}> */}
            {i.replies &&
              i.replies.map((a, index) => (
                <div key={a.comId}>
                  {actions.editArr.filter((id) => id === a.comId).length !==
                  0 ? (
                    <InputField
                      cancellor={a.comId}
                      value={a.text}
                      edit
                      parentId={i.comId}
                    />
                  ) : (
                    <CommentStructure
                      i={a}
                      reply
                      parentId={i.comId}
                      handleEdit={() => actions.handleAction}
                    />
                  )}
                  {/* {actions.replies.filter((o) => o.id === a.comId).length !==
                    0 && (
                    <InputField cancellor={a.comId} parentId={i.comId} child />
                  )} */}
                  {ActionsReplies(a.comId, i.comId)}
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayComments;
