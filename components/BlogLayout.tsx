"use server"
import PageViews from './PageViews';
import { BASE_API_URL } from '@/utils/utils-constants';


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
    next: {
      revalidate: 0
      
    }
  }, ).then((response) => {
    return response.json();
    
  }).then((data) => {
  
    ip = data.ip;
    console.log(ip)

  })
  .catch((error) => {
    console.log(error)
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
