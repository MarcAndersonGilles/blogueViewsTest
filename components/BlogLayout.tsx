import { FC } from 'react';
import PageViews from './PageViews';

interface BlogLayoutProps {
  slug: string;
  children?: React.ReactNode;
}

const BlogLayout: FC<BlogLayoutProps> = ({ slug }) => {
    // console.log(slug)
  //   const apiUrl = `/api/views/${slug}`;
  // const fetchPageViews = async () => {
  //   try {
  //     await fetch(apiUrl, {
  //       method: 'POST'
  //     });
  //   } catch (error) {
  //     console.error('Error fetching page views:', error);
  //   }
  // };

  // // Call the fetch function directly within the component body or in response to an event
  // fetchPageViews();

  return (
    <div>
      <div>
        <PageViews slug={slug} />
      </div>
    </div>
  );
};

export default BlogLayout;
