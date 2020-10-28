import React from "react";
import Pokemon from "./Buttons/Pokemon";
import Trainer from "./Buttons/Trainer";
import Energy from "./Buttons/Energy";

const Conditional = (props) => {
  let divReturned;
  if (props.value === "Pokemon") {
    divReturned = (
      <Pokemon
        setType={props.setType}
        setRarity={props.setRarity}
        handleChange={props.handleChange}
      />
    );
  } else if (props.value === "Trainer") {
    divReturned = (
      <Trainer setSubType={props.setSubType} setRarity={props.setRarity} />
    );
  } else if (props.value === "Energy") {
    divReturned = (
      <Energy setSubType={props.setSubType} setRarity={props.setRarity} />
    );
  }
  return <>{divReturned}</>;
};

export default Conditional;
