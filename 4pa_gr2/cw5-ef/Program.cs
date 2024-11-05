var builder = WebApplication.CreateBuilder(args);
string? connString = builder.Configuration.GetConnectionString("Mysql");
builder.Services.AddControllersWithViews();
//dodanie Dbcontext
var app = builder.Build();
app.UseStaticFiles();
//app.MapGet("/", () => "Hello World!");
app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Person}/{action=List}/{id?}");
app.Run();
