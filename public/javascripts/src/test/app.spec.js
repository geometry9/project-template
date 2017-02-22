// Normally if it were a bigger app, each component would have it's own tests.
import React from 'react';
import { mount, shallow, render } from 'enzyme';
import { expect } from 'chai';

describe('<App />', function () {

  it('should have no stock data', function () {
    expect(wrapper.find('Inventory').props().stock).to.be.below(1);
    expect(columns).to.have.length.of(0);
  });

});
