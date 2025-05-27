import clsx from "clsx";

interface PageContainerProps {
  children: React.ReactNode;
  height?: string;
  gap?: string;
  paddingTop?: string;
}

export default function PageContainer({
  children,
  height = "h-auto",
  gap = "",
  paddingTop = "",
}: PageContainerProps) {
  return (
    <div className={clsx("w-screen relative flex flex-col p-12", height, gap, paddingTop)}>
      {children}
    </div>
  );
}