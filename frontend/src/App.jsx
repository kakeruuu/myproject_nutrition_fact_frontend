import React from "react";
import { Box } from "@mui/material"
import { TextField } from "@mui/material";


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
        <TextField id="standard-basic" label="standard" variant="standard" />
      </Box>
    </div>
  );
}

export default App;