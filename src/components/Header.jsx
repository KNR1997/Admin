import { Typography, Box, useTheme, Button } from "@mui/material";
import { tokens } from "../theme";
import "./sub.css";
import { Link } from "react-router-dom";

const Header = ({ title, subtitle, button }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const handleClick = () => {
    console.log('btn clicked');
  }
  return (
    <Box mb="30px">
      <div className="header-title">
        <Typography
          variant="h2"
          color={colors.grey[100]}
          fontWeight="bold"
          sx={{ m: "0 0 5px 0" }}
        >
          {title}
        </Typography>
        {button ? 
        <Link to="/jobForm">
                <Button
          sx={{
            backgroundColor: colors.blueAccent[700],
            color: colors.grey[100],
            fontSize: "12px",
            fontWeight: "bold",
            padding: "3px 5px",
          }}
          onClick={handleClick}
        >
          {button}
        </Button>
        </Link>
 : null}
      </div>

      <Typography variant="h5" color={colors.greenAccent[400]}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
