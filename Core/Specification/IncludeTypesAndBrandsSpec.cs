namespace Core.Specification
{
    public class IncludeTypesAndBrandsSpec : BaseSpecification<Product>
    {
        public IncludeTypesAndBrandsSpec()
        {
            AddInclude(x => x.ProductBrand);
            AddInclude(x => x.ProductType);
        }

        public IncludeTypesAndBrandsSpec(int id) : base(x => x.Id == id)
        {
            AddInclude(x => x.ProductBrand);
            AddInclude(x => x.ProductType);
        }
    }
}
