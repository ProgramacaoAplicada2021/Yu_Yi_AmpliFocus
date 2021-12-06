import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { userActions } from "../_actions";
import { FaTimes } from "react-icons/fa";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      user: {
        username: "",
        email: "",
        password1: "",
        password2: "",
      },
      addForm: {
        title: "",
        description: "",
        completed: false,
      },
      submitted: false,
      submittedForm: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeForm = this.handleChangeForm.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmitForm = this.handleSubmitForm.bind(this);

    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
  }

  componentDidMount() {
    this.props.getUsers();
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleDeleteUser(id) {
    return (e) => this.props.deleteUser(id);
  }
  handleChange(event) {
    const { name, value } = event.target;
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        [name]: value,
      },
    });
  }

  handleChangeForm(event) {
    const { name, value } = event.target;
    const { addForm } = this.state;
    this.setState({
      addForm: {
        ...addForm,
        [name]: value,
      },
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({ submitted: true });
    const { user } = this.state;
    if (user.username && user.email && user.password1 && user.password2) {
      this.props.register(user);
      this.props.getUsers();
    }
  }

  handleSubmitForm(event) {
    event.preventDefault();

    this.setState({ submitted: true });
    const { addForm } = this.state;
    if (addForm.title && addForm.description) {
      console.log(addForm);
      this.props.addTodo(addForm);
      this.handleClose();
      this.props.getUsers();
    }
  }

  render() {
    const { user, users, registering } = this.props;
    const { submitted, submittedForm, addForm } = this.state;

    return (
      <div>
        <h1>
          <a href="" target="_top" style={{ textDecoration: "none" }}>
            AmpliFocus
          </a>
        </h1>
        <p>Seja Bem-Vindo à sua plataforma de produtividade!</p>
        <div className="header">
          <h3 className="mt-3">Suas Tarefas </h3>{" "}
          <button className="btn" onClick={this.handleShow}>
            Adicionar Tarefa
          </button>
        </div>
        {users.loading && <em>Loading Tasks...</em>}
        {users.error && (
          <span className="text-danger">ERROR: {users.error}</span>
        )}
        {users.items && (
          <ul style={{ paddingLeft: "0" }}>
            {users.items.map((user, index) => (
              <li style={{ display: "block" }} key={user.id}>
                <div className={`task ${user.completed ? "reminder" : ""}`}>
                  <h3>
                    {user.title}{" "}
                    {user.deleting ? (
                      <em> - Deleting Task...</em>
                    ) : user.deleteError ? (
                      <span className="text-danger">
                        {" "}
                        - ERROR: {user.deleteError}
                      </span>
                    ) : (
                      <span>
                        {" "}
                        <FaTimes
                          style={{ color: "red", cursor: "pointer" }}
                          onClick={this.handleDeleteUser(user.id)}
                        />
                      </span>
                    )}
                  </h3>
                  <p>{user.description}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
        <p className="mt-5 d-flex">
          <Link to="/login" style={{ marginLeft: "auto", marginRight: "2px" }}>
            Logout
          </Link>
        </p>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Adicionar Tarefa</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form name="form" onSubmit={this.handleSubmitForm}>
              <div
                className={
                  "form-group" +
                  (submittedForm && !addForm.title ? " has-error" : "")
                }
              >
                <label htmlFor="firstName">Titulo</label>
                <input
                  type="text"
                  className="form-control-add form-control"
                  name="title"
                  value={addForm.title}
                  onChange={this.handleChangeForm}
                />
                {submittedForm && !addForm.title && (
                  <div className="help-block">Username is required</div>
                )}
              </div>
              <div
                className={
                  "form-group" +
                  (submittedForm && !addForm.description ? " has-error" : "")
                }
              >
                <label htmlFor="email">Descrição</label>
                <input
                  type="text"
                  className="form-control-add form-control"
                  name="description"
                  value={addForm.description}
                  onChange={this.handleChangeForm}
                />
                {submittedForm && !addForm.description && (
                  <div className="help-block">Email is required</div>
                )}
              </div>
              <div
                className="form-group"
                style={{ display: "flex", justifyContent: "flex-end" }}
              >
                <button className="btn btn-primary">Adicionar</button>
                {registering && (
                  <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                )}
                <Button variant="primary" onClick={this.handleClose}>
                  Voltar{" "}
                </Button>
              </div>
            </form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

function mapState(state) {
  const { users, authentication } = state;
  const { user } = authentication;

  return { user, users };
}

const actionCreators = {
  getUsers: userActions.getAllTodos,
  deleteUser: userActions.delete,
  addTodo: userActions.addTodo,
};

const connectedHomePage = connect(mapState, actionCreators)(HomePage);
export { connectedHomePage as HomePage };
