import React from "react"
import classnames from "classnames";

interface BannerProps {
  className?: string;
  variant?: string;
  [key: string]: any;
}

const Banner: React.FC<BannerProps> = ({ children, variant, ...rest }) => {
  const banner = "banner";
  const allClasses = classnames(variant, banner);

  switch (variant) {
    case "success":
      return (
        <div className={allClasses}>
          <div>
            <img src="./dist/assets/img/Check circle.png" alt="" />
          </div>
          <div>
            <p>
              {rest.status}
              {rest.text && <span>{rest.text}</span>}
            </p>
          </div>
        </div>
      )
    case "warning":
      return (
        <div className={allClasses}>
          <div>
            <img src="./dist/assets/img/Exclamation.png" alt="" />
          </div>
          <div>
            <p>
              {rest.status}
              {rest.text && <span>{rest.text}</span>}
            </p>
          </div>
        </div>
      )
    case "error":
      return (
        <div className={allClasses}>
          <div>
            <img src="./img/X circle.png" alt="" />
          </div>
          <div>
            <p>
              {rest.status}
              {rest.text && <span>{rest.text}</span>}
            </p>
          </div>
        </div>
      )
    case "neutral":
      return (
        <div className={allClasses}>
          <div>
            <img src="./img/Icon.png" alt="" />
          </div>
          <div>
            <p>
              {rest.status}
              {rest.text && <span>{rest.text}</span>}
            </p>
          </div>
        </div>
      )
  }
}

export default Banner;