namespace API.DTOs
{
    public class RigsterDto
    {
        public string DisplayName { get; set; }

        [EmailAddress]
        public string Email { get; set; }

        [RegularExpression("(?=^.{8,14}$)(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\\s).*$",
            ErrorMessage = "Password must have 1 Uppercase, 1 Lowercase, 1 number, 1 non alphanumeric and at least 8 characters")]
        public string Password { get; set; }
    }
}