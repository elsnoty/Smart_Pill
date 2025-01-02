import { Logo } from "../ui";

interface BaseForm {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

export function BaseForm({ title, subtitle, children }: BaseForm) {
  return (
    <div className="w-[300px] md:w-full lg:w-[45%] h-full md:h-[calc(100vh-2rem)] lg:h-[calc(100vh-3rem)] md:pr-8 lg:pr-12 ">
      <Logo className="mb-5 max-md:ml-14" />
      <div className="mb-4">
        <h1 className="text-3xl md:text-4xl xl:text-5xl font-semibold">
          {title}
        </h1>
        <span className="text-muted-foreground text-sm">{subtitle}</span>
      </div>
      {children}
    </div>
  );
}
