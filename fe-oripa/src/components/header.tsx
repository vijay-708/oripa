import type { FunctionComponent } from "react";
import RedDiamondIcon from "../assets/images/Red-Diamond-icon.png";
import WhiteJewelIcon from "../assets/images/whiteJewel.png";
import MenuLinesIcon from "../assets/images/menu-lines.svg";

interface TopHeaderProps {
  redJewelCount: number;
  whiteJewelCount: number;
}

const TopHeader: FunctionComponent<TopHeaderProps> = ({
  redJewelCount,
  whiteJewelCount,
}) => {
  return (
    <div className="top-cont">
      <div className="left-side-jewels">
        <div className="red-jewel-cont">
          <img src={RedDiamondIcon} alt="Red Jewel" className="image" />
          <div className="text-block">{redJewelCount.toLocaleString()}</div>
        </div>
        <div className="white-jewel-cont">
          <img src={WhiteJewelIcon} loading="lazy" alt="White Jewel" className="image-2" />
          <div className="text-block">{whiteJewelCount.toLocaleString()}</div>
        </div>
      </div>
      <div className="menu-cont">
        <img src={MenuLinesIcon} loading="lazy" alt="Menu Icon" />
      </div>
    </div>
  );
};

export default TopHeader;
