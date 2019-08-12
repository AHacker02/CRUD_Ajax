using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CRUD_Ajax.DataAccess;
using CRUD_Ajax.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CRUD_Ajax.Controllers
{
    [Route("api/contacts")]
    [ApiController]
    public class ContactAPIController : ControllerBase
    {
        private readonly ContactsContext _contactsContext;

        public ContactAPIController(ContactsContext contactsContext)
        {
            _contactsContext = contactsContext;
        }

        [HttpGet]
        [Route("allcontacts")]
        public IActionResult GetAllContacts()
        {
            if (_contactsContext.Contacts.Any())
            {
                return Ok(_contactsContext.Contacts);
            }

            return NotFound("No contacts Found");
        }

        [HttpPost]
        [Route("addcontact")]
        public IActionResult AddContact(ContactModel newContact)
        {
            if (_contactsContext.Contacts.Any(x => x.PhoneNumber == newContact.PhoneNumber))
            {
                return Conflict($"Contact already exists with the name {_contactsContext.Contacts.FirstOrDefault(x => x.PhoneNumber == newContact.PhoneNumber)?.FirstName}");
            }

            _contactsContext.Contacts.Add(newContact);
            try
            {
                _contactsContext.SaveChanges();
                return Created("Contact created successfully",
                    _contactsContext.Contacts.FirstOrDefault(x => x.PhoneNumber == newContact.PhoneNumber));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message + " " + ex.StackTrace);
            }
        }


        [HttpPut]
        [Route("updatecontact")]
        public IActionResult UpdateContact(ContactModel updatedContact)
        {
            if (!_contactsContext.Contacts.Any(x => x.Id == updatedContact.Id))
            {
                return NotFound("Contact not found");
            }

            if (!_contactsContext.Contacts.Any(x => x.PhoneNumber == updatedContact.PhoneNumber))
            {
                return BadRequest("Phone number already exists");
            }

            _contactsContext.Contacts.Update(updatedContact);

            try
            {
                _contactsContext.SaveChanges();
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message + " " + ex.StackTrace);
            }
        }

        [HttpDelete]
        [Route("deletecontact")]
        public IActionResult DeleteContact(int id)
        {
            if (!_contactsContext.Contacts.Any(x => x.Id == id))
            {
                return NotFound("Contact doesn't exist");
            }

            _contactsContext.Contacts.Remove(_contactsContext.Contacts.FirstOrDefault(x => x.Id == id));
            try
            {
                _contactsContext.SaveChanges();
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message + " " + e.StackTrace);
            }

        }
    }
}