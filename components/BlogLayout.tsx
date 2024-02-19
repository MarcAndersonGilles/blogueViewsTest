"use server"
import PageViews from './PageViews';
import { BASE_API_URL } from '@/utils/utils-constants';
import { headers } from "next/headers";

const BlogLayout = async ({ slug }:{slug:string}) => {
 
  await fetch(`${BASE_API_URL}/api/views/${slug}`, {
    method: 'POST',
  }).then((response) => {
    console.log(response)
  }).catch((error) => {
    console.log(error)
  });
  var ip = null;

  await fetch(`${BASE_API_URL}/api/iptest`, {
    method: 'GET',
    headers: Object.fromEntries(headers())
  }).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Failed to fetch IP');
    }
  }).then((data) => {
    ip = data.ip;
    console.log(ip);
  }).catch((error) => {
    console.error('Error fetching IP:', error);
  });
  

  if(!BASE_API_URL){
    return null
  }

  return (
    <div>
      <div>
        <PageViews slug={slug} />
      </div>
      <div className='text-black font-bold text-xl'>IP test : {ip}</div>
    </div>
  );
};

export default BlogLayout;
