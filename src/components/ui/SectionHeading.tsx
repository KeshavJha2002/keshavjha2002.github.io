interface SectionHeadingProps {
  number: string;
  title: string;
}

export function SectionHeading({ number, title }: SectionHeadingProps) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        marginBottom: "32px",
      }}
    >
      <span
        style={{
          color: "var(--accent)",
          fontSize: "14px",
          fontWeight: 600,
          whiteSpace: "nowrap",
        }}
      >
        {number}
      </span>
      <h2
        style={{
          color: "var(--text-primary)",
          fontSize: "24px",
          fontWeight: 600,
          margin: 0,
        }}
      >
        {title}
      </h2>
      <div
        style={{
          flex: 1,
          height: "0.5px",
          backgroundColor: "var(--border)",
        }}
      />
    </div>
  );
}
