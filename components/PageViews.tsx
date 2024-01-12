"use client"
import useSWR from 'swr';
import { FC } from 'react';

interface PageViewsProps {
  slug: string;
}

const fetcher = async (input: RequestInfo) => {
    try {
      const res: Response = await fetch(input);
  
      if (!res.ok) {
        throw new Error(`Failed to fetch data: ${res.status} - ${res.statusText}`);
      }
  
      const clonedResponse = res.clone(); // Clone the response before reading the JSON
  
      const data = await clonedResponse.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // rethrow the error to be handled by useSWR
    }
  };
  

const PageViews: FC<PageViewsProps> = ({ slug }) => {
  const { data,error } = useSWR(`/api/views/${slug}`, fetcher);
  if(error){
    console.log(error)
  }

  return <>{data?.total ? `${data.total} views` : `–––`}</>;
};

export default PageViews;