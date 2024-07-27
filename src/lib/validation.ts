import { z } from "zod";
import { locationTypes, temperatureTypes, status } from "./place-types";

const requiredString = z.string().min(1, "Required");

export const pictureSchema = z
  .custom<File | undefined>()
  .refine(
    (file) => !file || (file instanceof File && file.type.startsWith("image/")),
    "Must be an image file"
  )
  .refine((file) => {
    return !file || file.size < 1024 * 1024 * 2;
  }, "File must be less than 2MB");

export const linkSchema = z.object({
  link: z.string().max(100).url().optional().or(z.literal("")),
});

export const createPlaceSchema = z
  .object({
    name: requiredString.max(100),
    temperatureType: requiredString.refine(
      (value) => temperatureTypes.includes(value),
      "Invalid Temperature Type"
    ),
    locationType: requiredString.refine(
      (value) => locationTypes.includes(value),
      "Invalid locationType"
    ),
    status: requiredString.refine(
      (value) => status.includes(value),
      "Invalid status"
    ),
    locationPicture: pictureSchema,
    description: z.string().max(5000).optional(),
    location: z.string().max(100).optional(),
  })
  .and(linkSchema);

export type CreatePlaceValues = z.infer<typeof createPlaceSchema>;

export const placeFilterSchema = z.object({
  q: z.string().optional(),
  locationType: z.string().optional(),
  temperatureType: z.string().optional(),
  isNotVisited: z.coerce.boolean().optional(),
});

export type placeFilterValues = z.infer<typeof placeFilterSchema>;
