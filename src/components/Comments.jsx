import React, { useEffect, useState, useContext } from "react";
import Moment from "react-moment";
import { useNavigate, useParams } from "react-router-dom";
import { getCommentsByReviewId } from "../apis/reviews";
import { ClipLoader } from "react-spinners";
import Button from "react-bootstrap/Button";
import { UserContext } from "../context/UserContext";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const { review_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  useEffect(() => {
    getCommentsByReviewId(review_id).then((commentsFromApi) => {
      setComments(commentsFromApi);
      setIsLoading(false);
    });
  }, []);

  const handleLikeClick = (e) => {
    e.preventDefault();
  };

  const handelWriteComment = (e) => {
    e.stopPropagation();
    if (user.username === undefined) {
      alert("Please login first");
      navigate("/users");
    } else {
      navigate(`/reviews/${review_id}/addcomments`);
    }
  };

  return (
    <main>
      {isLoading ? (
        <div className="loader-container">
          <ClipLoader color={"#fff"} size={60} />
        </div>
      ) : (
        <ul>
          <Button
            variant="outline-dark"
            size="lg"
            className="single-view-button"
            onClick={(e) => handelWriteComment(e)}
          >
            Write a Comment
          </Button>
          {comments.length > 0 ? (
            comments.map((comment) => {
              return (
                <li key={comment.comment_id}>
                  <div className="comments-top">
                    <div className="comment-name-vote">
                      <p>Author: {comment.author}</p>
                      <div className="comment-name-vote">
                        <p>Votes: {comment.votes} 🗳️</p>
                      </div>
                    </div>
                    <div>
                      <p>{comment.body}</p>
                      <Moment format="DD/MM/YYYY HH:MM:SS">
                        {comment.created_at}
                      </Moment>
                    </div>
                  </div>
                </li>
              );
            })
          ) : (
            <div className="no-comments">
              <p>No comments yet, be the first to share what you think!</p>
            </div>
          )}
        </ul>
      )}
    </main>
  );
};

export default Comments;
