using cw5_ef.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace cw5_ef.Controllers
{
    public class PersonController : Controller
    {
        private readonly PersonDbContext _context;
        public PersonController(PersonDbContext context)
        {
            _context = context;
        }

        // GET: PersonController
        public ActionResult List()
        {
            var people = _context.People.Include(p=>p.Place).ToList();
            return View(people);
        }
        [HttpGet]
        public ActionResult AddPerson()
        {
            ViewBag.WorkPlaces = _context.WorkerPlaces.ToList();
            return View();
        }
        [HttpPost]
        public ActionResult AddPerson(MyPerson person)
        {
            ViewBag.WorkPlaces = _context.WorkerPlaces.ToList();
            if (ModelState.IsValid)
            {
                _context.People.Add(person);
                _context.SaveChanges();
                return RedirectToAction("List");
            }
            return View(person);
        }
        public IActionResult DeletePerson(int? id)
        {
            if (id != null)
            {
                var person = _context.People.Find(id);
                if (person != null)
                {
                    _context.People.Remove(person);
                  //  _context.People.Update(person);
                    _context.SaveChanges();
                }
            }
            return RedirectToAction("List");
        }

    }
}
