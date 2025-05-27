import clsx from "clsx";

interface PageContainerProps {
    children: React.ReactNode
    height?: string
    gap?: string
}

export default function PageContainer({ 
    children, 
    height = "h-auto", 
    gap = "gap-12" 
}: PageContainerProps) {
    return (
    <div
      className={clsx(
        "w-screen relative flex flex-col p-12",
        height,
        gap
      )}
    >
      {children}
    </div>
  );
}