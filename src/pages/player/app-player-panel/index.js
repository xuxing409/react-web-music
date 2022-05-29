import React, { memo } from "react";
import PlayerPanelBody from "./c-cpn/panel-body";
import PlayerPanelHeader from "./c-cpn/panel-header";
import { AppPlayerPanelWrapper } from "./style";

const AppPlayerPanel = memo(() => {
  return (
    <AppPlayerPanelWrapper>
      <PlayerPanelHeader></PlayerPanelHeader>
      <PlayerPanelBody></PlayerPanelBody>
    </AppPlayerPanelWrapper>
  );
});

export default AppPlayerPanel;
