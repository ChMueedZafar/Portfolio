function Blob({ className, style }) {
  return (
    <div
      className={`absolute rounded-full filter blur-2xl opacity-30 animate-blob mix-blend-multiply ${className}`}
      style={style}
    />
  );
}

export default Blob;
