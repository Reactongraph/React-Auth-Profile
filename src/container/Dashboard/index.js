import React from "react";
import { CCBox, CStack, CenterTextTypography, PadGrid } from "../../component/styled";

function Dashboard() {
  return (
    <>
      <CCBox>
        <CStack spacing={3}>
          <PadGrid padding="20px">
            <CenterTextTypography variant="h3">
              Welcome to the dashboard
            </CenterTextTypography>
          </PadGrid>
        </CStack>
      </CCBox>
    </>
  );
}

export default Dashboard;
