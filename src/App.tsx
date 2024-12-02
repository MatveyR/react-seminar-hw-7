import React, {useState} from 'react';
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Box,
    Container,
    Stack,
    Slider,
    useTheme,
    ThemeProvider,
    createTheme,
    Typography
} from '@mui/material';
import './App.scss';

const articles = [
    {title: "Драники", content: "Для приготовления дранников натрите на терке картофель, добавьте яйцо, муку, соль и перец, перемешайте. Обжаривайте массу ложкой на разогретой сковороде с растительным маслом до золотистой корочки с обеих сторон."},
    {title: "Сырники", content: "Для сырников смешайте творог, яйцо, сахар, немного соли и муки до образования теста. Формируйте из массы небольшие лепешки и обжаривайте их на сковороде с растительным маслом до золотистой корочки с обеих сторон."},
    {title: "Вареники", content: "Для вареников замесите тесто из муки, яйца, воды, масла и соли, оставьте на 30 минут. Затем раскатайте тесто, вырежьте кружки, наполните их картофельной начинкой с обжаренным луком, защипите края и варите в кипящей воде до готовности."},
    {title: "Крокеты", content: "Для крокетов отварите картофель, сделайте из него пюре, добавьте соль, перец и немного масла. Сформируйте из пюре небольшие шарики, обваляйте их в панировочных сухарях и обжаривайте во фритюре или на сковороде до золотистой корочки."},
];

const App = () => {
    const [darkMode, setDarkMode] = useState(false);

    const lightTheme = createTheme({
        palette: {
            mode: 'light',
            primary: {main: '#1976d2'},
            background: {
                default: '#fff'
            }
        },
        typography: {fontFamily: 'Arial, sans-serif'},
    });

    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
            primary: {main: '#bb86fc'},
            background: {
                default: '#616161'
            }
        },
        typography: {fontFamily: 'Arial, sans-serif'},
    });

    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <Box sx={{
                minHeight: '100vh',
                backgroundColor: (theme) => theme.palette.background.default,
                padding: 2,
                display: 'flex',
                flexDirection: 'column'
            }}
            >
                <Typography sx={{marginBottom: 1}}>
                    Сменить тему:
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        gap: 3,
                        marginBottom: 10
                    }}
                >
                    <Typography>Светлая</Typography>
                    <Slider
                        value={darkMode ? 1 : 0}
                        onChange={(e, value) => setDarkMode(Boolean(value))}
                        valueLabelDisplay="off"
                        aria-label="Toggle Theme"
                        sx={{width: '50px'}}
                        min={0}
                        max={1}
                        step={1}
                    />
                    <Typography>Тёмная</Typography>
                </Box>
                <Stack spacing={2}>
                    {articles.map((article, index) => (
                        <StyledAccordion key={index} isOdd={index % 2 === 0}>
                            <AccordionSummary>
                                {article.title}
                            </AccordionSummary>
                            <AccordionDetails>
                                <p className="content">{article.content}</p>
                            </AccordionDetails>
                        </StyledAccordion>
                    ))}
                </Stack>
            </Box>
        </ThemeProvider>
    );
};

const StyledAccordion = ({isOdd, children}: { isOdd: boolean; children: NonNullable<React.ReactNode> }) => (
    <Accordion className={`accordion ${isOdd ? 'odd' : 'even'}`}>
        {children}
    </Accordion>
);

export default App;
