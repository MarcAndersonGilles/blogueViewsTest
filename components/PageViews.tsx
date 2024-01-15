"use client"
import useSWR from 'swr';
import { FC } from 'react';

interface PageViewsProps {
  slug: string;
}

const fetcher = async (input: RequestInfo) => {
  const res: Response = await fetch(input);
console.log(res)
  if (!res.ok) {
    if (res.status === 404) {
      // Handle 404 error, e.g., return a default value or log a message
      console.error('Resource not found:', input);
      return { total: 0 }; // Assuming a default value for your data
    }

    throw new Error(`HTTP error! Status: ${res.status}`);
  }

  // Check if the response content type is JSON
  const contentType = res.headers.get('content-type');
  if (!contentType || !contentType.includes('application/json')) {
    console.error('Response is not JSON:', await res.text());
    throw new Error('Invalid response format: not JSON');
  }

  return await res.json();
};



const PageViews: FC<PageViewsProps> = ({ slug }) => {
  const { data,error } = useSWR(`/api/views/${slug}`,  fetcher);

  if(error){
    console.log(error)
  }

  return <>{data?.total ? `${data.total} views` : `–––`}</>;
};

export default PageViews;