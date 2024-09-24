import { PINK_COLOR } from "@/utils/common";
import { Typography, TypographyProps } from "@mui/material";

const PinkTypography = (props: TypographyProps) => {
  return (
    <Typography {...props} sx={{ color: PINK_COLOR }}>
      {props.children}
    </Typography>
  );
};

export default PinkTypography;
