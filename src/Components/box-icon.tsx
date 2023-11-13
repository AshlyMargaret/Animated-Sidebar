// BoxIcon.tsx
import React from "react";

interface BoxIconProps {
  className?: string;
  size?: string;
  name: React.ReactElement; // Make the name prop required
  color?: string;
  animation?: string;
  rotate?: string;
  isSelected?: boolean;
}

const BoxIcon: React.FC<BoxIconProps> = ({
  className,
  size,
  name,
  color,
  animation,
  rotate,
  isSelected = false,
}) => {
  return (
    <div className={className}>
      {React.cloneElement(name, {
        className: `${name.props.className} ${isSelected ? "selected" : ""}`,
        style: { color: isSelected ? "white" : color },
      })}
    </div>
  );
};

export default BoxIcon;
