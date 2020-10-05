using BitcubeServer.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace BitcubeServer.Controllers
{
    [Route("api/login")]
    [ApiController]
    // [Authorize]
    public class LoginController : ControllerBase
    {
        private readonly UserService _userService;

        public LoginController(UserService userService)
        {
            _userService = userService;
        }

        [HttpPost]
        public ActionResult<User> Login(User userIn)
        {
            var user = _userService.Login(userIn);

            if (user != null)
            {
                return BadRequest(new
                {
                    message = "Invalid email or password"
                });
            }
            else {

                return Ok(new {
                    Id = user.Id,
                    FirstName = user.FirstName,
                    LastName = user.LastName,
                    Email = user.Email
                });
            }
        }
    }
}