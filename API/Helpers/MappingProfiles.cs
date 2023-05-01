using Core.Entities.OrderAggregate;
using Order = Core.Entities.OrderAggregate.Order;

namespace API.Helpers
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles() 
        {
            CreateMap<Product, ProductToReturnDto>()
                .ForMember(d => d.ProductBrand, o => o.MapFrom(e => e.ProductBrand.Name))
                .ForMember(d => d.ProductType, o => o.MapFrom(e => e.ProductType.Name))
                .ForMember(d => d.PictureURL, o => o.MapFrom<ProductUrlResolver>());

            CreateMap<Core.Entities.Identity.Address, AddressDto>().ReverseMap();
            CreateMap<CustomerBasketDto, CustomerBasket>();
            CreateMap<BasketItemDto, BasketItem>();
            CreateMap<AddressDto ,Core.Entities.OrderAggregate.Address>();
            CreateMap<Order, OrderToReturnDto>()
                .ForMember(d => d.DeliveryMethod, o => o.MapFrom(sh => sh.DeliveryMethod.ShortName))
                .ForMember(d => d.ShippingPrice, o => o.MapFrom(sh => sh.DeliveryMethod.Price));
            CreateMap<OrderItem, OrderItemDto>()
                .ForMember(i => i.ProductId, o => o.MapFrom(i => i.ItemOrdered.ProductItemId))
                .ForMember(i => i.ProductName, o => o.MapFrom(i => i.ItemOrdered.ProductName))
                .ForMember(i => i.PictureUrl, o => o.MapFrom(i => i.ItemOrdered.PictureUrl))
                .ForMember(i => i.PictureUrl, o => o.MapFrom<OrderItemUrlResolver>());

        }
    }
}
