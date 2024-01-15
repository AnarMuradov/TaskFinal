import React, { useEffect, useState } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
const FetchSection = () => {
  const [search, setSearch] = useState("");
  const [api, setApi] = useState([]);
  const [property, setProperty] = useState(null);
  useEffect(() => {
    fetch("http://localhost:3000")
      .then((res) => res.json())
      .then((data) => setApi(data));
  }, []);

  return (
    <section className="fetchSection">
      <div className="fetchSection__container">
        <div className="fetchSection__container__allData">
          {api.map((x) => {
            return (
              <div
                key={x._id}
                className="fetchSection__container__allData__card"
              >
                <div className="fetchSection__container__allData__card__title">
                  <div className="fetchSection__container__allData__card__title__name">
                    {x.title}
                  </div>

                  <div className="fetchSection__container__allData__card__title__date">
                    <span>
                      <i class="fa-regular fa-calendar-days"></i>
                      {x.createdAt.slice(0, 10)}
                    </span>
                    <span>
                      <i class="fa-regular fa-folder-open"></i>
                      {x.file}
                    </span>
                  </div>
                </div>

                <div className="fetchSection__container__allData__card__content">
                  <img src={x.img} alt="" />
                  <div className="fetchSection__container__allData__card__content__text">
                    {x.text}
                    <div className="fetchSection__container__allData__card__content__text__btn">
                      <button>Continue reading</button>
                      <Link to={`/DetailPage/${x._id}`}>
                        <button>Detail</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <button className="fetchSection__container__allData__btn">
            Older posts
          </button>
        </div>
        <div className="fetchSection__container__popularData">
          <div className="fetchSection__container__popularData__search">
            <input
              placeholder="Search..."
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
          <button
            onClick={() => setProperty({ choosenProperty: "title", asc: true })}
          >
            a-Z
          </button>
          <button
            onClick={() =>
              setProperty({ choosenProperty: "title", asc: false })
            }
          >
            Z-a
          </button>
          <button onClick={() => setProperty(null)}>Default</button>
          <div className="fetchSection__container__popularData__cardBox">
            <div className="fetchSection__container__popularData__cardBox__items">
              <span>POPULAR</span>
              <span>RECENT</span>
              <i class="fa-solid fa-comments"></i>
            </div>
            <div className="fetchSection__container__popularData__cardBox__allCards">
              {api
                .filter((x) =>
                  x.title.toLowerCase().includes(search.toLowerCase())
                )
                .sort((a, b) => {
                  if (property && property.asc == true) {
                  return  a[property.choosenProperty].toLowerCase() > b[property.choosenProperty].toLowerCase() 
                      ? 1
                      : b[property.choosenProperty].toLowerCase()  > a[property.choosenProperty].toLowerCase() 
                      ? -1
                      : 0;
                  }
                  else if(property && property.asc == false){
                   return a[property.choosenProperty].toLowerCase()  < b[property.choosenProperty].toLowerCase() 
                    ? 1
                    : b[property.choosenProperty.toLowerCase() ] < a[property.choosenProperty].toLowerCase() 
                    ? -1
                    : 0;
                  }
                  else{
                    return 0;
                  }
                })
                .map((x) => {
                  return (
                    <div
                      key={x._id}
                      className="fetchSection__container__popularData__cardBox__allCards__card"
                    >
                      <div className="fetchSection__container__popularData__cardBox__allCards__card__img">
                        <img src={x.img} alt="" />
                      </div>
                      <div className="fetchSection__container__popularData__cardBox__allCards__card__content">
                        <div className="fetchSection__container__popularData__cardBox__allCards__card__content__title">
                          {x.title}
                        </div>
                        <div className="fetchSection__container__popularData__cardBox__allCards__card__content__date">
                          {x.createdAt.slice(0, 10)}
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="fetchSection__container__popularData__comments">
            Recent Comments
          </div>
        </div>
      </div>
    </section>
  );
};

export default FetchSection;
