import { useMemo } from 'react';

import { getMonthesNames } from '@utils/getMonthesNames';

export const useMonths = (locale: string) => useMemo(() => getMonthesNames(locale), []);
