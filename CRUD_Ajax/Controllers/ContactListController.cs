using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CRUD_Ajax.DataAccess;
using Microsoft.AspNetCore.Mvc;

namespace CRUD_Ajax.Controllers
{
    public class ContactListController : Controller
    {
        [HttpGet]
        public IActionResult Index()
        {
            return View();
        }
    }
}