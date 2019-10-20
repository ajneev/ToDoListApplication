using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ToDoListAppNeev.Models;

namespace ToDoListAppNeev.Data
{
    public class AuthRepository : IAuthRepository
    {
        private readonly DataContext _context;

        public AuthRepository(DataContext context)
        {
            _context = context;
        }

        // Function to Fetch All Lists which is not deleted  from Database
        public async Task<List<TodoList>> GetAllListValues()
        {
            var values = await _context.TodoLists.Where(s => s.IsDeleted == false).ToListAsync();

            return values;
        }

        // Function To Save a new Task into Database
        public async Task<TodoList> SaveNewTask(TodoList taskToSave)
        {
            await _context.TodoLists.AddAsync(taskToSave);
            await _context.SaveChangesAsync();

            return taskToSave;

        }

        // Function To Mark an existing Task as Completed into Database
        public async Task<TodoList> MarkTaskCompleted(int taskId)
        {
            TodoList values = await _context.TodoLists.FirstOrDefaultAsync(x => x.Id == taskId);
            values.IsCompleted = true;
            values.CompletedOn = DateTime.Now;
            await _context.SaveChangesAsync();

            return values;

        }

        // Function To revert an existing Completed Task as Uncompleted in the Database
        public async Task<TodoList> RevertTaskCompleted(int taskId)
        {
            TodoList values = await _context.TodoLists.FirstOrDefaultAsync(x => x.Id == taskId);
            values.IsCompleted = false;
            values.CompletedOn = null;
            await _context.SaveChangesAsync();

            return values;

        }

        // Function To delete a task
        public async Task<bool> DeleteTask(int taskId)
        {
            TodoList values = await _context.TodoLists.FirstOrDefaultAsync(x => x.Id == taskId);
            values.IsDeleted = true;
            values.DeletedOn = DateTime.Now;
            await _context.SaveChangesAsync();

            return true;

        }
    }
}
