import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import ThreadPanelHeader from '../../../src/app/components/ThreadPanelComponents/ThreadPanelHeader';

describe('ThreadPanelHeader', () => {
  let component;
  beforeEach(() => {
    component = shallow(<ThreadPanelHeader />);
  });

  it('should render whole component', () => {
    expect(component.first().hasClass('thread-panel-header')).to.be.true;
  });

  it('should render avatar of user', () => {
    expect(component.find('.avatar').childAt(0).type()).to.equal('img');
  });

  it('should render default panel', () => {
    expect(component.hasClass('default-panel')).to.equal(true);
  });
});
