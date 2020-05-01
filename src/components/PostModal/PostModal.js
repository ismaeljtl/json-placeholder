import React from "react";
import Modal from "../Modal/Modal";
import "./PostModal.css";
import { connect } from "react-redux";

function PostModal({ isOpen, handleCloseModal, users, post, comments }) {
  return (
    <Modal isOpen={isOpen} handleCloseModal={handleCloseModal}>
      <div className="PostModal">
        <h3 className="mb-0">{formatTitle(post.title)}</h3>
        <small>
          Post creado por
          <strong>
            {users
              .filter((user) => user.id === post.userId)
              .map((user) => ` ${user.username}`)}
          </strong>
        </small>
        <p className="card-text mt-2 mb-4">{formatTitle(post.body)}</p>
        <h5>Comentarios:</h5>
        <ul className="list-group">
          {comments
            .filter((comment) => comment.postId === post.id)
            .map((comment) => (
              <li
                key={`${comment.postId}-${comment.id}`}
                className="list-group-item"
              >
                <p className="mb-0">{formatTitle(comment.name)}</p>
                <small>
                  Comentario de <strong>{comment.email}</strong>
                </small>
                <p className="mt-2">{formatTitle(comment.body)}</p>
              </li>
            ))}
        </ul>
      </div>
    </Modal>
  );

  function formatTitle(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}

function mapStateToProps(state) {
  return {
    users: state.userReducer.users,
    post: state.postReducer.post,
    comments: state.commentReducer.comments,
  };
}

export default connect(mapStateToProps, null)(PostModal);
