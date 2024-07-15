import { useMemo } from 'react';

import { getMonthesNames } from '@utils/helpers';

export const useMonths = (locale: string) => useMemo(() => getMonthesNames(locale), []);
