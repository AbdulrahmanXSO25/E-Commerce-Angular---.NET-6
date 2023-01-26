namespace API.Controllers
{
    [Route("errors/{code}")]
    public class ErrorController: BaseApiController
    {
        protected IActionResult Error(int code)
        {
            return new ObjectResult(new ApiResponse(code));
        }
    }
}
