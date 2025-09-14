import { buildAmazonUrl } from '@/lib/affiliates';
import { NextResponse } from 'next/server';

export async function GET(
  req: Request,
  { params }: { params: { asin: string } }
) {
  const { searchParams } = new URL(req.url);
  const brand = searchParams.get('brand') || undefined;
  const product = searchParams.get('product') || undefined;
  const target = buildAmazonUrl(params.asin, brand, product);
  return NextResponse.redirect(target, 302);
}
