import React from "react";
import UserForm from "../components/UserForm/UserForm";
import { connect } from "react-redux";
import Avatars from "@dicebear/avatars";
import sprites from "@dicebear/avatars-male-sprites";
import { createUser, updateUser } from "../redux/actions/userActions";
import Spinner from "../components/Spinner/Spinner";
import Error from "../components/Error/Error";

class UserFormContainer extends React.Component {
  constructor(props) {
    super(props);

    let options = { base64: true };
    let avatars = new Avatars(sprites, options);

    this.state = {
      titulo: "",
      avatar: avatars,
      user: {
        id: "",
        name: "",
        username: "",
        email: "",
        phone: "",
        website: "",
      },
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    if (Number(id) === 0) {
      // Crear usuario
      this.setState({ titulo: "Crear Usuario" });
    } else {
      // Editar usuario
      this.setState({ titulo: "Editar Usuario" });
      this.props.userReducer.users
        .filter((user) => user.id === Number(id))
        .map((user) => this.setState({ user }));
    }
  }

  handleChange = (event) => {
    this.setState({
      user: {
        ...this.state.user,
        [event.target.name]: event.target.value,
      },
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    if (this.state.titulo === "Crear Usuario") {
      await this.props.createUser(this.state.user);
    } else {
      await this.props.updateUser(this.state.user);
    }

    this.props.history.push("/");
  };

  render() {
    return (
      <div className="UserFormContainer container-fluid">
        {this.props.userReducer.spinner && <Spinner />}
        {this.props.userReducer.error && (
          <Error message={this.props.userReducer.error} />
        )}
        <h1 className="mt-4 mb-4 text-center">{this.state.titulo}</h1>
        <UserForm
          user={this.state.user}
          avatar={this.state.avatar}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userReducer: state.userReducer,
  };
}

const mapDispatchToProps = {
  createUser,
  updateUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserFormContainer);
