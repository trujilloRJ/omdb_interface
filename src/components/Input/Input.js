import React, { useRef } from "react";
import "./Input.scss";

export default function Input({ createQuery }) {
  const titleRef = useRef();
  const typeRef = useRef();

  function handleClick() {
    const t = titleRef.current.value;
    const type = typeRef.current.value;
    createQuery(t, type);
  }

  return (
    <>
      <div className="input">
        <div className="input__form">
          <div className="input__form__item">
            <div className="item__order">
              <h3>Word or Phrase</h3>
            </div>
            <div className="item__input">
              <input ref={titleRef} type="text" name="name" placeholder="" />
              {/* <label htmlFor="name">Name</label> */}
            </div>
          </div>

          <div className="input__form__item">
            <div className="item__order">
              <h3>Type</h3>
            </div>
            <div className="item__select">
              <select ref={typeRef} name="dropdown">
                <option value="" defaultValue>
                  All
                </option>
                <option value="movie">Movies</option>
                <option value="series">Series</option>
              </select>
            </div>
          </div>
        </div>
        <div className="input__submit" onClick={handleClick}>
          Search
        </div>
      </div>
    </>
  );
}
