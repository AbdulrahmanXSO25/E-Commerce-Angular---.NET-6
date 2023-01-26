namespace API.Errors
{
    public class ApiResponse
    {

        public int statusCode { get; set; }
        public string message { get; set; }

        public ApiResponse(int StatusCode, string Message = null)
        {
            statusCode = StatusCode;
            message = Message ?? GetDefaultMessageForStatusCode(StatusCode);
        }

        private string GetDefaultMessageForStatusCode(int statusCode)
        {
            return statusCode switch
            {
                400 => "A bad request, you have made",
                401 => "Authorized, you are not",
                404 => "Resource found, it was not",
                500 => "Errors are the path to the dark sid. Errors lead to anger. Anger leads to hate. Hate leads to career change",
                _ => null
            };
        }
    }
}
