interface PageContainerProps {
    children: React.ReactNode
}

export default function PageContainer({ children }: PageContainerProps) {
    return <div className="w-screen h-auto flex flex-col p-12">{children}</div>;
}