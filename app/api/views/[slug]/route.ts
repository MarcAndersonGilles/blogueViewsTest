// import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse,NextRequest } from "next/server";
import { SupabaseAdmin } from '@/supabase/supabaseAdmin';
import { parse } from 'url';

export async function GET(req: NextRequest, { params }: { params: { slug: string } }) {
  const slug = params.slug;
  const { data, error } = await SupabaseAdmin.from('pages').select('view_count').filter('slug', 'eq', slug);

  console.log('Slug:', slug);
  console.log('Data:', data);
  console.log('Error:', error);

  if (error) {
    console.error('Supabase error:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }

  if (data) {
    return NextResponse.json({
      total: data[0]?.view_count || null
    }, { status: 200 });
  }

  return NextResponse.json({ message: 'Unsupported Request' }, { status: 400 });
}


export async function POST(req: NextRequest, { params }: { params: { slug: string } }) {
  // const { query } = parse(req.url, true);
 
  const slug = params.slug;
  console.log(params);
console.log(slug)
  console.log(req.method);
  console.log(req.url);
 
  await SupabaseAdmin.rpc('increment_page_view', { page_slug: slug });

  return NextResponse.json({
    message: `Successfully incremented page: ${slug}`
  }, { status: 200 });
}
