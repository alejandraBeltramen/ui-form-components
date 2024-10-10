import {
  FormHelperText,
  FormHelperTextProps,
  useFormControl,
} from "@mui/material";

type HelperTextProps = {
  helperDescription?: string | JSX.Element;
};

const reserveHeight = " ";

const HelperText: React.FC<FormHelperTextProps & HelperTextProps> = (
  props
) => {
  const formCtrl = useFormControl();
  const hasError = props.error ?? formCtrl?.error;

  return (
    <FormHelperText component="div" {...props}>
      {hasError
        ? props.children
        : props.helperDescription
        ? props.helperDescription
        : reserveHeight}
    </FormHelperText>
  );
};

export default HelperText;
