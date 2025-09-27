export function Button({
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`cursor-pointer p-3 text-center rounded-md text-2xl  bg-gradient-to-r from-violet-500 via-red-600 to-yellow-500 hover:bg-gradient-to-r hover:from-white hover:via-white hover:to-white hover:text-black hover:font-bold transition-colors duration-300 ${className}`}
      {...props}
    >
      <p>{props.children}</p>
    </div>
  );
}
