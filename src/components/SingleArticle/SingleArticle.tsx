import {FC} from "react";
import React from "react";
import {ThemeProvider} from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import {IArticle} from "../../interfaces";
import {commonHelper} from "../../helpers";
import {useAppDispatch} from "../../hooks";
import {muiServices} from "../../services";

interface IProps {
    article: IArticle,
    highlight: string | null,
}

const SingleArticle: FC<IProps> = ({article, highlight}) => {
    const {id, imageUrl, publishedAt, title, summary} = article;
    const dispatch = useAppDispatch();

    return (
        <ThemeProvider theme={muiServices.createCustomTheme()}>
                <Card sx={{width: 400, height: 530, display: 'flex', flexDirection: 'column', rowGap: '20px'}}>
                    <CardMedia
                        component="img"
                        height="217"
                        image={imageUrl}
                        alt={title}
                        sx={{height: 217, paddingTop: '1%'}}
                    />
                    <CardContent sx={{padding: '0 20px 0', display: 'flex', flexDirection: 'column', rowGap: '20px'}}>
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
                            {highlight
                                ? getHighlightedText(commonHelper.substringText(title, 70), highlight)
                                : commonHelper.substringText(title, 70)}
                        </Typography>
                        <Typography
                            component={'div'}
                            variant="body1"
                            color={'primary'}
                        >
                            {highlight
                                ? getHighlightedText(commonHelper.substringText(summary, 100), highlight)
                                : commonHelper.substringText(summary, 100)}
                        </Typography>
                    </CardContent>
                </Card>
        </ThemeProvider>
    );
};

function getHighlightedText(text: string, highlight: string, color = 'yellow') {
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return parts.map((part, index) => (
        <React.Fragment key={index}>
            {part.toLowerCase() === highlight.toLowerCase() ? (
                <b style={{backgroundColor: `${color}`}}>{part}</b>
            ) : (
                part
            )}
        </React.Fragment>
    ));
}

export {SingleArticle};