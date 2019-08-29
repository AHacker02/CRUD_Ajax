using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CRUD_Ajax.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace CRUD_Ajax.DataAccess
{
    public class SeedData
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            using (var serviceScope=serviceProvider.CreateScope())
            {
                using (var context = new ContactsContext(
                    serviceScope.ServiceProvider.GetRequiredService<DbContextOptions<ContactsContext>>()))
                {
                    context.Database.EnsureCreated();
                    // Look for any contacts.
                    if (context.Contacts.Any())
                    {
                        return;   // DB has been seeded
                    }

                    context.Contacts.AddRange(
                        new ContactModel
                        {
                            FirstName = "Arghya",
                            LastName = "Ghosh",
                            DOB = DateTime.Parse("02/05/1996"),
                            Email = "arghyag5@gmail.com",
                            PhoneNumber = 8017600538
                        }
                    );
                    try
                    {
                        context.SaveChanges();
                    }
                    catch (Exception e)
                    {

                    }
                }
            }
            
        }
    }
}
