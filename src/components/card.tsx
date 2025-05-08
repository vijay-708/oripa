import React from "react";

interface CardProps {
  bannerImage: string;
  points: number;
  progress: { current: number; total: number };
  gachaCounts: number[];
}

interface CardListingProps {
  cards: CardProps[];
}

const CardListing: React.FC<CardListingProps> = ({ cards }) => {
  return (
    <div className="main-cont-wrp">
      <div className="main-content-cont">
        {cards.map((card, cardIndex) => (
          <div className="g-card-cont" key={cardIndex}>
            <div className="card-content-area">
              <div className="card-banner-img">
                <img src={card.bannerImage} loading="lazy" alt="Card Banner" />
              </div>
              <div className="card-pt-cont">
                <div className="points-bar">
                  <div className="points-number">
                    <div className="point-total">
                      <div className="points-text">
                        {card.points.toLocaleString()}{" "}
                        <strong className="bold-text">PT</strong>
                      </div>
                    </div>
                    <div className="out-of-no">
                      <div className="out-of-no-text">
                        {card.progress.current}{" "}
                        <strong className="bold-text-2">
                          /{card.progress.total}
                        </strong>
                      </div>
                    </div>
                  </div>
                  <div className="outer-bar">
                    <div
                      className="inner-bar"
                      style={{
                        width: `${
                          (card.progress.current / card.progress.total) * 100
                        }%`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="gacha-btns-cont">
                {card.gachaCounts.map((count, i) => (
                  <div className="gacha-btn-one" key={i}>
                    <div className="btn-content">
                      <img
                        src="./src/assets/images/Mission-Icon-2.png"
                        loading="lazy"
                        alt="Gacha Icon"
                        className="image-3"
                      />
                      <div className="btn-text">
                        {count}{" "}
                        <strong className="bold-text-3">Gacha</strong>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardListing;