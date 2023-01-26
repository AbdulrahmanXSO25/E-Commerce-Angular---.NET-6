namespace API.Errors
{
    public class ApiException : ApiResponse
    {
        public string details { get; set; }
        public ApiException(int StatusCode, string Message = null, string Details = null)
            : base(StatusCode, Message)
        {
            details = Details;
        }


    }
}
