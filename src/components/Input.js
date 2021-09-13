import { TextField } from "@material-ui/core";

const Input = ({
  multiline,
  label,
  name,
  value,
  handleChange,
  error,
  helperText,
}) => {
  return (
    <TextField
      InputProps={{
        sx: {
          color: "white",
        },
      }}
      InputLabelProps={{
        sx: {
          color: "grey.A400",
        },
      }}
      sx={{
        backgroundColor: "#1E242C",
      }}
      multiline={multiline}
      name={name}
      label={label}
      color="info"
      rows={multiline && 6}
      fullWidth
      value={value}
      onChange={handleChange}
      error={error}
      helperText={helperText}
    />
  );
};

export default Input;
