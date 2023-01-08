import { computed } from 'vue';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
dayjs.extend(utc);
dayjs.extend(timezone);

type numberMonth = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

const useDates = () => {
  const formatDate = (date: string | Date, format = 'YYYY-MM-DD') => {
    return dayjs(date).tz('America/New_York').format(format);
  };

  const currentDate = computed(() => {
    return formatDate(new Date());
  }).value;

  const startOfMonth = computed(() => {
    return dayjs(currentDate).startOf('month').format('YYYY-MM-DD');
  }).value;

  const endOfMonth = computed(() => {
    return dayjs(currentDate).endOf('month').format('YYYY-MM-DD');
  }).value;

  const getDataByMonth = (n: numberMonth = 0) => ({
    startDate: dayjs()
      .subtract(n, 'month')
      .startOf('month')
      .format('YYYY-MM-DD'),
    endDate: dayjs().subtract(n, 'month').endOf('month').format('YYYY-MM-DD'),
  });

  return {
    formatDate,
    currentDate,
    startOfMonth,
    endOfMonth,
    getDataByMonth,
  };
};

export default useDates;
