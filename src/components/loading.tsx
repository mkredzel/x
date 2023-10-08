export const LoadingSpinner = (props: { size?: number }) => {
  return (
    <div role="status">
      <svg
        className="animate-spin rounded-full border-[3px] border-current border-t-transparent text-slate-400"
        aria-label="loading"
        width={props.size ?? 24}
        height={props.size ?? 24}
      />
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export const LoadingPage = () => {
  return (
    <div className="absolute right-0 top-0 flex h-screen w-screen items-center justify-center">
      <LoadingSpinner size={60} />
    </div>
  );
};
