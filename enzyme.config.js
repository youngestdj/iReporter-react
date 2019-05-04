import '@babel/polyfill';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


Enzyme.configure({ adapter: new Adapter() });

global.MutationObserver = class {
  disconnect() {}

  observe() {}

  takeRecords() { return []; }
};
// eslint-disable-next-line func-names
global.document.getSelection = function () {};
