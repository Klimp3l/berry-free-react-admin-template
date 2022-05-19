import PropTypes from 'prop-types';
import { useState } from 'react';

// material-ui
import { Button, Stack, MenuItem, Select } from '@mui/material';

// assets
import { IconPlus } from '@tabler/icons';

// ==============================|| AVATAR ||============================== //

const CardSecondaryButtons = ({ orders }) => {
    const [order, setOrder] = useState('novo');

    return (
        <Stack spacing={2} direction="row">
            <Select
                id="standard-select-category"
                variant="outlined"
                color="secondary"
                style={{ borderRadius: 50 }}
                select
                value={order}
                onChange={(e) => setOrder(e.target.value)}
            >
                {orders.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </Select>
            <Button variant="contained" style={{ borderRadius: 50 }} color="secondary" startIcon={<IconPlus />}>
                <Typography variant="button">Novo Fornecedor</Typography>
            </Button>
        </Stack>
    );
};

CardSecondaryButtons.propTypes = {
    orders: PropTypes.object
};

export default CardSecondaryButtons;
