var builder = WebApplication.CreateBuilder(args);

var config = builder.Configuration;

builder.Services.AddAplicationServices(config);
builder.Services.AddSwaggerDocumentation();

var app = builder.Build();

app.MapControllers();

app.AddAppMethods();
app.UseSwaggerDocumentation();

await app.RunAsync();