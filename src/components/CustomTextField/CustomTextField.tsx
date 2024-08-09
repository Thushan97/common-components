import { styled as materialStyled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { theme } from '../../theme/theme';

const CustomTextField = materialStyled(TextField)(({ error, multiline }) => ({
  '& .MuiInputBase-root': {
    height: !multiline && 40,
    borderRadius: '5px',
    padding: '8px',
    gap: '8px',
  },
  '& .MuiOutlinedInput-input': {
    padding: 0,
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      border: `1px solid ${error ? theme.palette.shades.errorBorder : theme.palette.shades.whiteBorder2} !important`,
    },
    '&:hover fieldset': {
      border: `1px solid ${error ? theme.palette.shades.errorBorder : theme.palette.shades.whiteBorder2} !important`,
    },
    '&.Mui-focused fieldset': {
      border: `1px solid ${error ? theme.palette.shades.errorBorder : theme.palette.shades.blueBorder} !important`,
    },
  },
  '& .MuiInputBase-input': {
    '&::-webkit-scrollbar': {
      width: '8px',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: theme.palette.primary.main,
      borderRadius: '4px',
    },
    '&::-webkit-scrollbar-thumb:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
    '&::-webkit-scrollbar-track': {
      backgroundColor: theme.palette.shades.disabled,
    },
  },
}));

export default CustomTextField;
