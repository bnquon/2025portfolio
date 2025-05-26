interface PageContainerProps {
    children: React.ReactNode
    height: string
}

export default function PageContainer({ children, height }: PageContainerProps) {
    return <div style={{ height: height }} className="w-screen relative flex flex-col p-12">{children}</div>;
}