import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Button from '../button';

configure({ adapter: new Adapter() });


export default class RenderHelper {
  constructor(initialProps, markup) {
    this.initialProps = initialProps;
    this.markup = markup;
  }

  render(newProps) {
    const props = {
      ...this.initialProps,
      ...newProps,
    }
    this.props = props;
    return this.markup(props);
  }

  getProps() {
    return { ...this.props, ...this.initialProps };
  }
}

const initialProps = {
    type: 'primary',
    text: 'button text'
  }

const markup = (props) => {
  return shallow(
    <Button { ...props } />
  )
}
 
let wrapper;

beforeEach(() => {
  wrapper = new RenderHelper(initialProps, markup);
})

describe("Button", () => {

  it("should render", () => {
    expect(wrapper.render().find('button').length).toBe(1);
  });

  it('should have text', () => {
   expect(wrapper.render().text()).toEqual('button text');
  });

  it('should render correct button type', () => {
    let markup = wrapper.render();
    expect(markup.hasClass('button--primary')).toEqual(true);
    expect(markup.hasClass('button--secondary')).toEqual(false);

    markup = wrapper.render({ type: 'secondary' });
    expect(markup.hasClass('button--secondary')).toEqual(true);
    expect(markup.hasClass('button--primary')).toEqual(false);
  })
})

