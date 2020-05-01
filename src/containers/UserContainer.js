import React from "react";
import { connect } from "react-redux";
import {
  getUsers,
  deleteUser,
  handleOpenUserModal,
  handleCloseUserModal,
} from "../redux/actions/userActions";
import User from "../components/User/User";
import Loader from "../components/Loader/Loader";
import Error from "../components/Error/Error";
import UserModal from "../components/UserModal/UserModal";
import Spinner from "../components/Spinner/Spinner";

class UserContainer extends React.Component {
  componentDidMount() {
    if (this.props.userReducer.users.length === 0) {
      this.props.getUsers();
    }
  }

  render() {
    if (this.props.userReducer.cargando) {
      return <Loader />;
    }
    if (this.props.userReducer.error) {
      return <Error message={this.props.userReducer.error} />;
    }
    if (this.props.userReducer.users) {
      return (
        <div className="User container-fluid">
          {/* Si hay acciones que conlleven carga del spinner lo 
              renderizamos junto a la data que esta en pantalla */}
          {this.props.userReducer.spinner && <Spinner />}

          <h1 className="mt-4">Usuarios</h1>
          <User
            users={this.props.userReducer.users}
            handleOpenModal={this.props.handleOpenUserModal}
            deleteUser={this.props.deleteUser}
          />
          <UserModal
            isOpen={this.props.userReducer.modalIsOpen}
            handleCloseModal={this.props.handleCloseUserModal}
          />
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    userReducer: state.userReducer,
  };
}

const mapDispatchToProps = {
  getUsers,
  deleteUser,
  handleOpenUserModal,
  handleCloseUserModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
