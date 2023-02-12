namespace API.DTOs
{
    public class BasketItemDto
    {
        public int Id { get; set; }

        public string ProductName { get; set; }

        [Range(0.1, double.MaxValue, ErrorMessage = "Price must be greater than 0")]
        public decimal Price { get; set; }

        [Range(1, int.MaxValue, ErrorMessage = "Quantity must be at least 1")]
        public int Quantity { get; set; }

        public string PictureURL { get; set; }

        public string Brand { get; set; }

        public string Type { get; set; }
    }
}
