import Typography from '@mui/material/Typography';

import Meta from '@/components/Meta';
import { FullSizeCenteredFlexBox } from '@/components/styled';

function Page4() {
  return (
    <>
      <Meta title="page 4" />
      <FullSizeCenteredFlexBox flexDirection="column">
        <Typography variant="h3">Page 4</Typography>

      </FullSizeCenteredFlexBox>
    </>
  );
}

export default Page4;
