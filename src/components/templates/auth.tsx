import { cn } from "@/lib";

interface Props {
  className?: string;
  children: React.ReactNode;
}

const AuthFormTemplate = ({ children, className }: Props) => {
  return (
    <section
      className={cn("flex h-full items-center justify-center px-8", className)}
    >
      {children}
    </section>
  );
};

export { AuthFormTemplate };
