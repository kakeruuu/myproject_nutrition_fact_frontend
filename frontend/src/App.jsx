import React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Box from "@mui/material/Box"
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
// import Stack from '@mui/material/Stack';
import TextField from "@mui/material/TextField";
import Typography from '@mui/material/Typography';
import { ExpandMore } from '@mui/icons-material';
// import { ExpandLessIcon } from '@mui/icons-material';


export function App() {
  return (
    <div className="App">
      <Container component="main" maxWidth="md">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* TODO:Buttonの送信先について考える */}
          {/* ReactでHttpレスポンスをどのように扱うのかを調べる */}
          <Box component="form" noValidate sx={{ mt:1 }}>
            <TextField 
              margin="normal"
              fullWidth
              required
              id="foodName"
              label="Food Name"
              variant="standard"
            />
            <Button 
              type="submit"
              fullWidth
              variant="outlined"
              sx={{ mt: 3, mb:2 }}
            >
              送信
            </Button>
          </Box>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria_controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>詳しく</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                ここに内容を書く
              </Typography>
            </AccordionDetails>
          </Accordion>

        </Box>
      </Container>
    </div>
  );
}

