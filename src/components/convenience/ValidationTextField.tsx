import { SxProps, TextField, Theme } from "@mui/material";
import { useRef, useState } from "react";

export const ValidationTextField = ({
    fullWidth = true,
    required = true,
    value,
    setValue,
    pattern,
    maxLength,
    multiline,
    rows
}: {
    fullWidth?: boolean;
    required?: boolean;
    value: string;
    pattern?: string;
    maxLength?: number;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    multiline?: boolean;
    rows?: number;
}) => {
    const ref = useRef<HTMLInputElement>(null);
    const [isError, setIsError] = useState<boolean>(false);
    const blur = (e: any) => {
        setValue(e.target.value.trim());
        setTimeout(() => setIsError(!ref?.current?.validity.valid), 200);
    };
    return (<TextField
        InputLabelProps={{ shrink: true }}
        fullWidth={fullWidth}
        required={required}
        inputRef={ref}
        error={isError}
        value={value}
        multiline={multiline}
        rows={rows}
        helperText={isError && ref?.current?.validationMessage}
        inputProps={{ maxLength, required, pattern }}
        onChange={(e) => setValue(e.target.value)}
        onBlur={(e) => blur(e)}
        sx={!isError ? styles.textField : undefined}
    />)
};

const styles: { [key: string]: SxProps<Theme> } = {
    textField: {
        '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
                border: 1,
                borderColor: '#2e8b57',
            },
            '&.Mui-focused fieldset': {
                border: 1,
                borderColor: '#2e8b57',
                borderWidth: 2
            },
        }

    }

}