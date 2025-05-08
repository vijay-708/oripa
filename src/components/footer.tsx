import React from "react";

const navItems = [
  { img: "trade-t.png", label: "Trade", selected: true },
  { img: "card-c.png", label: "My Card" },
  { img: "gacha-g.png", label: "Gacha" },
  { img: "topup.png", label: "TopUp" },
  { img: "invite-ws.png", label: "Invite" },
];

const Footer = () => {
  return (
    <div className="footer">
      {navItems.map((item, index) => (
        <div
          className={`nav-item ${item.selected ? "select" : ""}`}
          key={index}
        >
          <img
            src={`./src/assets/images/${item.img}`}
            loading="lazy"
            alt={item.label}
            className="image-4"
          />
          <div>{item.label}</div>
        </div>
      ))}
    </div>
  );
};

export default Footer;
