import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

/**
 * Landing page for this SPA
 */
export default function HomePage() {
  return (
    <Container
    sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        pt: { xs: 7, sm: 10 },
        pb: { xs: 8, sm: 12 },
    }}
    >
        <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
            <Box
                component="img"
                sx={{
                    height: "65%",
                    width: "65%"
                }}
                alt="koala"
                src="https://i.imgur.com/Bfc77Z1.png"
                alignSelf="center"
                pb={2}
            />
            <Typography
            variant="h1"
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignSelf: 'center',
                textAlign: 'center',
                fontSize: 'clamp(3.5rem, 10vw, 4rem)',
            }}
            >
            Food
            <Typography
                component="span"
                variant="h1"
                sx={{
                fontSize: 'clamp(3rem, 10vw, 4rem)',
                color: (theme) =>
                    theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
                }}
            >
                Koala
            </Typography>
            </Typography>
            <Typography
            textAlign="center"
            color="text.secondary"
            sx={{ alignSelf: 'center', width: { sm: '100%', md: '80%' } }}
            >
            Delivering happy meals to happy customers. Better than foodpanda.
            </Typography>
        </Stack>
    </Container>
  );
}