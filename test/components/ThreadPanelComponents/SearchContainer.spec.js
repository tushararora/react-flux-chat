import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import SearchContainer from '../../../src/app/components/ThreadPanelComponents/SearchContainer';

describe('SearchContainer', () => {
  let onSearchInputSpy;
  let filterThread;
  let component;
  beforeEach(() => {
    filterThread = 'u';
    onSearchInputSpy = sinon.spy();
    component = mount(
      <SearchContainer
        onSearchInput={onSearchInputSpy}
        filterThread={filterThread}
      />);
  });

  it('should have props defined', () => {
    expect(component.props().onSearchInput).to.exist;
    expect(component.props().filterThread).to.exist;
  });

  it('should render whole component', () => {
    const component = shallow(<SearchContainer
      onSearchInput={onSearchInputSpy}
      filterThread={filterThread}
    />);
    expect(component.first().hasClass('search-box')).to.be.true;
  });

  it('should render search container', () => {
    const wrapper = shallow(
      <SearchContainer
        onSearchInput={onSearchInputSpy}
        filterThread={filterThread}
      />);
    expect(wrapper.hasClass('search-box')).to.equal(true);
  });

  it('should call onTextChange on input change', () => {
    component.find('input').simulate('change', { event: { target: filterThread } });
    expect(onSearchInputSpy.calledOnce).to.be.true;
  });
});
