import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import ChatPanelFooter from '../../../src/app/components/ChatPanelComponents/ChatPanelFooter';

describe('ChatPanelFooter', () => {
  let text;
  let component;
  let onTextChangeSpy;
  let onKeyDownSpy;
  beforeEach(() => {
    text = '';
    onTextChangeSpy = sinon.spy();
    onKeyDownSpy = sinon.spy();
    component = mount(
      <ChatPanelFooter
        text={text}
        onTextChange={onTextChangeSpy}
        onKeyDown={onKeyDownSpy}
      />);
  });

  it('should have props defined', () => {
    expect(component.props().text).to.exist;
    expect(component.props().onTextChange).to.exist;
    expect(component.props().onKeyDown).to.exist;
  });

  it('should render whole component', () => {
    const component = shallow(
      <ChatPanelFooter
        text={text}
        onTextChange={onTextChangeSpy}
        onKeyDown={onKeyDownSpy}
      />);
    expect(component.first().hasClass('chat-panel-footer')).to.be.true;
  });


  it('should call onTextChange on input value change', () => {
    const component = mount(
      <ChatPanelFooter
        text={text}
        onTextChange={onTextChangeSpy}
        onKeyDown={onKeyDownSpy}
      />);
    component.find('input').simulate('change');
    expect(onTextChangeSpy.calledOnce).to.be.true;
  });

  it('should call onKeyDown on keydown event in the input element', () => {
    const component = mount(
      <ChatPanelFooter
        text={text}
        onTextChange={onTextChangeSpy}
        onKeyDown={onKeyDownSpy}
      />);
    component.find('input').simulate('keydown', { keyCode: 1 });
    expect(onKeyDownSpy.calledOnce).to.be.true;
  });
});
