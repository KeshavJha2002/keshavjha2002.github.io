interface TagProps {
  children: React.ReactNode;
}

export function Tag({ children }: TagProps) {
  return (
    <span
      style={{
        backgroundColor: "var(--accent-subtle)",
        border: "1px solid var(--accent-border)",
        color: "var(--accent)",
        fontSize: "11px",
        padding: "2px 8px",
        borderRadius: "4px",
        display: "inline-block",
      }}
    >
      {children}
    </span>
  );
}
