import React from "react";

const Energy = (props) => {
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
              name="type"
              value="Special"
              checked={props.setSubType.active}
              onChange={handleSubType}
            />{" "}
            Special{" "}
          </label>
          <label htmlFor="">
            {" "}
            <input
              type="radio"
              name="type"
              value="Basic"
              checked={props.setSubType.active}
              onChange={handleSubType}
            />{" "}
            Basic{" "}
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
              name="type"
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
              name="type"
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
              name="type"
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
              name="type"
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

export default Energy;
