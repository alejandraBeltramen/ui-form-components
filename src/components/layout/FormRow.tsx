import { Stack, StackProps } from "@mui/material";

export const FormRow: React.FC<StackProps> = ({ children, ...rest }) => {
  return (
    <Stack
      direction="row"
      spacing={2}
      alignItems="center"
      {...rest}
    >
      {children}
    </Stack>
  );
};