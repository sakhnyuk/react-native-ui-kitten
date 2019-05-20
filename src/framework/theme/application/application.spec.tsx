import React from 'react';
import {
  render,
  RenderAPI,
  shallow,
} from 'react-native-testing-library';
import { ReactTestInstance } from 'react-test-renderer';
import {
  ApplicationProvider,
  ApplicationProviderProps,
} from './applicationProvider.component';
import {
  mapping,
  theme,
} from '../support/tests';

describe('@app: application wrapper check', () => {

  const Mock = (props?: ApplicationProviderProps): React.ReactElement<ApplicationProviderProps> => {
    return (
      <ApplicationProvider {...props} />
    );
  };

  it('* renders properly', () => {
    const component: RenderAPI = render(
      <Mock
        mapping={mapping}
        theme={theme}
      />,
    );

    const { output } = shallow(component.getByType(ApplicationProvider));

    expect(output).toMatchSnapshot();
  });

  it('* contains style property in state', () => {
    const component: RenderAPI = render(
      <Mock
        mapping={mapping}
        theme={theme}
      />,
    );

    const componentInstance: ReactTestInstance = component.getByType(ApplicationProvider);
    const { state } = componentInstance.instance;

    expect(state.styles).toMatchSnapshot();
  });

});