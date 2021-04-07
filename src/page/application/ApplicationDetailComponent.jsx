import React, { useState, useEffect } from 'react';
import { Button, Checkbox, Grid } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { manageActions } from '../../_actions/manage.action';

import CustomPagination from '../../components/pagination/CustomPagination';
import StripedTable from '../../components/table/StripedTable';

const ApplicationDetailComponent = ({ applicationList }) => {
    const dispatch = useDispatch();

    const [activePage, setActivePage] = useState(1);
    const [itemsPerPage,] = useState(5);
    const [selectedAll, setSelectedAll] = useState(false);

    // logic for displaying active item
    const indexOfLastItems = activePage * itemsPerPage;
    const indexOfFirstItems = indexOfLastItems - itemsPerPage;
    const activeItems = applicationList.slice(indexOfFirstItems, indexOfLastItems);

    // validate each of checked in checkbok to setSelectedAll
    useEffect(() => {
        if (activeItems.some((item) => item.checked === false)) {
            setSelectedAll(false);
        } else {
            setSelectedAll(true);
        }
    }, [activeItems]);

    // logic for set checkbox 
    const handleCheckbox = (e, personalId) => {
        if (personalId) {
            const personalIdArray = [personalId];
            dispatch(manageActions.setCheckbox(personalIdArray));
        } else {
            if (selectedAll) {
                // if selectedAll = true, filter activeItems to checked false
                setSelectedAll((selectedAll) => !selectedAll);
                const personalIdArray = activeItems.map((item) => item.id);
                dispatch(manageActions.setCheckbox(personalIdArray));
            } else {
                // selectedAll = false, filter checked false for change checked true 
                setSelectedAll((selectedAll) => !selectedAll);
                const personalIdArray = activeItems
                    .filter((item) => item.checked === false)
                    .map((item) => item.id);
                dispatch(manageActions.setCheckbox(personalIdArray));
            }
        }
    };

    const handlePaginationChange = (e, { activePage }) => {
        setActivePage(activePage);
    };

    return (
        <React.Fragment>
            <Grid stackable>
                {
                    applicationList.length ?
                        <Grid.Row>
                            <Grid.Column width={6}>
                                <Checkbox
                                    key="selectAll"
                                    label="Select All"
                                    checked={selectedAll}
                                    onClick={(e) => handleCheckbox(e)}
                                />
                                <span className="mg--horizontal">
                                    <Button size='mini'
                                        disabled={!applicationList.some((item) => item.checked === true)}
                                        onClick={(e) => dispatch(manageActions.deleteApplication())}
                                        color='teal'
                                    >
                                        DELETE
                                    </Button>
                                </span>
                            </Grid.Column>

                            <Grid.Column textAlign='right' width={10}>
                                <CustomPagination
                                    activePage={activePage}
                                    itemsPerPage={itemsPerPage}
                                    totalItems={applicationList.length}
                                    handlePaginationChange={handlePaginationChange}
                                />
                            </Grid.Column>
                        </Grid.Row> : null
                }

                <Grid.Row>
                    <Grid.Column>
                        <StripedTable
                            personalList={activeItems}
                            handleCheckbox={handleCheckbox}
                        />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </React.Fragment>
    )
};

export default ApplicationDetailComponent;
