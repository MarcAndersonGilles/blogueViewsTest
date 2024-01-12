import { FC } from 'react';
import PageViews from './PageViews';

interface BlogLayoutProps {
  slug: string;
}

const BlogLayout: FC<BlogLayoutProps> = ({ slug }) => {
    console.log(slug)
  const fetchPageViews = async () => {
    try {
      await fetch(`/api/views/${slug}`, {
        method: 'POST'
      });
    } catch (error) {
      console.error('Error fetching page views:', error);
    }
  };

  // Call the fetch function directly within the component body or in response to an event
  fetchPageViews();

  return (
    <div>
      <h1>{slug}</h1>
      <div>
        <PageViews slug={slug} />
      </div>
    </div>
  );
};

export default BlogLayout;
