using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ToDoListAppNeev.Data;
using ToDoListAppNeev.Dtos;
using ToDoListAppNeev.Models;

namespace ToDoListAppNeev.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ToDoListController : ControllerBase
    {
        private readonly IAuthRepository _repo;

        public ToDoListController(IAuthRepository repo)
        {
            _repo = repo;
        }


        // Function to Fetch All Lists which is not deleted  from Database
        [HttpGet]
        public async Task<IActionResult> GetValues()
        {
            var values = await _repo.GetAllListValues();

            return Ok(values);
        }

        // Function To Save a new Task into Database
        [HttpPost("saveTask")]
        public async Task<IActionResult> SaveTask(TaskDetails taskdetails)
        {
            var taskToSave = new TodoList
            {
                Task = taskdetails.Description,
                IsCompleted = false,
                CompletedOn = null,
                CreatedOn = DateTime.Now,
                IsDeleted = false,
                DeletedOn = null
            };
            var values = await _repo.SaveNewTask(taskToSave);

            return StatusCode(201);
        }

        // Function To Mark an existing Task as Completed into Database
        [HttpPost("completeTask/{taskId}")]
        public async Task<IActionResult> CompleteATask(int taskId)
        {
            var values = await _repo.MarkTaskCompleted(taskId);

            return StatusCode(201);
        }

        // Function To revert an existing Completed Task as Uncompleted in the Database
        [HttpPost("revertCompleteTask/{taskId}")]
        public async Task<IActionResult> RevertCompleteATask(int taskId)
        {
            var values = await _repo.RevertTaskCompleted(taskId);

            return StatusCode(201);
        }

        // Function To delete a task
        [HttpPost("deleteTask/{taskId}")]
        public async Task<IActionResult> DeleteATask(int taskId)
        {
            var values = await _repo.DeleteTask(taskId);

            return StatusCode(201);
        }
    }
}