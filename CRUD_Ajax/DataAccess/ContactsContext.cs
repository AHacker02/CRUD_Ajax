using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using CRUD_Ajax.Models;
using Microsoft.EntityFrameworkCore;

namespace CRUD_Ajax.DataAccess
{
    public class ContactsContext:DbContext
    {
        //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        //{
        //    optionsBuilder.UseSqlite("Filename=./contact.db", options =>
        //    {
        //        options.MigrationsAssembly(Assembly.GetExecutingAssembly().FullName);
        //    });
        //    base.OnConfiguring(optionsBuilder);

        //}

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Map table names
            modelBuilder.Entity<ContactModel>().ToTable("Contacts", "dbo");
            modelBuilder.Entity<ContactModel>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.HasIndex(e => e.PhoneNumber).IsUnique();
            });


            base.OnModelCreating(modelBuilder);
        }
        public ContactsContext(DbContextOptions<ContactsContext> options):base(options)
        {
            
        }

        public DbSet<ContactModel> Contacts { get; set; }
    }
}
