var builder = WebApplication.CreateBuilder(args);

var config = builder.Configuration;

var Services = builder.Services;

Services.AddAplicationServices(config);
Services.AddIdentityServices(config);

var app = builder.Build();

app.UseMiddleware<ExceptionMiddlware>();

app.UseStatusCodePagesWithReExecute("/errors/{0}");

app.UseHttpsRedirection();

app.UseRouting();

app.UseCors("CorsPolicy");

app.UseAuthentication();
app.UseAuthorization();

using (var scope = app.Services.CreateScope())
{
    var services = scope.ServiceProvider;
    var loggerFactory = services.GetRequiredService<ILoggerFactory>();

    var context = services.GetRequiredService<ApplicationDbContext>();
    var identityContext = services.GetRequiredService<ApplicationIdentityDbContext>();
    var userManager = services.GetRequiredService<UserManager<AppUser>>();

    try
    {
        await identityContext.Database.MigrateAsync();
        await context.Database.MigrateAsync();
        await ApplicationDbContextSeed.SeedAsync(context, loggerFactory);
        await ApplicationIdentityDbContextSeed.SeedUsersAsync(userManager);
    }
    catch (Exception ex)
    {
        var logger = loggerFactory.CreateLogger<Program>();
        logger.LogError(ex, "An error occured during migration");
    }
}

app.UseEndpoints(endpoint =>
{
    endpoint.MapControllers();
});

app.UseSwagger();
app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "API V1"));

await app.RunAsync();