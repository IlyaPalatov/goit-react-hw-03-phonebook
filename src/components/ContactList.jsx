import React, { Component } from 'react';

class ContactList extends Component {
  render() {
    const { contacts, filter } = this.props;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <ul className="contact-list">
        {filteredContacts.map(contact => (
          <li key={contact.id} className="contact-list__item">
            <span className="contact-list__name">{contact.name}: </span>
            <span>{contact.number}</span>
            <button
              onClick={() => this.props.deleteContact(contact.id)}
              className="contact-list__button"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default ContactList;
