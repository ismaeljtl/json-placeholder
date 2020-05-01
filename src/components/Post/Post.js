import React from "react";
import "./Post.css";
import Dropdown from "../Dropdown/Dropdown";
import { withRouter } from "react-router-dom";

function Post({
  posts,
  deletePost,
  users,
  comments,
  handleOpenModal,
  history,
}) {
  return (
    <div className="card-columns Post">
      {posts.map((post) => (
        <div className="card" key={post.id}>
          <Dropdown id={post.id} delete={deletePost} />
          <div className="card-body">
            <h5 className="card-title">{formatTitle(post.title)}</h5>
            <small>
              Post creado por
              <strong>
                {users
                  .filter((user) => user.id === post.userId)
                  .map((user) => ` ${user.username}`)}
              </strong>
            </small>
            <p className="card-text">{formatTitle(post.body)}</p>

            <div className="bottom-container">
              <small>
                {
                  comments.filter((comment) => comment.postId === post.id)
                    .length
                }{" "}
                Comentarios
              </small>
              <small>
                <a href="/" onClick={(e) => handleAnchorClick(e, post)}>
                  Ver más...
                </a>
              </small>
            </div>
          </div>
        </div>
      ))}
      <div
        className="card card-agregar"
        onClick={() => history.push(`/postForm/0`)}
      >
        <div className="plus">
          <strong>
            <h3>+</h3>
          </strong>
        </div>
        <h3>Agregar Usuario</h3>
      </div>
    </div>
  );

  function handleAnchorClick(event, post) {
    event.preventDefault();
    handleOpenModal(post);
  }

  function formatTitle(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}

export default withRouter(Post);
