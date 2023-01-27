var builder = WebApplication.CreateBuilder(args);

var config = builder.Configuration;

var Services = builder.Services;

Services.AddAplicationServices(config);

var app = builder.Build();

app.UseAppServices();

await app.RunAsync();