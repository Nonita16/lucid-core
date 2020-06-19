import * as React from 'react';

interface IFormSearchState {
  error: any;
  loading: boolean;
  search: string;
}

export interface IFormSearchProps {
  onSubmit(search: string): Promise<boolean>;
}

class FormSearch extends React.Component<IFormSearchProps, IFormSearchState> {
  private initialState: IFormSearchState = {
    error: null,
    loading: false,
    search: ''
  };
  constructor(props: any) {
    super(props);
    this.state = this.initialState;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  public render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="alert alert-danger" hidden={!this.state.error}>
          {JSON.stringify(this.state.error)}
        </div>
        <div className="form-group md-form">
          <div className="input-group">
            <label htmlFor="search">Search</label>
            <input
              type="text"
              id="search"
              name="search"
              className="form-control"
              required={true}
              value={this.state.search}
              onChange={this.handleChange}
            />
            <div className="input-group-append">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={this.state.loading}
              ><i className="fa fa-search" /></button>
            </div>
          </div>
        </div>
      </form>
    );
  }

  private handleChange(evt: any) {
    evt.preventDefault();
    const search = evt.target.value;
    this.setState({ search });
  }
  private handleSubmit(evt: any) {
    evt.preventDefault();
    const { onSubmit } = this.props;
    this.setState({ error: null, loading: true });
    onSubmit(this.state.search)
      .then(() => {
        this.setState(this.initialState);
      })
      .catch(error => this.setState({ error }));
  }

}

export default FormSearch;