import { Pagination } from '@mui/material';

// eslint-disable-next-line react/prop-types
function GridPagination({ onClick, currentPage, count }) {
  const paginationParams = {
    size: 'large',
    color: 'primary',
    siblingCount: 0,
    sx: [
      {
        '& button, & div': { color: '#FFF' },
        '& button.Mui-selected': {
          background: '#6a6a6a',
        },
        '& button.Mui-selected:hover': {
          background: '#4a4a4a',
        },
      },
    ],
  };

  return (
    <Pagination
      onChange={onClick}
      count={count}
      page={currentPage}
      className="mb-4"
      {...paginationParams}
    />
  );
}

export default GridPagination;
