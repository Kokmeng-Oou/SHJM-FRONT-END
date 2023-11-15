import PropTypes from 'prop-types'

type formType = {
  label?: string
  name: string
  type: string
  styleClass: string
  defaultValue: string
  placeholder: string
}

function FormInput({
  label,
  name,
  type,
  styleClass,
  defaultValue,
  placeholder,
}: formType): JSX.Element {
  return (
    <div className="form-control">
      {label ? (
        <label className="label">
          <span className="capitalize label-text">{label}</span>
        </label>
      ) : (
        ''
      )}
      <input
        type={type}
        name={name}
        id={name}
        defaultValue={defaultValue}
        className={styleClass}
        placeholder={placeholder}
      />
    </div>
  )
}

FormInput.propTypes = {
  /** The text to be displayed as the input's label */
  label: PropTypes.string,
  /** The unique identifier for this input field */
  name: PropTypes.string.isRequired,
  /** The HTML5 input type (e.g., "text", "email") */
  type: PropTypes.oneOf(['text', 'input', 'password', 'email']),
  /** A CSS class that will be applied to the input element */
  styleClass: PropTypes.string.isRequired,
  /** The initial value of the input field */
  defaultValue: PropTypes.string,
  /** A placeholder text that will appear in the input when it is empty */
  placeholder: PropTypes.string,
}

FormInput.defaultProps = {
  type: 'text',
  defaultValue: '',
}

export default FormInput
