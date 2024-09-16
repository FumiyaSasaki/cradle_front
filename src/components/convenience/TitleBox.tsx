import { Box, SvgIconTypeMap, SxProps, Theme, Typography } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export const TitleBox = ({ title, Icon }: {
    title: string, Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    }
}) => {
    return <Box sx={styles.titleBox}>
        <Typography sx={styles.title}>{title}</Typography>
        <Box sx={styles.icon}>
            <Icon/>
        </Box>
    </Box>;
};

const styles: { [key: string]: SxProps<Theme> } = {
    titleBox: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
        borderBottom: 'solid',
        borderWidth: '4px',
        width: 'fit-content',
        marginY: 6
    },
    title: {
        fontSize: { xs: '20px', md: '24px' },
        fontWeight: 'bold',
        paddingLeft: 2
    },
    icon: {
        paddingRight: 2,
        display: 'flex',
        alignItems: 'center',
    }
};