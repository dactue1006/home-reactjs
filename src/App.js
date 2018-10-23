import React, { Component } from 'react';

// page 1
import Menu from './component/page1/Menu';
import EmailForm from './component/page1/EmailForm';

// page 2
import Menu2 from './component/page2/Menu2';
import SecureLogin from './component/page2/SecureLogin';

// page 3
import Founder from './component/page3/Founder';

//page 4
import Contact from './component/page4/Contact';

// footer
import Footer from './component/footer/Footer';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      // links on page 1
      links: [
        { label: 'FAQ', link: '#faq'},
        { label: 'Tokensale', link: '#tokensale'},
        { label: 'Bounty', link: '#bounty'},
        { label: 'Corpinvestors', link: '#corpinvestors'},
        { label: 'Telegram', link: '#telegram'}
      ],
    }
  }
  render() {
    return (
      <div className='container'>
        <div className='page1'>
          <Menu links={this.state.links}/>
          <EmailForm />
        </div>
        <div className='page2'>
          <div className='title2'> This is how it works</div>
          <Menu2 />
          <SecureLogin />
        </div>
        <div className='page3'>
          <div className='title2'> Meet our core team</div>
          <Founder />
        </div>
        <div className='page4'>
          <Contact />
        </div>
        <div>
          <h1> hello</h1>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
