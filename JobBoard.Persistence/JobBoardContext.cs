using JobBoard.Core.Models;
using JobBoard.Persistence.EntityConfigurations;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace JobBoard.Persistence
{
    public class JobBoardContext : IdentityDbContext<JobBoardUser>
    {
        public JobBoardContext(DbContextOptions<JobBoardContext> options)
            : base(options)
        {

        }
        public DbSet<Country> Countries { get; set; }
        public DbSet<State> States { get; set; }
        public DbSet<Applicant> Applicants { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Occupation> Occupations { get; set; }
        public DbSet<Core.Models.JobBoard> JobBoards { get; set; }
        //public DbSet<JobOccupation> Occupations { get; set; }
        public DbSet<Job> Jobs { get; set; }
        public DbSet<SalaryType> SalaryTypes { get; set; }
        public DbSet<EmploymentType> EmploymentTypes { get; set; }
        public DbSet<Stat> Stats { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            ConfigureModel(modelBuilder);

            base.OnModelCreating(modelBuilder);
        }

        private static void ConfigureModel(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new StateConfigurations());
            modelBuilder.ApplyConfiguration(new CountryConfigurations());
            modelBuilder.ApplyConfiguration(new ApplicantConfigurations());
            modelBuilder.ApplyConfiguration(new CategoryConfigurations());
            modelBuilder.ApplyConfiguration(new JobBoardConfigurations());
            modelBuilder.ApplyConfiguration(new JobOccupationConfigurations());
            modelBuilder.ApplyConfiguration(new OccupationCofigurations());
            modelBuilder.ApplyConfiguration(new JobConfigurations());
            modelBuilder.ApplyConfiguration(new EmploymentTypeConfigurations());
            modelBuilder.ApplyConfiguration(new SalaryTypeConfigurations());
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            //optionsBuilder.UseSqlServer(
            //    "Server = (localdb)\\mssqllocaldb; Database = JobWindow; Trusted_Connection = True;");
        }
    }
}
