import React, { InputHTMLAttributes } from "react";

type InputSize = "small" | "medium" | "large";

interface DynamicInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  variant?: "default" | "outlined";
  inputSize?: InputSize;
}

const DynamicInput: React.FC<DynamicInputProps> = ({
  variant = "default",
  inputSize = "medium",
  ...props
}) => {
  const getInputVariantClasses = () => {
    switch (variant) {
      case "outlined":
        return "border border-gray-300";
      default:
        return "border-none";
    }
  };

  const getInputSizeClasses = () => {
    switch (inputSize) {
      case "small":
        return "px-2 py-1 text-sm";
      case "large":
        return "px-6 py-3 text-lg";
      default:
        return "px-4 py-2 text-base";
    }
  };

  return (
    <input
      className={`rounded ${getInputVariantClasses()} ${getInputSizeClasses()} focus:outline-none focus:ring focus:ring-blue-300 transition-all`}
      {...props}
    />
  );
};

export default DynamicInput;
