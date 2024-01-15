import { NextApiRequest, NextApiResponse } from 'next';
import { SupabaseAdmin } from '@/supabase/supabaseAdmin';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    // Call our stored procedure with the page_slug set by the request params slug
    console.log(req.query.slug)
    await SupabaseAdmin.rpc('increment_page_view', { page_slug: req.query.slug });
    return res.status(200).json({
      message: `Successfully incremented page: ${req.query.slug}`
    });
  }
console.log(res)
  if (req.method === 'GET') {
    // Query the pages table in the database where slug equals the request params slug.
    const { data,error } = await SupabaseAdmin.from('pages').select('view_count').filter('slug', 'eq', req.query.slug);
console.log(data)
if (error) {
  console.error('Supabase error:', error);
  return res.status(500).json({ message: 'Internal Server Error' });
}
    if (data) {
      return res.status(200).json({
        total: data[0]?.view_count || null
      });
    }
  }

  return res.status(400).json({
    message: 'Unsupported Request'
  });
};

export default handler;
