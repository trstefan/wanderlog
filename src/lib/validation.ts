import { z } from "zod";
export const placeFilterSchema = z.object({
  q: z.string().optional(),
  locationType: z.string().optional(),
  temperatureType: z.string().optional(),
  isVisited: z.coerce.boolean().optional(),
});

export type placeFilterValues = z.infer<typeof placeFilterSchema>;
