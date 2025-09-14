type PageProps = { params: { brand: string } };

export default function Page({ params }: PageProps) {
  return <div>{params.brand}</div>;
}
