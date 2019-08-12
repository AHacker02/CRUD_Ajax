using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CRUD_Ajax.Models
{
    public class ContactModel
    {
        
        public int Id{ get; set; }
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }
        [Required]
        public long PhoneNumber { get; set; }
        public string ProfileImage { get; set; }
        public string Email { get; set; }
        public DateTime DOB { get; set; }
    }
}
