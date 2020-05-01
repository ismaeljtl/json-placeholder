import React from "react";
import { connect } from "react-redux";
import { getUserById, setUser } from "../redux/actions/userActions";
import {
  getPostsByUserId,
  handleOpenPostModal,
  handleClosePostModal,
  deletePost,
} from "../redux/actions/postActions";
import { getCommentsByUser } from "../redux/actions/commentActions";
import Post from "../components/Post/Post";
import Loader from "../components/Loader/Loader";
import Error from "../components/Error/Error";
import PostModal from "../components/PostModal/PostModal";
import Spinner from "../components/Spinner/Spinner";

class PostsByUserContainer extends React.Component {
  componentDidMount() {
    // obtenemos el id del usuario por el parametro
    const userId = Number(this.props.match.params.userId);

    // y pasamos a obtener su informacion
    if (this.props.userReducer.users.length === 0) {
      // si no tenemos a los usuarios en el store buscamos al user en el server
      this.props.getUserById(userId);
    } else {
      // en cambio, si tenemos a los usuarios lo obtenemos
      this.props.userReducer.users
        .filter((user) => user.id === userId)
        .map((user) => this.props.setUser(user));
    }

    // luego de obtener la info del usuario podemos buscar las publicaciones de este usuario
    this.props.getPostsByUserId(userId);

    // como ultimo paso pasamos a buscar los comentarios de sus publicaciones
    this.props.getCommentsByUser(userId);
  }

  render() {
    if (
      this.props.userReducer.cargando ||
      this.props.postReducer.cargando ||
      this.props.commentReducer.cargando
    ) {
      return <Loader />;
    }
    if (this.props.userReducer.error) {
      return <Error message={this.props.userReducer.error} />;
    }
    if (this.props.postReducer.error) {
      return <Error message={this.props.postReducer.error} />;
    }
    if (this.props.commentReducer.error) {
      return <Error message={this.props.commentReducer.error} />;
    }
    return (
      <div className="PostsByUserContainer container-fluid">
        {this.props.postReducer.spinner && <Spinner />}
        <h1 className="mt-4">Publicaciones de usuario</h1>
        <Post
          users={[this.props.userReducer.user]}
          posts={this.props.postReducer.posts}
          deletePost={this.props.deletePost}
          handleOpenModal={this.props.handleOpenPostModal}
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
  getUserById,
  setUser,
  getPostsByUserId,
  handleOpenPostModal,
  handleClosePostModal,
  getCommentsByUser,
  deletePost,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsByUserContainer);
