import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { manageActions } from '../../_actions/manage.action';
import { Checkbox, Table } from 'semantic-ui-react';

const RowStripedTable = ({
    personalObj,
    rowIndex,
    handleCheckbox }) => {

    const dispatch = useDispatch();

    const renderTableCell = (key, cellIndex) => {
        switch (key) {
            case 'id':
                return null;
            case 'checked':
                return (
                    <Table.Cell key={`row${rowIndex}_cell${key}`}>
                        <Checkbox
                            key={personalObj.id}
                            checked={personalObj[key]}
                            onClick={(e) => handleCheckbox(e, personalObj.id)}
                        />
                    </Table.Cell>
                );
            case 'action':
                return (
                    <Table.Cell key={`row${rowIndex}_cell${key}`}>
                        <span
                            className="link cursor"
                            onClick={(e) => dispatch(manageActions.getPersonalDetail(personalObj.id))}
                        >
                            EDIT
                        </span>
                        <span className="link" > / </span>
                        <span
                            className="link cursor"
                            onClick={(e) => dispatch(manageActions.deleteApplication(personalObj.id))}
                        >
                            DELETE
                        </span>
                    </Table.Cell>
                );
            case 'nationality':
                return (
                    <Table.Cell key={`row${rowIndex}_cell${key}`}>
                        {personalObj[key] ? personalObj[key].toUpperCase() : 'N/A'}
                    </Table.Cell>
                );
            default:
                return (
                    <Table.Cell key={`row${rowIndex}_cell${key}`}>
                        {personalObj[key] ? personalObj[key] : 'N/A'}
                    </Table.Cell>
                );
        }
    };

    return (
        <Table.Row key={rowIndex}>
            {Object.keys(personalObj).map((key) => {
                return renderTableCell(key, personalObj);
            })}
        </Table.Row>
    )
};

RowStripedTable.propTypes = {
    personalObj: PropTypes.object.isRequired,
    rowIndex: PropTypes.number.isRequired,
    handleCheckbox: PropTypes.func.isRequired,
};

export default RowStripedTable;
