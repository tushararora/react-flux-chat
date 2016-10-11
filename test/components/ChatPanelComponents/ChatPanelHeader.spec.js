import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import ChatPanelHeader from '../../../src/app/components/ChatPanelComponents/ChatPanelHeader';

describe('ChatPanelHeader', () => {
  let component;
  let thread;
  beforeEach(() => {
    thread = { name: 'User', id: 1 };
    component = shallow(
      <ChatPanelHeader thread={thread} />
    );
  });

  it('should render whole component', () => {
    expect(component.first().hasClass('default-panel')).to.be.true;
  });

  it('should render thread name', () => {
    expect(component.find('.chat-thread-name').text()).to.equal(thread.name);
  });
});
