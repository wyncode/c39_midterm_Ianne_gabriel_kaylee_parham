import React from "react";

const Trainer = (props) => {
  const handleSubType = (event) => {
    props.setSubType(event.target.value);
  };

  const handleRarity = (event) => {
    props.setRarity(event.target.value);
  };

  return (
    <>
      <div className="dropdown">
        <h3 className="drop-heading"> Subtype </h3>
        <div className="dropdown-content" name="subType">
          <label htmlFor="">
            {" "}
            <input
              type="radio"
              name="subType"
              value="Item"
              checked={props.setSubType.active}
              onChange={handleSubType}
            />{" "}
            Item{" "}
          </label>
          <label htmlFor="">
            {" "}
            <input
              type="radio"
              name="subType"
              value="Stadium"
              checked={props.setSubType.active}
              onChange={handleSubType}
            />{" "}
            Stadium{" "}
          </label>
          <label htmlFor="">
            {" "}
            <input
              type="radio"
              name="subType"
              value="Pokemon+Tool"
              checked={props.setSubType.active}
              onChange={handleSubType}
            />{" "}
            Pokemon Tool{" "}
          </label>
        </div>
      </div>
      <div className="dropdown">
        <h3 className="drop-heading"> Rarity </h3>
        <div className="dropdown-content" name="rarity">
          <label htmlFor="">
            {" "}
            <input
              type="radio"
              name="rarity"
              value="Uncommon"
              checked={props.setRarity.active}
              onChange={handleRarity}
            />{" "}
            Uncommon{" "}
          </label>
          <label htmlFor="">
            {" "}
            <input
              type="radio"
              name="rarity"
              value="Common"
              checked={props.setRarity.active}
              onChange={handleRarity}
            />{" "}
            Common{" "}
          </label>
          <label htmlFor="">
            {" "}
            <input
              type="radio"
              name="rarity"
              value="Rare"
              checked={props.setRarity.active}
              onChange={handleRarity}
            />{" "}
            Rare{" "}
          </label>
          <label htmlFor="">
            {" "}
            <input
              type="radio"
              name="rarity"
              value="Rare Holo"
              checked={props.setRarity.active}
              onChange={handleRarity}
            />{" "}
            Rare Holo{" "}
          </label>
        </div>
      </div>
    </>
  );
};

export default Trainer;
