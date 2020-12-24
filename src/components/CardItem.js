import React from 'react';

function CardItem(props) {
  return (
    <>
      <li className='works_item'>
        <div className='works_item_link'>
          <a href={props.href_site} target="_blank">
            <div className='works_item_pic-wrap'>         
              <img
                className='works_item_img'
                alt='works Image'
                src={props.src}
              />         
            </div>  
          </a>       
          <div className='works_item_info'>
            <a href={props.href_site} target="_blank">
                <h5 className='works_item_text'>{props.text}</h5>
            </a> 
            <a href={props.href_code} target="_blank">
                <p className='works_item_code'>{props.code}</p>
            </a>
          </div>       
        </div>
      </li>
    </>
  );
}

export default CardItem;

