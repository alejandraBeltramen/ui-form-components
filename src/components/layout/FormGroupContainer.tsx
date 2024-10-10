import { Paper, PaperProps } from "@mui/material";

export const FormGroupContainer: React.FC<PaperProps> = ({ sx, children, ...rest }) => {
  return (
    <Paper
      elevation={0}
      sx={{
        border: "1px solid",
        borderColor: "grey.400",
        backgroundColor: "grey.50",
        p: 2,
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Paper>
  );
};