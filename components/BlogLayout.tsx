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

  return (
    <div>
      <div>
        <PageViews slug={slug} />
      </div>
    </div>
  );
};

export default BlogLayout;
