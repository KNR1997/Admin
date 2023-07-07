import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getJobs } from "../../store/jobState";

const Jobs = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const dispatch = useDispatch();
  const jobs = useSelector(state => state.job.jobs);

  useEffect(() => {
    dispatch(getJobs());
  }, [dispatch]);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.2 },
    {
      field: "companyName",
      headerName: "Company",
      flex: 0.3,
      cellClassName: "name-column--cell",
    },
    {
      field: "technology",
      headerName: "TechStack",
    //   type: "number",
    flex: 0.7,
      headerAlign: "left",
      align: "left",
    },
    {
      field: "designation",
      headerName: "designation",
      flex: 0.7,
    },
    {
      field: "requirement",
      headerName: "requirement",
      flex: 1,
    }
  ];

  return (
    <Box m="20px">
      <Header
        title="JOBS"
        subtitle="List of Jobs currently available"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={jobs}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Jobs;
