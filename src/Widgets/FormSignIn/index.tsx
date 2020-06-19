import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { IAuthContext, withAuthContext } from '../../AuthProvider';
interface IFormSignInState {
  username: string;
  password: string;
  error: any;
  loading: boolean;
}
class FormSignIn extends React.Component<{ redirectTo: string, authContext: IAuthContext, history: any }, IFormSignInState> {
  private initialState: IFormSignInState = {
    error: null,
    loading: false,
    password: '',
    username: ''
  }
  constructor(props: any) {
    super(props);
    this.state = this.initialState;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  public render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group md-form">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            className="form-control"
            required={true}
            value={this.state.username}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group md-form">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-control"
            required={true}
            value={this.state.password}
            onChange={this.handleChange}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary btn-block"
        >Sign In</button>
      </form>
    );
  }
  private handleChange(evt: any) {
    evt.preventDefault();
    const obj = {};
    obj[evt.target.name] = evt.target.value;
    this.setState(obj);
  }
  private handleSubmit(evt: any) {
    evt.preventDefault();
    const { authContext, history, redirectTo } = this.props;
    this.setState({ error: null, loading: true });
    authContext.signIn(this.state.username, this.state.password)
      .then(() => {
        this.setState(this.initialState);
        history.push(redirectTo || '/');
      })
      .catch(error => this.setState({ error, loading: false }));
  }

}

export default compose(withAuthContext, withRouter)(FormSignIn);