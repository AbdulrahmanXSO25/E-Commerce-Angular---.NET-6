namespace Infrastructure.Identity
{
    public class ApplicationIdentityDbContextSeed
    {
        public static async Task SeedUsersAsync(UserManager<AppUser> userManager)
        {
            if (!userManager.Users.Any())
            {
                var firstUser = new AppUser
                {
                    DisplayName = "XSO25",
                    Email = "abdulrahman@xso25.me",
                    UserName = "abdulrahman@xso25.me",
                    Address = new Core.Entities.Identity.Address
                    {
                        FirstName = "Abdulrahman",
                        LastName = "Nader",
                        Street = "Al-Salam",
                        City = "Aja",
                        State = "AdDakahlia",
                        ZipCode = "35769"
                    }
                };

                var secondUser = new AppUser
                {
                    DisplayName = "Neil",
                    Email = "neil@xso25.me",
                    UserName = "neil@xso25.me",
                    Address = new Core.Entities.Identity.Address
                    {
                        FirstName = "Neil",
                        LastName = "Cummings",
                        Street = "Washington Street",
                        City = "New York City",
                        State = "New-York",
                        ZipCode = "10004"
                    }
                };

                await userManager.CreateAsync(firstUser, "P@ssw0rd");
                await userManager.CreateAsync(secondUser, "P@ssw0rd");
            }
        }
    }
}
