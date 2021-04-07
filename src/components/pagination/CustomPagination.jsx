import React from 'react';
import PropTypes from 'prop-types';
import { Pagination } from 'semantic-ui-react';

const CustomPagination = ({
    activePage,
    itemsPerPage,
    totalItems,
    handlePaginationChange }) => {

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <Pagination
            size='mini'
            secondary
            activePage={activePage}
            boundaryRange={0}
            onPageChange={handlePaginationChange}
            siblingRange={0}
            totalPages={pageNumbers.length}
            ellipsisItem={undefined}
            firstItem={null}
            lastItem={null}
            prevItem={{ "content": "PREV" }}
            nextItem={{ "content": "NEXT" }}
        />
    )
};

CustomPagination.propTypes = {
    activePage: PropTypes.number.isRequired,
    itemsPerPage: PropTypes.number.isRequired,
    totalItems: PropTypes.number.isRequired,
    handlePaginationChange: PropTypes.func.isRequired
};

export default CustomPagination;
