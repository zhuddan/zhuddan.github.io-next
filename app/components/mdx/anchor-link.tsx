const AnchorLink: React.FC<{ id: string, children: React.ReactNode }> = ({ id, children }) => {
  return (
    <a
      href={`#${id}`}
      aria-label="链接到该节"
      className="bg-red-500"
    >
      {children}
    </a>
  )
}

export default AnchorLink
