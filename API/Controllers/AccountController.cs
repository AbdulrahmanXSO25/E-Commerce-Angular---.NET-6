namespace API.Controllers
{
    public class AccountController: BaseApiController
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly SignInManager<AppUser> _signInManager;

        public AccountController(UserManager<AppUser> userManager, SignInManager<AppUser>
        signInManager)
        {
            _userManager = userManager;
            _signInManager = signInManager;
        }

        [HttpPost("login")]
        public async Task<ActionResult<UserDto>> Login(LoginDto loginDto)
        {
            var user = await _userManager.FindByEmailAsync(loginDto.Email);

            if (user == null) { return Unauthorized(new ApiResponse(401)); }

            var result = await _signInManager.CheckPasswordSignInAsync(user, loginDto.Password,
                false);

            if (!result.Succeeded) { return Unauthorized(new ApiResponse(401)); }

            return new UserDto
            {
                Email = user.Email,
                DisplayName = user.DisplayName,
                Token = "This will be a token",
            };
        }

        [HttpPost("rigster")]
        public async Task<ActionResult<UserDto>> Rigster(RigsterDto rigsterDto)
        {
            var user = new AppUser
            {
                Email = rigsterDto.Email,
                DisplayName = rigsterDto.DisplayName,
                UserName = rigsterDto.Email
            };

            var result = await _userManager.CreateAsync(user, rigsterDto.Password);

            if (!result.Succeeded) { return BadRequest(new ApiResponse(400)); }

            return new UserDto
            {
                Email = user.Email,
                DisplayName = user.DisplayName,
                Token = "This will be a token"
            };
        }
    }
}
