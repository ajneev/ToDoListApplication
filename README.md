# ToDoListApplication
 A Simple To Do List App or Task Manager with ASP.Net Core and ReactJS


The project is developed using ASP .NET Core as backend, with ReactJS template as frontend.
The project uses a Repository design pattern structure in the backend, and JS ES6 React JSX Class Component structure in the frontend.
The project used additional NPM dependencies of Axios for Web API calls to back end, Moment for formatting date and time,
and Bootstrap for CSS Styling.
The project was developed using Microsoft LocalDB as the server,which can be viewed using SSMS
with an addon called SQL Server Express LocalDB. 

Project Functionalities
1)	See all existing tasks (or to-do items) that are not deleted.
2)	Get informed on created time, completed time, and completed status.
3)	Add New task as wanted using Add feature.
4)	Mark a task as completed.
5)	Revert a completed task to uncompleted status.
6)	Delete an unwanted task.
7)	Search for a task with its description with the Search feature.

Steps Needed to Setup and Run the Project

1) Clone the project to local 
using https://github.com/ajneev/ToDoListApplication or https://github.com/ajneev/ToDoListApplication.git 

2) Create a DB in server preferred and update the connection string in appSettings.json file 
and also  Configure Services in Startup.cs file accordingly.

3)  Run dotnet ef database update to run the last migration and also update the Database with corresponding tables and  fields.

4) Run the application in VS, which will  build the whole projects and also install the npm dependencies specified.
Or 
Run using terminal:  with dotnet run from base folder and npm start from ClientApp folder. 
Once the client app gets running using 3000 port, replace 3000 port with server port of 5000 or 5001.
E.g.: Run in https://localhost:5000

5) Use the application.


