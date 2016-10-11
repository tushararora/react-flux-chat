import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import ChatPanel from '../../src/app/components/ChatPanel';
import ChatPanelHeader from '../../src/app/components/ChatPanelComponents/ChatPanelHeader';
import ChatPanelBody from '../../src/app/components/ChatPanelComponents/ChatPanelBody';
import ChatPanelFooter from '../../src/app/components/ChatPanelComponents/ChatPanelFooter';

describe('ChatPanel', () => {
  let currentUser;
  let component;
  beforeEach(() => {
    currentUser = { name: 'Test' };
    component = mount(<ChatPanel currentUser={currentUser} />);
  });

  it('should have props defined', () => {
    expect(component.props().currentUser).to.exist;
  });

  it('should render whole component', () => {
    const component = shallow(<ChatPanel currentUser={currentUser} />);
    expect(component.first().hasClass('right-box')).to.be.true;
  });

  it('should render child components', () => {
    const thread = { id: 1, name: 'Test' };
    const component = shallow(<ChatPanel currentUser={currentUser} />);
    component.setState({ text: '', thread });
    expect(component.contains([ChatPanelHeader, ChatPanelBody, ChatPanelFooter]));
  });

  it('should call onTextChange on input change', () => {
    const text = 'Test';
    const thread = { id: 1, name: 'Test' };
    const onTextChangeSpy = sinon.spy(ChatPanel.prototype, 'onTextChange');
    const component = mount(<ChatPanel currentUser={currentUser} />);
    component.setState({ text: '', thread });
    component.find(ChatPanelFooter).find('input').simulate('change', { target: { value: text } });
    expect(onTextChangeSpy.calledOnce).to.be.true;
  });

  it('should call onKeyDown on keydown event in the input element', () => {
    const thread = { id: 1, name: 'Test' };
    const onTextChangeSpy = sinon.spy(ChatPanel.prototype, 'onKeyDown');
    const component = mount(<ChatPanel currentUser={currentUser} />);
    component.setState({ text: 'Test', thread });
    component.find(ChatPanelFooter).find('input').simulate('keydown', { keyCode: 1 });
    expect(onTextChangeSpy.calledOnce).to.be.true;
  });
});
