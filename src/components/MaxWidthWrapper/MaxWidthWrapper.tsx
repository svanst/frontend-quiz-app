import React from "react";
type MaxWidthWrapperProps = {
  width: string;
  children: React.ReactNode;
};

function MaxWidthWrapper({ width, children }: MaxWidthWrapperProps) {
  return (
    <div
      style={{ "--maxWidth": width } as React.CSSProperties}
      className={`mx-auto max-w-[var(--maxWidth)] px-6`}
    >
      {children}
    </div>
  );
}

export default MaxWidthWrapper;
