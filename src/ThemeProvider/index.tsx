import * as React from 'react';
import { LayoutProvider } from 'react-page-layout';
import LayoutCard from './LayoutCard';
import LayoutHCF from './LayoutHCF';

const layouts = {
  LayoutHCF: LayoutHCF,
  LayoutCard: LayoutCard,
};

class ThemeProvider extends React.Component {
  public render() {
    return (
      <LayoutProvider layouts={layouts}>
        {this.props.children}
      </ LayoutProvider>
    );
  }
}

export default ThemeProvider;