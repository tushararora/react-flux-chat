import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import ChatMessage from '../../../src/app/components/ChatPanelComponents/ChatMessage';

describe('ChatMessage', () => {
  let timestamp;
  let message;
  let index;
  let component;
  let currentUser;
  beforeEach(() => {
    timestamp = Date.now();
    message = { id: timestamp, author: 'Test', threadId: 1, text: 'test', createdAt: timestamp };
    index = 1;
    currentUser = { name: 'Mock' };
    component = shallow(
      <ChatMessage message={message} index={index} currentUser={currentUser} />
    );
  });

  it('should render whole component', () => {
    expect(component.first().hasClass('row')).to.be.true;
  });

  it('should render left message', () => {
    expect(component.childAt(0).hasClass('pull-left')).to.be.true;
    expect(component.childAt(0).hasClass('left-message')).to.be.true;
    expect(component.find('.text').text()).to.equal(message.text);
    expect(component.find('.time').childAt(0).prop('date')).to.equal(message.createdAt);
  });

  it('should render right message', () => {
    const currentUser = { name: message.author };
    const component = shallow(
      <ChatMessage message={message} index={index} currentUser={currentUser} />
    );
    expect(component.childAt(0).hasClass('pull-right')).to.be.true;
    expect(component.childAt(0).hasClass('right-message')).to.be.true;
    expect(component.find('.text').text()).to.equal(message.text);
    expect(component.find('.time').childAt(0).prop('date')).to.equal(message.createdAt);
  });
});
