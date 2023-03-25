import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { Link } from "react-router-dom";

const ProductosPorTipo = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const styles = {
    popUpBtn : {
      textDecoration: "none",
      color: "white",
      fontSize: "1rem",
      fontWeight: "200",
      textTransform: "uppercase",
      marginTop: "-15px",
    },
    upperText: {
      textTransform: "uppercase",
    },
    link: {
      color: "black",
      fontSize: "1rem",
      fontWeight: "200",
      textDecoration: "underline",
    },
  };

  return (
    <div>
      <Button
        style={styles.popUpBtn}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <span style={styles.upperText}>P</span>roductos
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem>
          <Link to="/productos/cera" style={styles.link}>
            Ceras
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/productos/pomada" style={styles.link}>
            Pomadas
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/productos/gel" style={styles.link}>
            Gel
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/productos/powder" style={styles.link}>
            Powder
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/productos/oleo" style={styles.link}>
            Oleo
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default ProductosPorTipo;
