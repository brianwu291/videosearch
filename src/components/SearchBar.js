import React from 'react';

class SearchBar extends React.Component {
  state = {term:""};

  onInputChange = e => {
    this.setState({term: e.target.value});
  };

  onFormSubmit = e => {
    e.preventDefault();

    this.props.onTermSubmit(this.state.term);
  };

  onButtonClick = e => {
    this.props.onTermSubmit(this.state.term);
  };

  render(){
    return (
      <div className="ui segments"
           style={{ marginTop: '2rem' }}>
        <form
          className="ui form"
          onSubmit={this.onFormSubmit}>
          <div className="field">
            <div className="ui fluid action input">
              <input
                type="text"
                placeholder="Search..."
                value={this.state.term}
                onChange={this.onInputChange}></input>
              <div className="ui button" onClick={this.onButtonClick}>Search</div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
