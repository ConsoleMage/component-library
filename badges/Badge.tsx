import React from "react";
import classnames from "classnames";

interface BadgeProps {
  className?: string;
  variant?: string;
  color?: string;
  [key: string]: any;
}

const Badge: React.FC<BadgeProps> = ({ children, className, variant, color, ...rest }) => {
  const variantClass = variant && `badge-${variant}`;
  const colorClass = color && `badge-${color}`;
  const allClasses = classnames(variantClass, colorClass, className);

  return (
    <button className={allClasses} {...rest}>
      {children}
    </button>
  );
};

export default Badge;