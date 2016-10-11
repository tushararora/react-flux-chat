import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import ThreadList from '../../../src/app/components/ThreadPanelComponents/ThreadList';
import Thread from '../../../src/app/components/ThreadPanelComponents/Thread';

describe('ThreadList', () => {
  let threadList;
  let component;
  let filterThread;
  let currentThreadId;

  beforeEach(() => {
    threadList = [{
      id: 1,
      name: 'User'
    }, {
      id: 2,
      name: 'Mock'
    }, {
      id: 3,
      name: 'Test'
    }];
    filterThread = 'u';
    currentThreadId = threadList[0].id;
    component = shallow(
      <ThreadList
        threadList={threadList}
        currentThreadId={currentThreadId}
        filterThread={filterThread}
      />);
  });

  it('should render whole component', () => {
    expect(component.first().hasClass('thread-list')).to.be.true;
  });

  it('should render filtered thread list (case insensitive filter)', () => {
    expect(component.find(Thread)).to.have.length(1);
  });
});
