import React, { Component } from "react";

class ToDoListSearch extends Component {
  render() {
    const { filterText, handleChangeOnSearch } = this.props;

    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <form className="form-inline">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  @
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Search using Task"
                defaultValue={filterText}
                onChange={handleChangeOnSearch}
                aria-label="Search"
                aria-describedby="basic-addon1"
              />
            </div>
          </form>
        </nav>
      </div>
    );
  }
}
export default ToDoListSearch;
