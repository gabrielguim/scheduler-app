import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import ScheduleList from "../components/ScheduleList/ScheduleList";

configure({ adapter: new Adapter() });

const wrapper = shallow(<ScheduleList calendars={[]} />);
wrapper.setState({ activeTab: 0 });

it("always renders a div", () => {
    expect(wrapper.find('div'));
    expect(wrapper.length).toBeGreaterThan(0);
});

describe("the rendered div", () => {
    it("contains everything else that gets rendered", () => {
        const divs = wrapper.find('div')
        const wrappingDiv = divs.first();

        expect(wrappingDiv.children()).toEqual(wrapper.children());
    });
});

it("always have props (empty calendars)", () => {
    expect(wrapper.props().calendars.length).toBe(0);
});