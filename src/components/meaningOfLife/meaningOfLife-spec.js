import React from 'react';
import chai, {expect} from 'chai';
import {shallow} from 'enzyme';
import chaiEnzyme from 'chai-enzyme';

chai.use(chaiEnzyme());

import MeaningOfLife from './meaningOfLife';

describe('Meaning of Life component', () => {

  it('should contain message', () => {
    const meaningOfLife = shallow(<MeaningOfLife />);

    expect(meaningOfLife).to.contain.text('The meaning of life is');
    expect(meaningOfLife).to.contain.text('42');
  });
});