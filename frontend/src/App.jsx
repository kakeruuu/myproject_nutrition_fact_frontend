import React from "react";
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { ExpandMore } from '@mui/icons-material';
// import { ExpandLessIcon } from '@mui/icons-material';


function App() {
  return (
    <div className="App">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* TODO：テキストフィールドとアコーディオンの距離を開ける */}
        {/* TODO：テキストフィールドとアコーディオンをBoxにまとめる。
                  その方が細かい調整が効かせやすい？ */}
        <TextField id="standard-basic" label="Food Name" variant="standard" />

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
    </div>
  );
}

export default App;