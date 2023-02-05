import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBrand } from '../shared/models/brand';
import { IPagination } from '../shared/models/pagination';
import { IProduct } from '../shared/models/product';
import { ShopParams } from '../shared/models/shopParams';
import { IType } from '../shared/models/type';
import { environment } from 'src/env/environment';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  apiUrl = environment.baseApiUrl + 'products';

  constructor(private http: HttpClient) { }

  getProducts(shopParams: ShopParams) {
    let params = new HttpParams();

    if(shopParams.brandId > 0) params = params.append('brandId', shopParams.brandId);
    if(shopParams.typeId > 0) params = params.append('typeId', shopParams.typeId);
    params = params.append('sort', shopParams.sort);
    params = params.append('pageIndex', shopParams.pageNumber);
    params = params.append('pageSize', shopParams.pageSize);
    if(shopParams.search) params = params.append('search', shopParams.search);

    return this.http.get<IPagination>(this.apiUrl, {params});
  }

  getProduct(id: number) {
    return this.http.get<IProduct>(this.apiUrl + id);
  }

  getBrands() {
    return this.http.get<IBrand[]>(this.apiUrl+'/brands');
  }

  getTypes() {
    return this.http.get<IType[]>(this.apiUrl+'/types');
  }
}
