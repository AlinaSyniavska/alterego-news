import {FC} from "react";
import React from "react";
import {Button, ThemeProvider} from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DeleteIcon from '@mui/icons-material/Delete';

import {IArticle} from "../../interfaces";
import {commonHelper} from "../../helpers";
import {useAppDispatch} from "../../hooks";
import {muiServices} from "../../services";
import {newsActions} from "../../redux";
import {useTranslation} from "react-i18next";

interface IProps {
    article: IArticle,
}

const SingleNews: FC<IProps> = ({article}) => {
    const {t} = useTranslation('common');
    const {id, imageUrl, publishedAt, title, summary} = article;
    const dispatch = useAppDispatch();

    return (
        <ThemeProvider theme={muiServices.createCustomTheme()}>
                <Card sx={{width: 300, display: 'flex', flexDirection: 'column', rowGap: '10px', paddingBottom: '20px'}}>
                    <CardMedia
                        component="img"
                        height="200"
                        image={imageUrl}
                        alt={title}
                        sx={{height: 200, paddingTop: '1%'}}
                    />

                    <CardContent sx={{padding: '0 20px 0', display: 'flex', flexDirection: 'column', rowGap: '20px', flex: 'auto'}}>
                        <Typography
                            component="div"
                            color={'primary.light'}
                            sx={{fontSize: 14}}
                        >
                            <CalendarMonthIcon sx={{color: '#868686'}}/> {`${commonHelper.getFormatDate(publishedAt)}`}
                        </Typography>
                        <Typography
                            component={'div'}
                            variant="h5"
                            color={'primary'}
                        >
                            {commonHelper.substringText(title, 50)}
                        </Typography>
                        <Typography
                            component={'div'}
                            variant="body1"
                            color={'primary'}
                        >
                            {commonHelper.substringText(summary, 100)}
                        </Typography>
                    </CardContent>

                    <Button
                        variant="contained"
                        startIcon={<DeleteIcon/>}
                        color="secondary"
                        sx={{alignSelf: 'center', width: '150px'}}
                        onClick={() => dispatch(newsActions.deleteOneNews({id}))}
                    >
                        {t('btnDeleteNews.title')}
                    </Button>
                </Card>
        </ThemeProvider>
    );
};



export {SingleNews};