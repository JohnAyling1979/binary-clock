import React from 'react';
import BinaryClock from './BinaryClock';

export default {
    title: 'Binary Clock',
    component: BinaryClock,
    argTypes: {
        backgroundColor: { control: 'color' },
        color: { control: 'color' },
        size: { control: 'number'},
    }
}

const Template = args => <BinaryClock {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: 'My Binary Clock'
}