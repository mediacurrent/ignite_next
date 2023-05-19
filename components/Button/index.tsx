import React from "react";
import "bootstrap/dist/css/bootstrap.css";

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  mode?: string;
  /**
  /**
   * How large should the button be?
   */
  size?: "lg" | "sm";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  mode = "primary",
  size = "lg",
  label,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={["btn", `btn-${size}`, `btn-${mode}`].join(" ")}
      {...props}
    >
      {label}
    </button>
  );
};
