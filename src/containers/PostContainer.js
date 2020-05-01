import React from "react";
import Post from "../components/Post/Post";
import { connect } from "react-redux";
import {
  getPosts,
  deletePost,
  handleOpenPostModal,
  handleClosePostModal,
} from "../redux/actions/postActions";
import { getUsers } from "../redux/actions/userActions";
import { getComments } from "../redux/actions/commentActions";
import Loader from "../components/Loader/Loader";
import Error from "../components/Error/Error";
import PostModal from "../components/PostModal/PostModal";
import Spinner from "../components/Spinner/Spinner";

class PostContainer extends React.Component {
  componentDidMount() {
    this.props.getPosts();
    if (this.props.userReducer.users.length === 0) {
      this.props.getUsers();
    }
    if (this.props.commentReducer.comments.length === 0) {
      this.props.getComments();
    }
  }

  render() {
    if (this.props.postReducer.cargando) {
      return <Loader />;
    }
    if (this.props.postReducer.error) {
      return <Error message={this.props.postReducer.error} />;
    }
    return (
      <div className="PostContainer container-fluid">
        {this.props.postReducer.spinner && <Spinner />}
        <h1 className="mt-4">Publicaciones</h1>
        <Post
          posts={this.props.postReducer.posts}
          deletePost={this.props.deletePost}
          handleOpenModal={this.props.handleOpenPostModal}
          users={this.props.userReducer.users}
          comments={this.props.commentReducer.comments}
        />
        <PostModal
          isOpen={this.props.postReducer.modalIsOpen}
          handleCloseModal={this.props.handleClosePostModal}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    postReducer: state.postReducer,
    userReducer: state.userReducer,
    commentReducer: state.commentReducer,
  };
}

const mapDispatchToProps = {
  getPosts,
  deletePost,
  handleOpenPostModal,
  handleClosePostModal,
  getUsers,
  getComments,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);
