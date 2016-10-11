import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import ChatMessage from '../../../src/app/components/ChatPanelComponents/ChatMessage';
import ChatPanelBody from '../../../src/app/components/ChatPanelComponents/ChatPanelBody';

describe('ChatPanelBody', () => {
  let timestamp;
  let currentUser;
  let messages;
  let component;
  beforeEach(() => {
    timestamp = Date.now();
    currentUser = { name: 'Test' };
    messages = [
      { id: timestamp - 1, author: 'test', threadId: 1, text: 'Test', createdAt: timestamp - 1 },
      { id: timestamp - 2, author: 'test', threadId: 1, text: 'Test', createdAt: timestamp - 2 },
      { id: timestamp - 3, author: 'test', threadId: 1, text: 'Test', createdAt: timestamp - 3 }
    ];
    component = mount(<ChatPanelBody messages={messages} currentUser={currentUser} />);
  });

  it('should have props defined', () => {
    expect(component.props().currentUser).to.exist;
    expect(component.props().messages).to.exist;
  });

  it('should render whole component', () => {
    const component = shallow(<ChatPanelBody messages={messages} currentUser={currentUser} />);
    expect(component.first().hasClass('chat-body')).to.be.true;
  });

  it('should render the list of chat messages', () => {
    expect(component.childAt(0).find(ChatMessage)).to.have.length(3);
  });

  it('should call scrollToBottom on componentDidMount lifecycle method', () => {
    expect(component.instance().chatBodyScroll.scrollTop).to.equal(
      component.instance().chatBodyScroll.scrollHeight);
  });

  it('should call scrollToBottom on props update (ComponentDidUpdate) lifecycle method', () => {
    expect(component.setProps({
      messages: messages.splice(0, 1),
      currentUser
    }).instance().chatBodyScroll.scrollTop).to.equal(
      component.instance().chatBodyScroll.scrollHeight);
  });
});
