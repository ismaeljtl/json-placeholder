import React from "react";
import Spinner from "../components/Spinner/Spinner";
import Error from "../components/Error/Error";
import { connect } from "react-redux";
import { createPost, updatePost } from "../redux/actions/postActions";
import PostForm from "../components/PostForm/PostForm";

class PostFormContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      titulo: "",
      post: {
        id: "",
        title: "",
        body: "",
      },
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    if (Number(id) === 0) {
      this.setState({ titulo: "Crear Post" });
    } else {
      this.setState({ titulo: "Editar Post" });
      this.props.postReducer.posts
        .filter((post) => post.id === Number(id))
        .map((post) => this.setState({ post }));
    }
  }

  handleChange = (event) => {
    this.setState({
      post: {
        ...this.state.post,
        [event.target.name]: event.target.value,
      },
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    if (this.state.titulo === "Crear Post") {
      await this.props.createPost(this.state.post);
    } else {
      await this.props.updatePost(this.state.post);
    }

    this.props.history.goBack();
  };

  render() {
    return (
      <div className="UserFormContainer container-fluid">
        {this.props.postReducer.spinner && <Spinner />}
        {this.props.postReducer.error && (
          <Error message={this.props.postReducer.error} />
        )}
        <h1 className="mt-4 mb-4 text-center">{this.state.titulo}</h1>
        <PostForm
          post={this.state.post}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    postReducer: state.postReducer,
  };
}

const mapDispatchToProps = {
  createPost,
  updatePost,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostFormContainer);
