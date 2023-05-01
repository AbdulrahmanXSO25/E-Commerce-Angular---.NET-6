namespace Infrastructure.Data.Config
{
    public class ProductConfiguration : IEntityTypeConfiguration<Product>
    {
        public void Configure(EntityTypeBuilder<Product> builder)
        {
            builder.Property(p => p.Id).IsRequired();
            builder.Property(p => p.Name).IsRequired().HasMaxLength(100);
            builder.Property(p => p.Description).IsRequired().HasMaxLength(500);
            builder.Property(p => p.Price).IsRequired().HasColumnType("decimal(18,2)");
            builder.Property(p => p.PictureURL).IsRequired();
            builder.HasOne(b => b.ProductType).WithMany()
                .HasForeignKey(b => b.ProductTypeId);
            builder.HasOne(b => b.ProductBrand).WithMany()
                .HasForeignKey(b => b.ProductBrandId);
        }
    }
}
