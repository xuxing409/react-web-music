import React, { Fragment, memo } from "react";

const SingerName = memo((props) => {
  const { singers } = props;
  return (
    <Fragment>
      {singers.map((item, index) => {
        return (
          <Fragment key={item.name + ""}>
            <a href={"/artist?id=" + item.id}>{item.name}</a>
            {singers.length !== index + 1 ? "/" : ""}
          </Fragment>
        );
      })}
    </Fragment>
  );
});

export default SingerName;
