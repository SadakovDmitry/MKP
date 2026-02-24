export const CASE_FILTER_LABELS = ['Финансы', 'Строительство', 'Сельское хозяйство', 'HoReCa', 'Разработка ПО'] as const;

export type CasesFilterLabel = (typeof CASE_FILTER_LABELS)[number];
