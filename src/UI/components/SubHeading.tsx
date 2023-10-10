import { Box, SxProps, Theme, Typography } from "@mui/material";
import FilterList from "@mui/icons-material/FilterList";
import palette from "../Modules/Utils/theme/palette";

type SubHeadingProps = {
  text?: String;
  style?: SxProps<Theme>;
  subText?: String;
};

const SubHeading = ({ text, style, subText }: SubHeadingProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        ...style,
      }}
    >
      <Typography
        sx={{
          fontSize: 28,
          fontWeight: 800,
          color: palette.palette.primary.main,
          textTransform: "uppercase",
        }}
      >
        {text}
        <span style={{ color: palette.palette.secondary.main }}>
          {" "}
          {subText}
        </span>
      </Typography>
      <FilterList />
    </Box>
  );
};

export default SubHeading;
