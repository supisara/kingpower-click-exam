import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';
import { Button, Form } from 'semantic-ui-react'
import { applicationFormSchema } from '../../assets/schema/ApplicationFormSchema';

import { useDispatch } from 'react-redux';
import { manageActions } from '../../_actions/manage.action';

import DatePickerDropdown from '../../components/dropdown/DatePickerDropdown';
import CitizenIdInput from '../../components/input/CitizenIdInput';
import InlineRadio from '../../components/selector/InlineRadio';
import StanddardDropdown from '../../components/dropdown/StanddardDropdown';
import InlineField from '../../components/field/InlineField';
import CountryCodePhoneInput from '../../components/input/CountryCodePhoneInput';

const ApplicationFormComponent = ({
    personalObj,
    updateMode,
    responseCode }) => {

    const defaultValues = {
        title: '',
        firstName: '',
        lastName: '',
        birthday: '',
        nationality: '',
        citizenId: '',
        gender: '',
        mobilePhone: '',
        passportNo: '',
        expectedSalary: '',
        checked: false
    };

    const dispatch = useDispatch();
    const [personalDetail, setPersonalDetail] = useState(defaultValues);
    const [errDetail, setErrDetail] = useState({
        errCitizenId: ''
    })

    const { register, handleSubmit, control, formState: { errors }, reset } = useForm({
        defaultValues: personalDetail,
        resolver: yupResolver(applicationFormSchema)
    });

    // useEffect for reset defaultValues by new props
    useEffect(() => {
        if (personalObj) {
            setPersonalDetail(personalObj);
            reset({
                ...personalObj,
                birthday: new Date(personalObj.birthday)
            });
        }
    }, [personalObj, reset]);

    // useEffect for reset defaultValues by defaultValues
    useEffect(() => {
        if (responseCode === 201 || responseCode === 200 || responseCode === 204) {
            setPersonalDetail(defaultValues);
            reset({ ...defaultValues });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [responseCode, reset]);

    const handleSetPersonalDetail = (name, value) => {
        setPersonalDetail((personalDetail) => ({
            ...personalDetail,
            [name]: value
        }));
    };

    const onSubmitForm = (data) => {
        // validate citizen id input
        if (personalDetail.citizenId.length > 0 && personalDetail.citizenId.length < 13) {
            setErrDetail((errDetail) => ({ ...errDetail, errCitizenId: 'citizenId must be 13-digits' }));
        } else {
            setErrDetail((errDetail) => ({ ...errDetail, errCitizenId: '' }));

            if (updateMode) {
                const personalObj = {
                    ...data,
                    citizenId: personalDetail.citizenId,
                    gender: personalDetail.gender
                };

                dispatch(manageActions.updateApplication(data.id, personalObj));
            } else {
                const personalObj = {
                    ...data,
                    citizenId: personalDetail.citizenId,
                    gender: personalDetail.gender,
                    id: Math.random().toString(36).substring(7)
                };

                dispatch(manageActions.createApplication(personalObj));
            }
        }
    };

    return (
        <div>
            {
                personalDetail &&
                <Form onSubmit={handleSubmit(onSubmitForm)}>
                    <Form.Group inline>
                        <Form.Field width={4} error={errors.title?.message}>
                            <label className="width--fit">Title:
                                <span className="required">*</span>
                            </label>
                            <Controller
                                control={control}
                                name="title"
                                render={({ field: { onChange, value } }) => (
                                    <StanddardDropdown
                                        onChange={onChange}
                                        value={value}
                                        errorMessage={errors.title?.message}
                                        name="title"
                                    />
                                )}
                            />
                        </Form.Field>

                        <Form.Field width={6} error={errors.firstName?.message}>
                            <InlineField
                                label="Firstname:"
                                name="firstName"
                                placeholder=''
                                register={{ ...register("firstName") }}
                                errorMessage={errors.firstName?.message}
                                required={true}
                            />
                        </Form.Field>

                        <Form.Field width={6} error={errors.lastName?.message}>
                            <InlineField
                                label="Lastname:"
                                name="lastName"
                                placeholder=''
                                register={{ ...register("lastName") }}
                                errorMessage={errors.lastName?.message}
                                required={true}
                            />
                        </Form.Field>
                    </Form.Group>

                    <Form.Group inline>
                        <Form.Field width={6} error={errors.birthday?.message}>
                            <label className="width--fit">Birthday:
                                <span className="required">*</span>
                            </label>
                            <Controller
                                control={control}
                                name="birthday"
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <DatePickerDropdown
                                        onChange={onChange}
                                        onBlur={onBlur}
                                        value={value}
                                        errorMessage={errors.birthday?.message}
                                    />
                                )}
                            />
                        </Form.Field>
                        <Form.Field width={1} />
                        <Form.Field width={9}>
                            <label className="width--fit">Nationality:</label>
                            <Controller
                                control={control}
                                name="nationality"
                                render={({ field: { onChange, value } }) => (
                                    <StanddardDropdown
                                        onChange={onChange}
                                        value={value}
                                        errorMessage={null}
                                        name="nationality"
                                    />
                                )}
                            />
                        </Form.Field>
                    </Form.Group>

                    <Form.Group inline>
                        <Form.Field className="field--inline">
                            <label className="width--fit">Citizen ID:</label>
                            <CitizenIdInput
                                name="citizenId"
                                value={personalDetail.citizenId}
                                onChange={handleSetPersonalDetail}
                                errorsMessage={errDetail.errCitizenId && errDetail.errCitizenId}
                            />
                        </Form.Field>
                    </Form.Group>

                    <Form.Group inline>
                        <label className="width--fit">Gender:</label>
                        <InlineRadio
                            name="gender"
                            value={personalDetail.gender}
                            setGender={handleSetPersonalDetail}
                        />
                    </Form.Group>

                    <Form.Group inline>
                        <Form.Field width={16} error={errors.mobilePhone?.message}>
                            <label className="width--fit">Mobile Phone:
                                <span className="required">*</span>
                            </label>
                            <Controller
                                control={control}
                                name="mobilePhone"
                                render={({ field: { onChange, value } }) => (
                                    <CountryCodePhoneInput
                                        onChange={onChange}
                                        value={value}
                                        errorsMessage={errors.mobilePhone?.message}
                                    />
                                )}
                            />
                        </Form.Field>
                    </Form.Group>

                    <Form.Group inline>
                        <Form.Field width={6}>
                            <InlineField
                                label="Passport No:"
                                name="passportNo"
                                register={{ ...register("passportNo") }}
                            />
                        </Form.Field>
                    </Form.Group>

                    <Form.Group inline>
                        <Form.Field width={8} error={errors.expectedSalary?.message}>
                            <InlineField
                                label="Expected Salary:"
                                name="expectedSalary"
                                register={{ ...register("expectedSalary") }}
                                errorMessage={errors.expectedSalary?.message}
                                required={true}
                            />
                            <span className="mg--horizontal">THB</span>
                        </Form.Field>

                        <Form.Field width={8} >
                            <Button type="submit" className="float--right" color='teal' >
                                {updateMode ? 'UPDATE' : 'SUBMIT'}
                            </Button>
                        </Form.Field>
                    </Form.Group>
                </Form>
            }
        </div >
    )
};

ApplicationFormComponent.propTypes = {
    personalObj: PropTypes.object,
    updateMode: PropTypes.bool,
    responseCode: PropTypes.number
};

export default ApplicationFormComponent;
