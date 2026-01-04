export default async function GameLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <div className={`theme-${slug} min-h-screen bg-background text-foreground transition-colors duration-700`}>
      {children}
    </div>
  );
}
