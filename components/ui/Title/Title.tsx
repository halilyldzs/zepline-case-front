function Title({ children }: { children: string }) {
    return (
        <h1 className="text-[40px] font-bold leading-[48px]">{children}</h1>
    );
}

export default Title;