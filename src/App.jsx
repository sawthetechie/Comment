import React, { useState } from "react";
import "./style.css";

export default function App() {
  const [comments, setComments] = useState([]);

  function settingComment() {
    var promptMessage = prompt("Enter your message");
    setComments((prevComments) => [
      ...prevComments,
      { text: promptMessage, subcomments: [] },
    ]);
  }

  function settingSubcomment(index) {
    return function () {
      var promptMessage = prompt("Enter your message");
      setComments((prevComments) => {
        const newComments = [...prevComments];
        newComments[index] = {
          ...newComments[index],
          subcomments: [...newComments[index].subcomments, { text: promptMessage }],
        };
        console.log(newComments);
        return newComments;
      });
    };
  }

  return (
    <>
      <div>
        <label htmlFor="MainPost">This is the main post.</label>
        <button onClick={settingComment}>Reply</button>
        <br />
        {comments.map((comment, index) => (
          <div className="reply" key={index}>
            <label>{comment.text}</label>
            <button onClick={settingSubcomment(index)}>Reply</button>
            <br />
            {comment.subcomments.map((subcomment, subIndex) => (
              <div className="reply" key={subIndex}>
                <label>{subcomment.text}</label>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
