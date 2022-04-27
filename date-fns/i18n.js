import { formatRelative, subDays } from "date-fns";
import { enGB, de } from "date-fns/locale";

formatRelative(subDays(new Date(), 3), new Date());

formatRelative(subDays(new Date(), 3), new Date(), { locale: enGB });

formatRelative(subDays(new Date(), 3), new Date(), { locale: de });
