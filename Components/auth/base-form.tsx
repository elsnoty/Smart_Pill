import { Logo } from "../ui";

interface BaseForm {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

export function BaseForm({ title, subtitle, children }: BaseForm) {
  return (
    <div className="h-full w-[300px] md:h-[calc(100vh-2rem)] md:w-full md:pr-8 lg:h-[calc(100vh-3rem)] lg:w-[45%] lg:pr-12">
      <Logo className="mb-5 max-md:ml-14" />
      <div className="mb-4">
        <h1 className="text-3xl font-semibold md:text-4xl xl:text-5xl">
          {title}
        </h1>
        <span className="text-sm text-muted-foreground">{subtitle}</span>
      </div>
      {children}
    </div>
  );
}
