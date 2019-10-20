using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ToDoListAppNeev.Models;

namespace ToDoListAppNeev.Data
{
    public interface IAuthRepository
    {
        Task<List<TodoList>> GetAllListValues();
        Task<TodoList> SaveNewTask(TodoList task);
        Task<TodoList> MarkTaskCompleted(int taskId);
        Task<TodoList> RevertTaskCompleted(int taskId);
        Task<bool> DeleteTask(int taskId);
    }
}
