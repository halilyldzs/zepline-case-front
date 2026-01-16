interface TitleProps {
  children: string;
  className?: string;
}

function Title({ children, className }: TitleProps) {
  const titleClasses = ['fw-bold', className].filter(Boolean).join(' ');

  return (
    <h1 className={titleClasses} style={{ fontSize: '40px', lineHeight: '48px' }}>
      {children}
    </h1>
  );
}

export default Title;
