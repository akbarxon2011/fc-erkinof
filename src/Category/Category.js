import React from 'react';
import Stack from "@mui/material/Stack";
import { catagories, colors } from "../constants";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

function Category({ selectCategory, selectedcategory }) {
    return (
        <Box sx={{ overflowX: 'auto', width: '100%' }}>
            <Stack
                direction="row"
                spacing={1.5}
                sx={{
                    py: 1,
                    px: 2,
                    minWidth: 'max-content',
                }}
            >
                {catagories.map((item) => (
                    <Button
                        onClick={() => selectedcategory(item.name)}
                        key={item.name}
                        sx={{
                            backgroundColor: selectCategory === item.name ? colors.fontColor : '#f0f0f0',
                            color: selectCategory === item.name ? 'white' : colors.fontColor,
                            whiteSpace: 'nowrap',
                            borderRadius: '20px',
                            px: 2,
                            py: 1,
                            textTransform: 'capitalize',
                            flexShrink: 0,
                        }}
                    >
                        <span style={{ marginRight: '8px' }}>{item.icon}</span>
                        <span>{item.name}</span>
                    </Button>
                ))}
            </Stack>
        </Box>
    );
}

export default Category;
