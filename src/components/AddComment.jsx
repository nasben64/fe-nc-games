import React, { useState } from "react";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { addComment } from "../apis/comments";
import { UserContext } from "../context/UserContext";
import { Button } from "react-bootstrap";

const AddComment = () => {
  const [comment, setComment] = useState("");
  const { review_id } = useParams();
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const { message, setMessage } = useState("");
  const { isSuccess, setIsSuccess } = useState(true);

  //   const successMessage = document.getElementById("message");

  const createUserComment = async () => {
    try {
      const commentObj = { username: user.username, body: comment };
      await addComment(review_id, commentObj);

      setMessage(`Thank you ${user.name} for your comment`);
      setIsSuccess(true);
      setComment("");
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment === "") {
      setMessage(`You need to write you comment before you can submit it`);
      setIsSuccess(false);
    } else {
      createUserComment();
    }
  };

  const handelTextChange = (e) => {
    setComment(e.target.value);
    successMessage.innerText = "";
  };

  return (
    <div>
      <form action="">
        <div className="form-group">
          <label htmlFor="comment">Type your Comment here please</label>
          <textarea
            onChange={(e) => handelTextChange(e)}
            value={comment}
            to="comment"
            className="form-control addComment-text-area"
          ></textarea>
          <p
            className={isSuccess ? "comment-success" : "comment-alert"}
            id="message"
          >
            {message}
          </p>
        </div>
        <div className="single-view-buttons mb-2">
          <Button
            onClick={handleSubmit}
            variant="outline-dark"
            size="lg"
            className="single-view-button"
            type="submit"
          >
            Submit
          </Button>
          <Button
            onClick={() => {
              navigate(-1);
            }}
            variant="outline-dark"
            size="lg"
            className="single-view-button"
          >
            Back
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddComment;
