function MaxWidthWrapper({ width, children }) {
  return (
    <div
      style={{ "--maxWidth": width }}
      className={`mx-auto max-w-[var(--maxWidth)] px-6`}
    >
      {children}
    </div>
  );
}

export default MaxWidthWrapper;
