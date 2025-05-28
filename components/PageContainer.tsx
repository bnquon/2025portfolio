import clsx from "clsx";

interface PageContainerProps {
  children: React.ReactNode;
  height?: string;
  gap?: string;
  paddingTop?: string;
  paddingBottom?: string;
}

export default function PageContainer({
  children,
  height = "h-auto",
  gap = "",
  paddingTop = "",
  paddingBottom = "",
}: PageContainerProps) {
  return (
    <div className={clsx("w-screen relative flex flex-col p-12", height, gap, paddingTop, paddingBottom)}>
      {children}
    </div>
  );
}