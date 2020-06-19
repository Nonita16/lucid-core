import * as React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IAuthContext, withAuthContext } from '../../AuthProvider';

const ProtectedRoute = (props: { path: string, component: any, authContext: IAuthContext }) => {
  const { isSignedIn } = props.authContext;
  return isSignedIn
    ? <Route {...props} />
    : <Redirect to="/sign-in" />;
}

export default (withAuthContext)(ProtectedRoute);