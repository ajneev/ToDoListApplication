import React from "react";
import moment from "moment";

class ToDoListBlock extends React.Component {
  render() {
    const { list, revertTask, completeTask, deleteTask } = this.props;
    return (
      <div>
        <div className="container">
          <h5 style={{ marginTop: "10px" }}>Tasks</h5>
          {/* If Tasks are available, show them one by one*/}
          {list.length !== 0 ? (
            list.map((task, index) => {
              return (
                <div
                  className="card"
                  id={`task-${task.id}`}
                  key={task.id}
                  style={{
                    marginTop: "10px"
                  }}
                >
                  <div className="card-body">
                    <div className="row">
                      <div className="col">
                        <p
                          className="card-text"
                          style={
                            task.isCompleted
                              ? { color: "#28a745" }
                              : { color: "#212529" }
                          }
                        >
                          {task.task}
                        </p>
                        <span
                          className="badge badge-info"
                          style={{ marginRight: "3px" }}
                        >
                          Created On: {moment(task.createdOn).format("LLL")}
                        </span>
                        {task.isCompleted ? (
                          <span className="badge badge-info">
                            Completed On:{" "}
                            {moment(task.completedOn).format("LLL")}
                          </span>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="col">
                        <div className="row">
                          <div className="col">
                            {task.isCompleted ? (
                              <button
                                style={{ float: "right" }}
                                className="btn btn-success"
                                onClick={e => revertTask(task.id)}
                              >
                                Revert
                              </button>
                            ) : (
                              <button
                                style={{ float: "right" }}
                                className="btn btn-success"
                                onClick={e => completeTask(task.id)}
                              >
                                Complete
                              </button>
                            )}
                          </div>
                          <div className="w-100"></div>
                          <div className="col">
                            <button
                              style={{ float: "right", marginTop: "10px" }}
                              className="btn btn-success"
                              onClick={e => deleteTask(task.id)}
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div
              className="card"
              style={{
                marginTop: "10px"
              }}
            >
              {/* If  No Tasks  are available*/}
              <div className="card-body">No Task Found</div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default ToDoListBlock;
