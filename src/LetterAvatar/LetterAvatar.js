import React from "react";
import Avatar from "@material-ui/core/Avatar";

export default function LetterAvatars({ first, last }) {
  return (
    <Avatar style={{ width: "30px", height: "30px", fontSize: "1rem", margin: "0px", background: "#b71c1c" }}>
      {first[0] + last[0]}
    </Avatar>
  );
}
