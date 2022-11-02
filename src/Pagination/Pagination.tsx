import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function App({ total, setPage }) {
  const PageChangeHandler = (event, pageNumber) => {
    console.log(pageNumber);
    setPage(pageNumber);
  };
  return (
    <Stack spacing={2}>
      <Pagination
        count={total}
        variant="outlined"
        shape="rounded"
        onChange={(event, pageNumber) => PageChangeHandler(event, pageNumber)}
      />
    </Stack>
  );
}
