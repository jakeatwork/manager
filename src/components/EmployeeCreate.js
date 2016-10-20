import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common';

class EmployeeCreate extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="Jane"
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone Number"
            placeholder="323-555-1212"
          />
        </CardSection>

        <CardSection>

        </CardSection>

        <CardSection>
          <Button>
            Create!
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default EmployeeCreate;
