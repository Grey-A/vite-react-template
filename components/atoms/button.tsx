import React, { ButtonHTMLAttributes } from "react";

interface DynamicButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary";
  size?: "small" | "medium" | "large";
}

const DynamicButton: React.FC<DynamicButtonProps> = ({
  children,
  variant = "primary",
  size = "medium",
  ...props
}) => {
  const getButtonVariantClasses = () => {
    switch (variant) {
      case "secondary":
        return "bg-gray-300 text-gray-700";
      case "tertiary":
        return "bg-transparent text-blue-500 border border-blue-500";
      default:
        return "bg-blue-500 text-white";
    }
  };

  const getButtonSizeClasses = () => {
    switch (size) {
      case "small":
        return "px-2 py-1 text-sm";
      case "large":
        return "px-6 py-3 text-lg";
      default:
        return "px-4 py-2 text-base";
    }
  };

  return (
    <button
      className={`rounded ${getButtonSizeClasses()} ${getButtonVariantClasses()} hover:bg-opacity-80 focus:outline-none focus:ring focus:ring-blue-300 transition-all`}
      {...props}
    >
      {children}
    </button>
  );
};

export default DynamicButton;
