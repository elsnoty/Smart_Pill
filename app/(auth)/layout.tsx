export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex min-h-screen items-center justify-center bg-gradient-to-tr from-secondary via-background to-secondary py-10 md:h-screen md:justify-between md:p-8 lg:p-12">
      {children}
    </section>
  );
}
