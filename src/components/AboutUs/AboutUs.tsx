import React, {FC} from "react";
import {Container, ThemeProvider} from "@mui/material";
import Typography from "@mui/material/Typography";
import {muiServices} from "../../services";

const AboutUs: FC = () => {
    return (
        <React.Fragment>
            <Container maxWidth="lg">
                <ThemeProvider theme={muiServices.createCustomTheme()}>
                    <Typography component={'div'} variant="h3" color={'primary'} sx={{margin: '50px 0'}}>
                        Web App with news
                    </Typography>
                    <Typography component={'div'} variant="body1" color={'primary'}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid consequuntur cumque
                        cupiditate delectus distinctio error, exercitationem expedita facilis id labore minima officia
                        placeat quaerat quam quibusdam quo rem, similique vitae voluptatibus. Animi aperiam cumque ea
                        fuga
                        odio officia quam rerum. Assumenda corporis culpa fugiat fugit laborum libero nesciunt quasi
                        quisquam tempore voluptas! Eaque maxime placeat quidem rerum vel. Consequatur, doloremque
                        eligendi
                        eveniet facilis ipsam, numquam odit placeat provident, quaerat quia reiciendis rerum tempore
                        tenetur
                        unde voluptatem. Accusamus alias amet asperiores aut blanditiis consequuntur debitis deserunt
                        dignissimos doloremque dolores ea error explicabo illum iste itaque libero minus modi molestias
                        nobis, non odit porro possimus praesentium quae quam quasi quibusdam quis ratione reprehenderit
                        suscipit tenetur ut veniam, voluptatibus? Alias atque dolorem exercitationem expedita iste
                        laboriosam optio quos! At ea, error eveniet ex magnam nemo ut voluptatem voluptatum. Aut
                        consectetur
                        consequuntur debitis fugiat hic libero modi nostrum officiis possimus unde? Ab ducimus fuga illo
                        nobis nostrum quia veniam? Aliquid beatae, illum iste, molestiae nostrum nulla optio perferendis
                        placeat quia quidem reiciendis soluta vel velit vitae voluptatibus. Aut doloremque dolores ea
                        explicabo fugiat fugit hic illum iure laborum maiores molestias nam nihil nobis nostrum, odio
                        officiis pariatur quaerat quis rem sequi velit voluptatum.
                    </Typography>
                </ThemeProvider>
            </Container>
        </React.Fragment>
    );
};

export {AboutUs};