import * as React from 'react';

const AuthContext = React.createContext({});

interface IAuthState {
  displayName: string;
  isSignedIn: boolean;
}
export interface IAuthContext extends IAuthState {
  signIn(username: string, password: string): Promise<boolean>;
  signOut(): Promise<boolean>;
}

class AuthProvider extends React.Component<{}, IAuthState> {
  private initialState: IAuthState = {
    displayName: '',
    isSignedIn: false,
  }
  constructor(props: any) {
    super(props);
    this.state = this.initialState;
    this.signIn = this.signIn.bind(this);
    this.signOut = this.signOut.bind(this);
  }
  public render() {
    return (
      <AuthContext.Provider value={{
        ...this.state,
        signIn: this.signIn,
        signOut: this.signOut
      }}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
  private signIn(username: string, password: string): Promise<boolean> {
    if (username === password) {
      this.setState({
        displayName: username,
        isSignedIn: true,
      });
      return Promise.resolve(true);
    }
    return Promise.resolve(false);
  }
  private signOut(): Promise<boolean> {
    this.setState(this.initialState);
    return Promise.resolve(true);
  }
}

export default AuthProvider;

export const withAuthContext = (WrappedComponent: any) => {
  return (props: any) => (
    <AuthContext.Consumer>
      {(authContext: IAuthContext) => (<WrappedComponent authContext={authContext} {...props} />)}
    </AuthContext.Consumer>
  );
}