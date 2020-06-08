using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SportsAngularRouteAlex.Models
{
    public class ApplicationDbContex : DbContext
    {
        public DbSet<Article> Articles { get; set; }

        public ApplicationDbContex(DbContextOptions<ApplicationDbContex> options): base(options)
        {

        }
    }
}
