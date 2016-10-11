import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import Thread from '../../../src/app/components/ThreadPanelComponents/Thread';

describe('Thread', () => {
  let id;
  let name;
  let currentThreadId;
  let component;
  beforeEach(() => {
    id = 1;
    currentThreadId = id + 1;
    name = 'User';
    component = mount(<Thread id={id} currentThreadId={currentThreadId} name={name} />);
  });

  it('should have props defined', () => {
    expect(component.props().id).to.exist;
    expect(component.props().currentThreadId).to.exist;
    expect(component.props().name).to.exist;
  });


  it('should render whole component', () => {
    const component = shallow(<Thread
      id={id}
      currentThreadId={currentThreadId}
      name={name}
    />);
    expect(component.first().name()).to.equal('a');
  });

  it('should not have active class when currentThreadId does not equal id', () => {
    expect(component.hasClass('active')).to.equal(false);
  });

  it('should have active class when currentThreadId equals id', () => {
    const component = shallow(<Thread id={id} currentThreadId={id} name={name} />);
    expect(component.hasClass('active')).to.equal(true);
  });

  it('should render thread name', () => {
    expect(component.find('.thread-name').childAt(0).text()).to.equal(name);
  });

  it.skip('should call onTextChange on input change', () => {
    /* Requires mocking of Dispatcher and ActionCreators so skipping for now */

    const onClickSpy = sinon.spy(Thread.prototype, 'onClick');
    const component = mount(<Thread id={id} currentThreadId={currentThreadId} name={name} />);
    component.find('a').simulate('click', { preventDefault: () => {} });
    expect(onClickSpy.calledOnce).to.be.true;
    Thread.prototype.onClick.restore();
  });
});
