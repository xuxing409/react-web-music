import React, { memo, useState } from "react";

import { shallowEqual, useSelector } from "react-redux";
import { SongCommentsWrapper } from "./style";

const SongComments = memo(() => {
  return <SongCommentsWrapper>SongComments</SongCommentsWrapper>;
});

export default SongComments;
