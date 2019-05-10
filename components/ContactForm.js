var ContactForm = React.createClass({
    propTypes: {
        contact: React.PropTypes.object.isRequired
    },

    render: function() {
        return (
            React.createElement('form', {className: 'contactForm'},

            React.createElement('input', {
                htmlFor: "name",
                type: 'text',
                placeholder: 'Name',
                id: "inputYourName",
                required: "",
                value: this.props.contact.firstName,
            }),

            React.createElement('input', {
                htmlFor: "surname",
                type: 'text',
                placeholder: 'Surname', 
                id: "inputYourSurname",
                required: "",
                value: this.props.contact.lastName,
            }),

            React.createElement('input', {
                htmlFor: "email",
                type: 'email',
                placeholder: 'Email',
                id: "inputYourEmail",
                required: "",
                value: this.props.contact.email,
            }),

            React.createElement('button', {type: 'submit'}, "Add contact")
            )
        );
    },
});
