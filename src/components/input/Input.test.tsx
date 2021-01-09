import Input from './Input';
import { findByTestAttr } from '../../../test/test-utils';
import { shallow, ShallowWrapper } from 'enzyme';

const setup = (): ShallowWrapper<
  any,
  Readonly<{}>,
  React.Component<{}, {}, any>
> => shallow(<Input />);

describe('Input', () => {
  let wrapper: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

  beforeEach(() => {
    wrapper = setup();
  });

  it('should render', () => {
    const component = findByTestAttr(wrapper, 'input');
    expect(component.length).toBe(1);
  });
});
