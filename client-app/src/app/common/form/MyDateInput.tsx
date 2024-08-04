import { useField } from 'formik';
import { Form, Label } from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import { DatePickerProps } from 'react-datepicker';

export default function MyDateInput(props: Partial<DatePickerProps>) {
    const [field, meta, helpers] = useField(props.name!);

    return (
        <Form.Field error={meta.touched && !!meta.error}>
            <DatePicker
                placeholderText='Date'
                dateFormat={'MMMM d, yyyy h:mm aa'}
                showTimeSelect
                timeCaption='time'                            
                onChange={value => helpers.setValue(value)}
                selected={(field.value && new Date(field.value)) || null}
                onBlur={() => helpers.setTouched(true)}
            />
            {meta.touched && meta.error ? (
                <Label basic color="red">{meta.error}</Label>
            ) : null}
        </Form.Field>
    );
}
