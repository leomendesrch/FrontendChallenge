'use client'
import { ProductFetchResponse } from "@/types/product-response";
import { useQuery } from "@tanstack/react-query"
import axios, { AxiosPromise } from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const fetcher = (productId: string): AxiosPromise<ProductFetchResponse> => {
  return axios.post(API_URL,{query: 
    `query {
    Product(id: "${productId}"){
      category,
      name,
      price_in_cents,
      description,
      image_url,
      id,
    } 
  }
  `})
}


export function useProduct(id: string){
  const { data } = useQuery({
    queryFn: () => fetcher(id),
    queryKey: ['product', id],
    enabled: !!id
  });

  return{
    data: data?.data?.data?.Product
  }
}