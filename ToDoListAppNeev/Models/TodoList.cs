using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ToDoListAppNeev.Models
{
    public class TodoList
    {
        public int Id { get; set; }
        public string Task { get; set; }
        public DateTime CreatedOn { get; set; }
        public bool IsCompleted { get; set; }
        public DateTime? CompletedOn { get; set; }
        public bool IsDeleted { get; set; }
        public DateTime? DeletedOn { get; set; }
    }
}
