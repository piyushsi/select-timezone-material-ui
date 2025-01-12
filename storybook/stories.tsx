import { Story } from '@storybook/react';
import React from 'react';
import SelectTimezoneMaterialUi from '../src/SelectTimezoneMaterialUi';
import ATDynamicUpdateValuesControlledComponent from './ATDynamicUpdateValuesControlledComponent';

export default {
  title: 'SelectTimezoneMaterialUi',
};

const style: React.CSSProperties = {
  height: 20,
};

const showSelectedValue = (id: string) => (timezoneName: string, timezoneOffset: number) =>
  (document.getElementById(id).textContent = `${timezoneName} (${timezoneOffset})`);

export const OptionsDoesNotContainTimezoneOffset: Story = () => (
  <div>
    <SelectTimezoneMaterialUi onChange={showSelectedValue('stzmui1')} />
    <div style={style} />
    Selected timezone: <span id="stzmui1" />
  </div>
);
OptionsDoesNotContainTimezoneOffset.storyName = 'options does not contain timezone offset';

export const OptionsContainTimezoneOffset: Story = () => (
  <div>
    <SelectTimezoneMaterialUi showTimezoneOffset={true} onChange={showSelectedValue('stzmui2')} />
    <div style={style} />
    Selected timezone: <span id="stzmui2" />
  </div>
);
OptionsContainTimezoneOffset.storyName = 'options contain timezone offset';

export const Controlled: Story = () => (
  <div>
    <SelectTimezoneMaterialUi timezoneName="America/New_York" onChange={showSelectedValue('stzmuic')} />
    <div style={style} />
    Selected timezone: <span id="stzmuic" />
  </div>
);
Controlled.storyName = 'controlled';

export const UncontrolledWithDefaultTimezoneName: Story = () => (
  <div>
    <SelectTimezoneMaterialUi defaultTimezoneName="America/New_York" onChange={showSelectedValue('stzmuiuc')} />
    <div style={style} />
    Selected timezone: <span id="stzmuiuc" />
  </div>
);
UncontrolledWithDefaultTimezoneName.storyName = 'uncontrolled with default timezone name';

export const WithLabel: Story = () => (
  <div>
    <SelectTimezoneMaterialUi label="Timezone" onChange={showSelectedValue('stzmuil')} />
    <div style={style} />
    Selected timezone: <span id="stzmuil" />
  </div>
);
WithLabel.storyName = 'with label';

export const WithHelperText: Story = () => (
  <div>
    <SelectTimezoneMaterialUi
      helperText="Please select a timezone from the list"
      onChange={showSelectedValue('stzmuiht')}
    />
    <div style={style} />
    Selected timezone: <span id="stzmuiht" />
  </div>
);
WithHelperText.storyName = 'with helper text';

export const WithPreselectedTimezoneWithoutGmtInOption: Story = () => (
  <div>
    <SelectTimezoneMaterialUi timezoneName="Etc/UTC" onChange={showSelectedValue('stzmuipt1')} />
    <div style={style} />
    Selected timezone: <span id="stzmuipt1" />
  </div>
);
WithPreselectedTimezoneWithoutGmtInOption.storyName = 'with preselected timezone (without GMT in option)';

export const WithPreselectedTimezoneWithGmtInOption: Story = () => (
  <div>
    <SelectTimezoneMaterialUi
      timezoneName="Etc/UTC (GMT+00:00)"
      showTimezoneOffset={true}
      onChange={showSelectedValue('stzmuipt2')}
    />
    <div style={style} />
    Selected timezone: <span id="stzmuipt2" />
  </div>
);
WithPreselectedTimezoneWithGmtInOption.storyName = 'with preselected timezone (with GMT in option)';

export const DynamicUpdateOfTimezoneForAControlledComponent: Story = () => (
  <div>
    <ATDynamicUpdateValuesControlledComponent />
    <p>The selected timezone should change every 0.5 seconds.</p>
  </div>
);
DynamicUpdateOfTimezoneForAControlledComponent.storyName = 'dynamic update of timezone for a controlled component';
