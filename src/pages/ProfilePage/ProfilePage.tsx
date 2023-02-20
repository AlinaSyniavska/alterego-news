import {FC} from "react";
import React from "react";
import {Avatar, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";

import {authService} from "../../services";
import {localStorageItems} from "../../constants";

const ProfilePage: FC = () => {
    const authUser = authService.getAuthUser(localStorageItems.LOGIN_USER);

    return (
        <React.Fragment>
            <Stack direction="row" spacing={2} sx={{marginTop: '50px'}}>
                <Avatar
                    alt={`${authUser.username}`}
                    src="https://images.pexels.com/photos/4016173/pexels-photo-4016173.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=200"
                    sx={{ width: 55, height: 55 }}
                />
                <Typography variant="h3" component="h3">
                    {authUser.username}
                </Typography>
            </Stack>
        </React.Fragment>
    );
};

export {ProfilePage};