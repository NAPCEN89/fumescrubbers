import { comparisonMatrix } from '@/lib/products-data';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

export default function ProductComparison() {
  return (
    <TableContainer component={Paper} sx={{ bgcolor: 'rgba(255,255,255,0.05)', mt: 4 }}>
      <Typography variant="h6" sx={{ p: 2, color: '#00BFFF', fontWeight: 'bold' }}>
        Quick Selection Guide
      </Typography>
      <Table sx={{ minWidth: 650 }} aria-label="selection table">
        <TableHead>
          <TableRow sx={{ borderBottom: '2px solid #00BFFF' }}>
            <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Application Type</TableCell>
            <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Recommended Technology</TableCell>
            <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Key Benefit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {comparisonMatrix.map((row) => (
            <TableRow key={row.application}>
              <TableCell sx={{ color: 'rgba(255,255,255,0.8)' }}>{row.application}</TableCell>
              <TableCell sx={{ color: '#00BFFF', fontWeight: 600 }}>{row.tech}</TableCell>
              <TableCell sx={{ color: 'rgba(255,255,255,0.6)' }}>{row.feature}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}