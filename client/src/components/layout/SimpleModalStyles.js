import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    wrapper: {
        marginBottom: '0.8rem',

        '& + &': {
            marginBottom: 0,
        },
    },
});

export default useStyles;
