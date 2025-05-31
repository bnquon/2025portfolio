import clsx from "clsx";

interface PageContainerProps {
  children: React.ReactNode;
  height?: string;
  gap?: string;
  paddingTop?: string;
  paddingBottom?: string;
  className?: string;
}

export default function PageContainer({
  children,
  height = "h-auto",
  gap = "",
  paddingTop = "",
  paddingBottom = "",
  className = "",
}: PageContainerProps) {
  return (
    <div className={clsx("w-screen relative flex flex-col sm:p-12 p-6", height, gap, paddingTop, paddingBottom, className)}>
      {children}
    </div>
  );
}