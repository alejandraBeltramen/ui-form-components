import { FC, ReactNode } from "react";
import { useField, UseFieldConfig } from "react-final-form";
import {
  FormControl,
  InputBaseComponentProps,
  InputProps,
  FilledInputProps,
  OutlinedInputProps,
  FormControlProps,
  TextFieldProps,
  Stack,
  TextField,
} from "@mui/material";
import { FieldValidator } from "final-form";
import InputLabel from "../common/InputLabel";
import HelperText from "../common/HelperText";
import { identityParseFn } from "../../utils/utils";

const TextInput: FC<{
  fieldName?: string;
  label?: string | ReactNode;
  required?: boolean;
  disabled?: boolean;
  inputProps?: InputBaseComponentProps;
  InputProps?:
    | Partial<InputProps>
    | Partial<FilledInputProps>
    | Partial<OutlinedInputProps>
    | undefined;
  multiline?: boolean;
  rows?: number | string;
  validate?: FieldValidator<string>;
  parse?: UseFieldConfig<string, string>["parse"];
  fomrControlProps?: FormControlProps;
  textFieldProps?: TextFieldProps;
  fullWidth?: boolean;
  placeholder?: string;
}> = ({
  fieldName,
  label,
  inputProps,
  InputProps,
  multiline,
  rows,
  required,
  disabled,
  validate,
  parse = identityParseFn,
  fomrControlProps,
  textFieldProps,
  fullWidth = true,
  placeholder,
}) => {
  const { input, meta } = useField<string>(fieldName!, { parse, validate });
  const hasError = !!meta.error;

  return (
    <FormControl
      error={meta.touched && hasError}
      disabled={disabled}
      fullWidth={fullWidth}
      sx={{
        ".MuiTextField-root": {
          mx: 0,
        },
      }}
      {...fomrControlProps}
    >
      <Stack flexDirection="column" sx={{ flexGrow: 1 }}>
        <InputLabel required={required}>{label}</InputLabel>
        <TextField
          required={required}
          slotProps={{
            htmlInput: inputProps,
            input: InputProps,
          }}
          multiline={multiline}
          rows={rows}
          error={meta.touched && hasError}
          fullWidth={fullWidth}
          placeholder={placeholder}
          variant="standard"
          {...textFieldProps}
          {...input}
          disabled={disabled}
        />
        <HelperText error={meta.touched && hasError}>
          {meta.error}
        </HelperText>
      </Stack>
    </FormControl>
  );
};

export default TextInput;
