import { Typography, TypographyProps } from "@mui/material";

export const FormSubtitle: React.FC<TypographyProps> = ({children}) => {
  return (
    <Typography
      variant="body2"
      fontWeight={500}
      sx={{
        borderBottom: "0.5px solid",
        borderColor: "primary.main",
        pb: 1,
        mb: 3,
      }}
      component="div"
    >
      {children}
    </Typography>
  );
};