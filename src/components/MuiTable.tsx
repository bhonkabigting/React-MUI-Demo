import {
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Paper
} from "@mui/material";

export const MuiTable = () => {
    return (
        <TableContainer component={Paper} sx={{ maxHeight: "300px" }}>
            <Table aria-label="simple table" stickyHeader>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>First name</TableCell>
                        <TableCell>Last name</TableCell>
                        <TableCell align="center">Email</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tableData.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                        >
                            <TableCell>{row.id}</TableCell>
                            <TableCell>{row.first_name}</TableCell>
                            <TableCell>{row.last_name}</TableCell>
                            <TableCell align="center">{row.email}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

const tableData = [
    {
        "id": 1,
        "first_name": "Galvin",
        "last_name": "Escritt",
        "email": "gescritt0@privacy.gov.au",
        "gender": "Male",
        "ip_address": "137.228.71.28"
    },
    {
        "id": 2,
        "first_name": "Arielle",
        "last_name": "Fessby",
        "email": "afessby1@smh.com.au",
        "gender": "Female",
        "ip_address": "157.204.213.208"
    },
    {
        "id": 3,
        "first_name": "Kellyann",
        "last_name": "Finneran",
        "email": "kfinneran2@youtube.com",
        "gender": "Female",
        "ip_address": "49.77.182.20"
    },
    {
        "id": 4,
        "first_name": "Kristos",
        "last_name": "Etridge",
        "email": "ketridge3@yellowbook.com",
        "gender": "Male",
        "ip_address": "17.71.130.203"
    },
    {
        "id": 5,
        "first_name": "Perri",
        "last_name": "Phillimore",
        "email": "pphillimore4@360.cn",
        "gender": "Female",
        "ip_address": "70.21.138.71"
    },
    {
        "id": 6,
        "first_name": "Carlyn",
        "last_name": "Vaun",
        "email": "cvaun5@wiley.com",
        "gender": "Female",
        "ip_address": "18.68.69.166"
    },
    {
        "id": 7,
        "first_name": "Dougy",
        "last_name": "Pimlott",
        "email": "dpimlott6@flavors.me",
        "gender": "Male",
        "ip_address": "2.45.224.18"
    },
    {
        "id": 8,
        "first_name": "Egor",
        "last_name": "Meachan",
        "email": "emeachan7@alexa.com",
        "gender": "Male",
        "ip_address": "142.251.41.186"
    },
    {
        "id": 9,
        "first_name": "Janos",
        "last_name": "Appleby",
        "email": "jappleby8@google.com.au",
        "gender": "Bigender",
        "ip_address": "28.83.133.9"
    },
    {
        "id": 10,
        "first_name": "Tillie",
        "last_name": "Lewendon",
        "email": "tlewendon9@tripod.com",
        "gender": "Female",
        "ip_address": "30.232.120.252"
    }
]