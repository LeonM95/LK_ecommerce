// In your Button component
interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset"; // Add this
}

//return a link to redirect
export const Button = ({ onClick, children, className = "" }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-xl outline-none cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
};
