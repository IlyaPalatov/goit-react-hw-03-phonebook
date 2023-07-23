import React, { Component } from 'react';
import { nanoid } from 'nanoid';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      number: '',
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    const { contacts } = this.props;
    const { name, number } = this.state;

    const existingContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (existingContact) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.props.addContact(newContact);

    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className="contact-form">
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={e => this.setState({ name: e.target.value })}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            className="contact-form__input"
            style={{ marginTop: '10px' }}
          />
        </label>

        <label>
          Number:
          <input
            type="tel"
            name="number"
            value={number}
            onChange={e => this.setState({ number: e.target.value })}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            className="contact-form__input"
            style={{ marginTop: '10px' }}
          />
        </label>

        <button type="submit" className="contact-form__button">
          Add Contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
