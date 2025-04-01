import React from "react"
import classnames from "classnames";

interface BannerProps {
    className?: string;
    variant?: string;
    [key: string]: any;
  }

const Banner: React.FC<BannerProps> = ({ children, className, variant, ...rest }) => {
  const variantClass = variant && `${variant}`;
  const allClasses = classnames(variantClass, className);
  return (
    <div className={allClasses} {...rest}>
        <div>
            <img src="./img/Check circle.png" alt="" />
        </div>
        <div>
            <p>Congratulations!<span>{children}</span></p>
        </div>
    </div>
)
}

export default Banner;