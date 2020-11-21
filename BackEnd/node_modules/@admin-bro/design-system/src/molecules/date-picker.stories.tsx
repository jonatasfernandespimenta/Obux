import React, { useState } from 'react'
import { withKnobs, boolean, radios } from '../../storybook/node_modules/@storybook/addon-knobs'
import { DatePicker } from '..'

export default { title: 'DesignSystem/Molecules/DatePicker', decorators: [withKnobs] }

const propertyTypes = {
  Date: 'date',
  DateTime: 'datetime',
}

export const Default: React.FC = () => {
  const [date, setDate] = useState<string>()
  const disabled = boolean('If datepicker should be disabled', false)
  const propertyType = radios('Property type', propertyTypes, propertyTypes.Date)

  return (
    <DatePicker
      onChange={setDate}
      value={date}
      disabled={disabled}
      propertyType={propertyType}
    />
  )
}
