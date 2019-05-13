import React, { Component } from 'react';
import { Container, Row, Col} from 'reactstrap';

export default class Example extends React.Component {
    constructor(props) {
      super(props);
  
      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };
    }
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
    render() {
      return (
        <div>
          <Navbar color="faded" light expand="md">
              {/* Brandname */}
                 <NavbarBrand href="/">
                  Demo
              </NavbarBrand>
                 {/* Add toggler to auto-collapse */}
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
  
                {/*Pull left */}
              <Nav className="ml-auto" navbar>
                  <NavItem>
                      <NavLink href="/link/">
                          Left Nav Link
                      </NavLink>
                  </NavItem>
              </Nav>
  
              {/* Pull right */}
              <Nav className="mr-auto" navbar>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Bob
                  </DropdownToggle>
  
                  <DropdownMenu >
                    <DropdownItem>
                      Account
                    </DropdownItem>
                    <DropdownItem>
                      Settings
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      Logout
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
    }
  }