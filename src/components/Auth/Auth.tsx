import {FC} from "react";
import {Container} from "@mui/material";
import {localStorageItems} from "../../constants";
import {authService} from "../../services/auth.service";

const Auth: FC = () => {
    const userFromLocalStorage = authService.getAuthUser(localStorageItems.LOGIN_USER);

    return (
        <Container maxWidth="lg" sx={{display: 'flex', columnGap: '10px', justifyContent: 'end'}}>
            {
                userFromLocalStorage
                    ? <p>logout</p>
                    : <p>login</p>
            }
        </Container>
    );
};

export {Auth};