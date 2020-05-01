import React, { Component } from "react";
import "./Dropdown.css";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

class Dropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showDropdown: false,
    };
  }

  showDropdown = (event) => {
    event.preventDefault();

    this.setState({ showDropdown: !this.state.showDropdown });
  };

  handleEdit = () => {
    const pathname = this.props.history.location.pathname;
    if (pathname === "/") {
      this.props.history.push(`/userForm/${this.props.id}`);
    } else {
      this.props.history.push(`/postForm/${this.props.id}`);
    }
  };

  render() {
    return (
      <div className="option-button">
        <button className="btn btn-light" onClick={this.showDropdown}>
          <FontAwesomeIcon icon={faEllipsisV} />
        </button>

        {this.state.showDropdown ? (
          <div
            className="Dropdown"
            ref={(element) => {
              this.dropdownMenu = element;
            }}
          >
            <div className="flex-container">
              <button className="btn btn-light mb-2" onClick={this.handleEdit}>
                Editar
              </button>
              <button
                className="btn btn-light eliminar"
                onClick={() => this.props.delete(this.props.id)}
              >
                Eliminar
              </button>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default withRouter(Dropdown);
