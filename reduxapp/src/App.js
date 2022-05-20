import React from 'react';
import {createContact, removeContact} from './redux/ActionCreators';
import {connect} from 'react-redux';
import ContactView from './ContactView';

class App extends React.Component {
  nameRef = React.createRef();
  emailRef = React.createRef();
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    let contact = {
      name : this.nameRef.current.value,
      email : this.emailRef.current.value
    }
    this.nameRef.current.value = "";
    this.emailRef.current.value = "";
    // dispatch to Redux
    this.props.newContact(contact);
  }
  render() {
    return <div>
      <h1> Contacts Application</h1>
      <form onSubmit={this.handleSubmit}>
        Name: <input type="text" ref={this.nameRef} /> <br />
        Email : <input type="text" ref={this.emailRef} /> <br />
        <button type="submit">Add Contact</button>
      </form>
      {
        this.props.contacts.map(contact => <ContactView 
          key={contact.email} 
          contact={contact}
          deleteContact = {(email) => this.props.delContact(email)}
          />)
      }
    </div>
  }
}
// state is from redux store
// returned "contacts" is given as "props" to "App"
const mapStateToProps = (state) => {
  return {
    contacts: state.contacts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    newContact: contact => dispatch(createContact(contact)),
    delContact : email => dispatch(removeContact(email))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);