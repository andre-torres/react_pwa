import Typography from '@mui/material/Typography';

import Meta from '@/components/Meta';
import { FullSizeCenteredFlexBox } from '@/components/styled';

function Welcome() {
  return (
    <>
      <Meta title="page 1" />
      <FullSizeCenteredFlexBox>
        <Typography variant="h3">Bem vindo a Maria app!</Typography>
      </FullSizeCenteredFlexBox>
    </>
  );
}

export default Welcome;
