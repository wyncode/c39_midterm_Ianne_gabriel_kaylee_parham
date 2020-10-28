import React from "react";

const Pokemon = (props) => {
  const handleType = (event) => {
    props.setType(event.target.value);
  };

  const handleRarity = (event) => {
    props.setRarity(event.target.value);
  };

  return (
    <>
      <div className="dropdown">
        <h3 className="drop-heading"> Type </h3>
        <div className="dropdown-content" name="type">
          <label htmlFor="">
            {" "}
            <input
              type="radio"
              name="type"
              value="Water"
              checked={props.setType.active}
              onChange={handleType}
            />{" "}
            Water{" "}
          </label>
          <label htmlFor="">
            {" "}
            <input
              type="radio"
              name="type"
              value="Fire"
              checked={props.setType.active}
              onChange={handleType}
            />{" "}
            Fire{" "}
          </label>
          <label htmlFor="">
            {" "}
            <input
              type="radio"
              name="type"
              value="Lightning"
              checked={props.setType.active}
              onChange={handleType}
            />{" "}
            Lightning{" "}
          </label>
          <label htmlFor="">
            {" "}
            <input
              type="radio"
              name="type"
              value="Grass"
              checked={props.setType.active}
              onChange={handleType}
            />{" "}
            Grass{" "}
          </label>
        </div>
      </div>
      <div className="dropdown">
        <h3 className="drop-heading"> Rarity </h3>
        <div className="dropdown-content" name="rarity">
          <label htmlFor="">
            <input
              type="radio"
              name="type"
              value="Uncommon"
              checked={props.setRarity.active}
              onChange={handleRarity}
            />
            Uncommon
          </label>
          <label htmlFor="">

            <input
              type="radio"
              name="type"
              value="Common"
              checked={props.setRarity.active}
              onChange={handleRarity}
            />
            Common
          </label>
          <label htmlFor="">

            <input
              type="radio"
              name="type"
              value="Rare"
              checked={props.setRarity.active}
              onChange={handleRarity}
            />
            Rare
          </label>
          <label htmlFor="">
            <input
              type="radio"
              name="type"
              value="Rare Holo"
              checked={props.setRarity.active}
              onChange={handleRarity}
            />
            Rare Holo
          </label>
        </div>
      </div>
      <input placeholder="Search by Name"className="search-input" onChange={props.handleChange} />
    </>
  );
};

export default Pokemon;
