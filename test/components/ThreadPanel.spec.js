import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import ThreadPanel from '../../src/app/components/ThreadPanel';
import ThreadPanelHeader from '../../src/app/components/ThreadPanelComponents/ThreadPanelHeader';
import SearchContainer from '../../src/app/components/ThreadPanelComponents/SearchContainer';
import ThreadList from '../../src/app/components/ThreadPanelComponents/ThreadList';

describe('ThreadPanel', () => {
  let component;
  let handleSearchInput;
  beforeEach(() => {
    handleSearchInput = sinon.spy(ThreadPanel.prototype, 'handleSearchInput');
    component = mount(<ThreadPanel />);
  });

  afterEach(() => {
    ThreadPanel.prototype.handleSearchInput.restore();
  });

  it('should render whole component', () => {
    const component = shallow(<ThreadPanel />);
    expect(component.first().hasClass('left-box')).to.be.true;
  });

  it('should render child components', () => {
    expect(component.contains([SearchContainer, ThreadPanelHeader, ThreadList]));
  });

  it('should call handleSearchInput on search term change', () => {
    const text = 'User';
    component.find(SearchContainer).find('input').simulate('change', { target: { value: text } });
    expect(handleSearchInput.calledOnce).to.be.true;
  });
});
