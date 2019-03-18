import Item from '../src/js/components/presentational/ItemDetails/index.js';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure,mount } from 'enzyme';

// test('Todo component renders the text of the todo', () => {
// });
configure({adapter: new Adapter()});
test('Item  components leftAlign element', () => {
const pricingData={
    "pricing": {
        "subtotal": 102.96,
        "savings": 3.85,
        "tax": 8.92,
        "total": 108.03,
        "zip": 85050
    },
    "itemDetails": {
        "itemName": "essentials of OFM",
        "quantity": 1
    }
};

const wrapper = mount(
    <Item pricingData={pricingData} />
  );

  const p = wrapper.find('.leftAlign');
  expect(p.text()).toBe(pricingData.pricing.subtotal);
});

test('Item  components nowrap span element', () => {
    const pricingData={
        "pricing": {
            "subtotal": 102.96,
            "savings": 3.85,
            "tax": 8.92,
            "total": 108.03,
            "zip": 85050
        },
        "itemDetails": {
            "itemName": "essentials of OFM",
            "quantity": 1
        }
    };

const wrapper = mount(
    <Item pricingData={pricingData} />
  );

  const p = wrapper.find('.nowrap');
  expect(p.text()).toBe("$102.96");
});
