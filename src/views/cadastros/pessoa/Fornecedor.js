import { useState } from 'react';

// material-ui
import { Typography, Button, Stack, MenuItem, Select, Grid, Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

// assets
import { IconPlus } from '@tabler/icons';
import CardSecondaryAction from 'ui-component/cards/CardSecondaryAction';
import SearchSection from 'layout/MainLayout/Header/SearchSection';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import { borderRadius } from '@mui/system';

// ==============================|| SAMPLE PAGE ||============================== //

const orders = [
    {
        value: 'novo',
        label: 'Mais Novo'
    },
    {
        value: 'velho',
        label: 'Mais Velho'
    }
];

const Fornecedor = () => {
    const [order, setOrder] = useState('novo');

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'firstName', headerName: 'First name', width: 130 },
        { field: 'lastName', headerName: 'Last name', width: 130 },
        {
          field: 'age',
          headerName: 'Age',
          type: 'number',
          width: 90,
        },
        {
          field: 'fullName',
          headerName: 'Full name',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 160,
          valueGetter: (params) =>
            `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        },
    ];
    
    const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    ];

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={2}
                >
                    <Box
                        sx={{
                            marginLeft: '-16px'
                        }}
                    >
                        <SearchSection />
                    </Box>
                    <Stack spacing={2} direction="row">
                        <Select
                            id="standard-select-category"
                            size="small"
                            variant="outlined"
                            color="secondary"
                            value={order}
                            onChange={(e) => setOrder(e.target.value)}
                        >
                            {orders.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </Select>
                        <Button
                            size="small"
                            variant="contained"
                            color="secondary"
                            sx={{ borderRadius: '25px' }}
                            startIcon={<IconPlus />}
                        >
                            <Typography variant="button">Novo Fornecedor</Typography>
                        </Button>
                    </Stack>
                </Stack>
            </Grid>
            <Grid item xs={12}>
                <MainCard
                    title={false}
                >
                    <div style={{ height: 400, width: '100%' }}>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            pageSize={5}
                            rowsPerPageOptions={[5, 10, 50]}
                        />
                    </div>
                </MainCard>
            </Grid>
        </Grid>
    );
};

export default Fornecedor;
