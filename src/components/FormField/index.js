import React from 'react';

function FormField({ label, name, type, value, onChange }) {
    return (
        type === "textarea" ? renderTextArea({ label, name, value, onChange })
                            : renderField({ label, name, type, value, onChange })
    );
}

function renderField({ label, name, type, value, onChange }) {
    return (
        <div>
            <label>
                {label}
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                />
            </label>
        </div>
    )
}

function renderTextArea({ label, name, value, onChange }) {
    return (
        <div>
            <label>
                {label}<br />
                <textarea
                    name={name}
                    value={value}
                    onChange={onChange}
                    rows={4}
                    cols={50}
                />
            </label>
        </div>
    );
}

export default FormField;