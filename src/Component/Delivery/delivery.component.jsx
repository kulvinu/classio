/*import React from 'react';
import * as Mui from '@material-ui/core';
import { InputField, CheckboxField, SelectField } from '../../FormFields';
export default function AddressForm(props) {
    const {
      formField: {
        firstName,
        lastName,
        address1,
        address2,
        city,
        state,
        zipcode,
        country,
        useAddressForPaymentDetails
      }
    } = props;
    return (
      <React.Fragment>
        <Mui.Typography variant="h6" gutterBottom>
          Shipping address
        </Mui.Typography>
        <Mui.Grid container spacing={3}>
          <Mui.Grid item xs={12} sm={6}>
            <Mui.TextField name={firstName.name} label={firstName.label} fullWidth />
          </Mui.Grid>
          <Grid item xs={12} sm={6}>
            <InputField name={lastName.name} label={lastName.label} fullWidth />
          </Grid>
          <Grid item xs={12}>
            <InputField name={address1.name} label={address1.label} fullWidth />
          </Grid>
          <Grid item xs={12}>
            <InputField name={address2.name} label={address2.label} fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <SelectField
              name={city.name}
              label={city.label}
              data={cities}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <SelectField
              name={state.name}
              label={state.label}
              data={states}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField name={zipcode.name} label={zipcode.label} fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <SelectField
              name={country.name}
              label={country.label}
              data={countries}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <CheckboxField
              name={useAddressForPaymentDetails.name}
              label={useAddressForPaymentDetails.label}
            />
          </Grid>
        </Mui.Grid>
      </React.Fragment>
    );
  }*/