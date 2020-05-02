import React from "react";

function PostForm(props) {
  return (
    <div className="PostForm">
      <div className="row">
        <div className="offset-md-3 col-md-6 col-12">
          <form onSubmit={props.onSubmit}>
            <div className="form-group">
              <label htmlFor="title">Título</label>
              <input
                onChange={props.onChange}
                type="text"
                name="title"
                className="form-control"
                id="title"
                value={props.post.title}
              />
            </div>
            <div className="form-group">
              <label htmlFor="body">Cuerpo del post</label>
              <textarea
                onChange={props.onChange}
                type="text"
                rows="5"
                name="body"
                className="form-control"
                id="body"
                value={props.post.body}
              ></textarea>
            </div>
            <div className="col text-center">
              <button
                type="submit"
                className="btn btn-primary mb-4"
                aria-label="Enviar"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PostForm;
