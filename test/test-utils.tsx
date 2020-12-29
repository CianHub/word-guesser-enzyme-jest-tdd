import Enzyme from 'enzyme';

export const findByTestAttr = (
  wrapper: Enzyme.ShallowWrapper,
  val: string
): Enzyme.ShallowWrapper<
  Enzyme.HTMLAttributes,
  any,
  React.Component<{}, {}, any>
> => wrapper.find(`[data-test='component-${val}']`);
