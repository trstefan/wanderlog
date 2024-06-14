"use client";

import {
  Form,
  FormControl,
  FormField,
  FormLabel,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { CreatePlaceValues, createPlaceSchema } from "@/lib/validation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import Select from "@/components/ui/select";
import { temperatureTypes, locationTypes } from "@/lib/place-types";
import LoadingButton from "@/components/LoadingButton";
import { createPlacePosting } from "./actions";
export default function NewPlaceForm() {
  const form = useForm<CreatePlaceValues>({
    resolver: zodResolver(createPlaceSchema),
  });

  const {
    handleSubmit,
    watch,
    trigger,
    control,
    setValue,
    setFocus,
    formState: { isSubmitting },
  } = form;

  async function onSubmit(values: CreatePlaceValues) {
    const formData = new FormData();

    Object.entries(values).forEach(([key, value]) => {
      if (value) {
        formData.append(key, value);
      }
    });

    try {
      await createPlacePosting(formData);
    } catch (error) {
      alert("Something went wrong");
    }
  }

  return (
    <main className="max-w-3xl m-auto my-10 space-y-10">
      <div>
        <h1 className="font-bold">Add a new place</h1>
      </div>
      <div className="space-y-6 rounded-lg border p-4">
        <div>
          <h2 className="font-semibold"> Place details</h2>
          <p className="text-muted-forebround"> Provide place details</p>
        </div>
        <Form {...form}>
          <form
            className="space-y-4"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
          >
            <FormField
              control={control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Place name</FormLabel>
                  <FormControl>
                    <Input placeholder="Add location name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="temperatureType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Temperature type</FormLabel>
                  <FormControl>
                    <Select {...field} defaultValue="">
                      <option value="" hidden>
                        Select an option
                      </option>
                      {temperatureTypes.map((temperatureType) => (
                        <option key={temperatureType} value={temperatureType}>
                          {temperatureType}
                        </option>
                      ))}
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="locationType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location type</FormLabel>
                  <FormControl>
                    <Select {...field} defaultValue="">
                      <option value="" hidden>
                        Select an option
                      </option>
                      {locationTypes.map((locationType) => (
                        <option key={locationType} value={locationType}>
                          {locationType}
                        </option>
                      ))}
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <LoadingButton type="submit" loading={isSubmitting}>
              Submit
            </LoadingButton>
          </form>
        </Form>
      </div>
    </main>
  );
}
