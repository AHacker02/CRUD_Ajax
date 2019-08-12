using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CRUD_Ajax.Models;
using Microsoft.EntityFrameworkCore;

namespace CRUD_Ajax.DataAccess
{
    public class ContactsContext:DbContext
    {
        public ContactsContext(DbContextOptions<ContactsContext> options):base(options)
        {
            
        }

        public DbSet<ContactModel> Contacts { get; set; }
    }
}
