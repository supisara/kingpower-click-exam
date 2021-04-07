import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { manageActions } from '../../_actions/manage.action';
import { Segment, Dimmer, Loader, Header } from 'semantic-ui-react';
import ApplicationFormComponent from './ApplicationFormComponent';
import ApplicationDetailComponent from './ApplicationDetailComponent';

const ApplicationPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(manageActions.getApplication());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const {
        applicationList,
        personalObj,
        loading,
        responseCode,
        updateMode } = useSelector((state) => state.manage);

    return (
        <React.Fragment>
            {
                loading &&
                <Dimmer active inverted>
                    <Loader inverted>Loading</Loader>
                </Dimmer>
            }
            <Segment basic>
                <Header textAlign='center' as='h1'>Application Form</Header>
                <Segment>
                    <ApplicationFormComponent
                        personalObj={personalObj}
                        updateMode={updateMode}
                        responseCode={responseCode}
                    />
                </Segment>
                <Segment>
                    {
                        applicationList &&
                        <ApplicationDetailComponent
                            applicationList={applicationList}
                        />
                    }
                </Segment>
            </Segment>
        </React.Fragment>
    )
}

export default ApplicationPage;
