import React, { useEffect, useState } from "react";
import Moment from "react-moment";
import { useParams } from "react-router-dom";
import { getCommentsByReviewId } from "../apis/reviews";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const { review_id } = useParams();

  useEffect(() => {
    getCommentsByReviewId(review_id).then((commentsFromApi) => {
      setComments(commentsFromApi);
    });
  }, []);

  return (
    <main>
      <ul>
        {comments.map((comment) => {
          return (
            <li key={comment.comment_id}>
              <div className="comments-top">
                <div className="comment-name-vote">
                  <p>Author: {comment.author}</p>
                  <p>Votes: {comment.votes}</p>
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
        })}
      </ul>
    </main>
  );
};

export default Comments;
