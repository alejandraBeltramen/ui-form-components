import { InputLabel as MUIInputLabel, InputLabelProps } from "@mui/material";
import { pxToRem } from "../../utils/utils";

const InputLabel = ({ children, sx, ...rest }: InputLabelProps) => {
  return (
    <MUIInputLabel
      sx={{
        color: "primary.main",
        position: "unset",
        transform: "translate(4px, 0px)",
        fontSize: pxToRem(12),
        ...sx,
      }}
      {...rest}
    >
      {children}
    </MUIInputLabel>
  );
};

export default InputLabel;
