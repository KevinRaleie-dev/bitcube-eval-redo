using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BitcubeServer.Models;
using BitcubeServer.Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace BitcubeServer
{
    public class Startup
    {
        // readonly string AllowSpecificOrigin = "_allowSpecificOrigin";
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers().AddNewtonsoftJson(options => options.UseMemberCasing());
            services.AddSingleton<UserService>();
            services.AddSingleton<PostService>();
            services.Configure<UsersDatabaseSettings>(Configuration.GetSection(nameof(UsersDatabaseSettings)));
            services.Configure<PostsDatabaseSettings>(Configuration.GetSection(nameof(PostsDatabaseSettings)));
            services.AddSingleton<IUsersDatabaseSettings>(sp => sp.GetRequiredService<IOptions<UsersDatabaseSettings>>().Value);
            services.AddSingleton<IPostsDatabaseSettings>(sp => sp.GetRequiredService<IOptions<PostsDatabaseSettings>>().Value);
            services.AddCors();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseCors(options =>
            {
                options.WithOrigins("http://localhost:3000")
                .AllowAnyOrigin()
                .AllowAnyHeader()
                .AllowAnyMethod();
            });

            app.UseHttpsRedirection();

            app.UseRouting();


            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
