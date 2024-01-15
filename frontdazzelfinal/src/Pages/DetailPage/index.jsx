import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './style.scss'
const DetailPage = () => {
    const [api, setApi] = useState([]);
    const {id} = useParams()
    useEffect(() => {
      fetch(`http://localhost:3000/${id}`)
        .then((res) => res.json())
        .then((data) => setApi(data));
    }, [id]);
  return (
    <div className='detail'>
        <div className='detail__container'>
               <div className='detail__container__card'>
               <div className="detail__container__card__title">
                  <div className="detail__container__card__title__name">
                    {api.title}
                  </div>

                  <div className="detail__container__card__title__date">
                    <span>
                      <i class="fa-regular fa-calendar-days"></i>
                    </span>
                    <span>
                      <i class="fa-regular fa-folder-open"></i>
                      {api.file}
                    </span>
                  </div>
                </div>

                <div className="detail__container__card__content">
                  <img src={api.img} alt="" />
                  <div className="detail__container__card__content__text">
                    {api.text}
                    <div className="detail__container__card__content__text__btn">
                      <button>Continue reading</button>
        
                    </div>
                  </div>
                </div>
               </div>
        </div>
    </div>
  )
}

export default DetailPage