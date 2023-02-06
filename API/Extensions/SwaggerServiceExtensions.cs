namespace API.Extensions
{
    public static class SwaggerServiceExtensions
    {
        public static IServiceCollection AddSwaggerDocumentation(this IServiceCollection services)
        {

            services.AddSwaggerGen(c => c.SwaggerDoc("v1", new OpenApiInfo { Title = "E-Commerce API", Version = "v1" }));

            return services;
        }
    }
}
