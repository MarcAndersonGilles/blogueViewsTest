import { NextApiRequest, NextApiResponse } from 'next';
import { SupabaseAdmin } from '@/supabase/supabaseAdmin';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    // Call our stored procedure with the page_slug set by the request params slug
    console.log(req.query.slug)
    await SupabaseAdmin.rpc('increment_page_view', { page_slug: req.query.slug });
    return res.status(200).json({
      message: `Successfully incremented page: ${req.query.slug}`
    });
  }

  if (req.method === 'GET') {
    // Query the pages table in the database where slug equals the request params slug.
    const { data } = await SupabaseAdmin.from('pages').select('view_count').filter('slug', 'eq', req.query.slug);
console.log(data)
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