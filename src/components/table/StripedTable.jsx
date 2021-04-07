import React from 'react';
import PropTypes from 'prop-types';
import { Header, Segment, Table } from 'semantic-ui-react';
import RowStripedTable from './RowStripedTable';

const StripedTable = ({
    personalList,
    handleCheckbox }) => {

    const headerTable = ['', 'NAME', 'GENDER', 'MOBILE PHONE', 'NATIONALITY', ''];
    const newPersonalList = personalList.map((personalObj) => ({
        id: personalObj.id,
        checked: personalObj.checked,
        name: `${personalObj.firstName} ${personalObj.lastName}`,
        gender: personalObj.gender,
        mobilePhone: `+${personalObj.mobilePhone}`,
        nationality: personalObj.nationality,
        action: ''
    }));

    const renderTableRow = (personalObj, rowIndex) => {
        return (
            <RowStripedTable
                key={rowIndex}
                rowIndex={rowIndex}
                personalObj={personalObj}
                handleCheckbox={handleCheckbox}
            />
        );
    }

    return (
        <React.Fragment>
            {
                personalList.length ?
                    <Table striped>
                        <Table.Header>
                            <Table.Row>
                                {headerTable.map((header, index) => <Table.HeaderCell key={index}>{header}</Table.HeaderCell>)}
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {newPersonalList.map((personalObj, index) => renderTableRow(personalObj, index))}
                        </Table.Body>
                    </Table> :
                    <Segment textAlign='center' basic>
                        <Header as='h3'>
                            No data available in table.
                        </Header>
                    </Segment>
            }
        </React.Fragment>
    )
};

StripedTable.propTypes = {
    personalList: PropTypes.arrayOf(Object).isRequired,
    handleCheckbox: PropTypes.func.isRequired,
};

export default StripedTable;
