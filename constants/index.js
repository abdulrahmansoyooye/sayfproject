import moment from 'moment';

// Global utility function to format a date
export const formatMonth = (date) => {
  return moment(date).format('MMMM');
};

export const formatDay = (date) => {
  return moment(date).format('DD');
};