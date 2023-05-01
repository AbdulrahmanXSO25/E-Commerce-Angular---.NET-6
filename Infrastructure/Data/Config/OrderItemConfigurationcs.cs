namespace Infrastructure.Data.Config
{
    public class OrderItemConfigurationcs : IEntityTypeConfiguration<OrderItem>
    {
        public void Configure(EntityTypeBuilder<OrderItem> builder)
        {
            builder.OwnsOne(i => i.ItemOrdered, io => { io.WithOwner(); });

            builder.Property(i => i.Price).HasColumnType("decimal(18,2)");
        }
    }
}
