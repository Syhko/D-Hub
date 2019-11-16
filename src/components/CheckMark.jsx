import React from "react";
import "./CheckMark.scss";

const CheckMark = () => {
  const [done, setDone] = React.useState(false);

  React.useEffect(
    () => {
      let timer1 = setTimeout(() => setDone(true), 1500);

      // this will clear Timeout when component unmont like in willComponentUnmount
      return () => {
        clearTimeout(timer1);
      };
    },
    [] //useEffect will run only one time
    //if you pass a value to array, like this [data] than clearTimeout will run every time this value changes (useEffect re-run)
  );

  return (
    <div style={{ margin: "0px auto" }}>
      <div className={done ? "load-complete circle-loader" : "circle-loader"}>
        <div
          className="checkmark draw"
          style={{ display: done ? "block" : "false" }}
        />
      </div>
    </div>
  );
};

export default CheckMark;
