import { goods } from './goods.js';

/**
 * @param {string} brand
 * @returns {*}
 */
const brandFilter = (brand) => {
  const phoneBrand = goods.filter((phone) => phone.brand === brand);
  return phoneBrand;
};

/**
 * @param {string} color
 * @returns {*}
 */
const colorFilter = (color) => {
  const phoneColor = goods.filter((phone) => phone.color === color);
  return phoneColor;
};

/**
 * @param {string} model
 * @returns {*}
 */
const modelFilter = (model) => {
  const phoneModel = goods.filter((phone) => phone.model === model);
  return phoneModel;
};

/**
 * @param {number} memory
 * @returns {*}
 */
const memoryFilter = (memory) => {
  const phoneMemory = goods.filter((phone) => phone.memory === memory);
  return phoneMemory;
};

/**
 * @param {number} price
 * @returns {*}
 */
const priceFilter = (price) => {
  const phonePrice = goods.filter((phone) => phone.price === price);
  return phonePrice;
};

/**
 * @param {string} country
 * @returns {*}
 */
const countryFilter = (country) => {
  const brandCountry = goods.filter((phone) => phone.country === country);
  return brandCountry;
};

/**
 * @param {string} os
 * @returns {*}
 */
const osFilter = (os) => {
  const phoneOs = goods.filter((phone) => phone.os === os);
  return phoneOs;
};

/**
 * @param {number} from
 * @param {number} to
 */
const rangeFilter = (from, to) => {
  const rangePrice = goods.filter((phone) => phone.price >= from && phone.price <= to);
  return rangePrice;
};

const minPriceReducer = () => {
  const minPrice = goods.reduce((accumulator, phone) => {
    return Math.min(accumulator, phone.price);
  }, Infinity);
  return minPrice;
};

const maxPriceReducer = () => {
  const maxPrice = goods.reduce((accumulator, phone) => {
    return Math.max(accumulator, phone.price);
  }, 0);
  return maxPrice;
};

const toMaxSorter = () => {
  return goods.sort((a, b) => b.price - a.price);
};
const toMinSorter = () => {
  return goods.sort((a, b) => a.price - b.price);
};

export const filters = {
  brandFilter,
  countryFilter,
  priceFilter,
  osFilter,
  colorFilter,
  memoryFilter,
  modelFilter,
  rangeFilter,
};

export const reducers = {
  minPriceReducer,
  maxPriceReducer,
};

export const sorters = {
  toMaxSorter,
  toMinSorter,
};
