export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="max-sm:min-h-screen md:h-screen py-10  md:p-8 lg:p-12 flex justify-center md:justify-between items-center bg-gradient-to-tr from-secondary via-background to-secondary">
      {children}
    </section>
  );
}
