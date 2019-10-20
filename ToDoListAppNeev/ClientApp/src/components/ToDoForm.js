import React from "react";

class ToDoForm extends React.Component {
  state = {
    taskDetail: "",
    errorDisplay: false
  };

  onFormSubmit = e => {
    const { taskDetail } = this.state;
    const { saveData } = this.props;

    e.preventDefault();
    document.getElementById("toDoText").value = "";
    if (
      taskDetail !== null &&
      taskDetail !== undefined &&
      taskDetail.replace(/^\s+|\s+$/g, "").length !== 0
    ) {
      saveData(taskDetail);
      this.setState({
        taskDetail: null
      });
    } else {
      this.setState({
        taskDetail: null,
        errorDisplay: true
      });
    }
  };

  render() {
    const { taskDetail } = this.state;

    return (
      <div>
        <div className="card">
          <div className="card-body">
            <form onSubmit={this.onFormSubmit}>
              <div className="form-group">
                <div className="row">
                  <div className="col">
                    <label htmlFor="toDoText">Add New Task:</label>
                  </div>
                  <div className="col-8">
                    <input
                      id="toDoText"
                      placeholder="Your New Task"
                      className="form-control"
                      type="text"
                      defaultValue={taskDetail}
                      onChange={e => {
                        this.setState({
                          taskDetail: e.target.value,
                          errorDisplay: false
                        });
                      }}
                    />
                    {this.state.errorDisplay ? (
                      <div
                        className="row"
                        style={{ marginTop: "5px", marginLeft: "5px" }}
                      >
                        <span className="badge badge-danger">
                          Please enter valid task
                        </span>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="col">
                    <button
                      style={{ float: "right" }}
                      className="btn btn-success"
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ToDoForm;
