import "react";
import { Box, Typography, IconButton, Container } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";


const Footer = () => {
  return (
    <Box sx={{ backgroundColor:"#28a745" , color: "white", padding: "20px 0" }}>
      <Container maxWidth="md">
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          {/* WhatsApp */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              href="https://wa.me/543413491868"
              target="_blank"
              sx={{ color: "white" }}
            >
              <WhatsAppIcon />
            </IconButton>
            <Typography variant="body1">+54 341 349 1868</Typography>
          </Box>

          {/* Instagram */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              href="https://www.instagram.com/amigurumisbyconi/"
              target="_blank"
              sx={{ color: "white", marginRight: "8px" }}
            >
              <InstagramIcon />
            </IconButton>
            <Typography variant="body1">@amigurumisbyconi</Typography>
          </Box>
        </Box>

        {/* Derechos reservados */}
        <Box sx={{ marginTop: "20px", textAlign: "center" }}>
          <Typography variant="body2" color="white">
            &copy; 2025 Derechos reservados Amigurumis by Coni
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
