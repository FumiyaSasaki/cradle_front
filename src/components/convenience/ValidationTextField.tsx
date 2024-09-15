import { TextField } from "@mui/material";
import { useRef, useState } from "react";

export const ValidationTextField = ({
    fullWidth = true,
    required = true,
    value,
    setValue,
    pattern,
    maxLength
}: {
    fullWidth?: boolean;
    required?: boolean;
    value: string;
    pattern?: string;
    maxLength?: number;
    setValue: React.Dispatch<React.SetStateAction<string>>;
}) => {
    const ref = useRef<HTMLInputElement>(null);
    const [isError, setIsError] = useState<boolean>(false);
    const blur = (e: any) => {
        setValue(e.target.value.trim());
        setTimeout(() => setIsError(required ? !ref?.current?.validity.valid : false), 200);
    };

    return (<TextField
        InputLabelProps={{ shrink: true }}
        fullWidth={fullWidth}
        required={required}
        inputRef={ref}
        error={isError}
        value={value}
        helperText={isError && ref?.current?.validationMessage}
        inputProps={{ maxLength: 20, required: true, pattern }}
        onChange={(e) => setValue(e.target.value)}
        onBlur={(e) => blur(e)}
    />)
};