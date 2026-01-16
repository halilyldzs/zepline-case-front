interface TitleProps {
  children: string;
  className?: string;
}

function Title({ children, className }: TitleProps) {
  const titleClasses = ['fw-bold', className].filter(Boolean).join(' ');

  return (
    <h1 className={titleClasses} style={{ fontSize: '2.5rem', lineHeight: '3rem' }}>
      {children}
    </h1>
  );
}

export default Title;
