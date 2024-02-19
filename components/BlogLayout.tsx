"use server"
import PageViews from './PageViews';



const BlogLayout = async ({ slug }:{slug:string}) => {
 
  await fetch(`http://localhost:3000/api/views/${slug}`, {
    method: 'POST',
  }).then((response) => {
    console.log(response)
  }).catch((error) => {
    console.log(error)
  });
  var ip = null;

  await fetch(`${process.env.VERCEL_URL}`, {
    method: 'GET',
  }).then((response) => {
    return response.json();
    
  }).then((data) => {
  
    ip = data.ip;
    console.log(ip)

  })
  .catch((error) => {});

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
