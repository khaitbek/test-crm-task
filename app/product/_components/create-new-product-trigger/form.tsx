"use client";

import { Button } from "@/components/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/form";
import { Input } from "@/components/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/select";
import type { IAddNewProduct } from "@/src/entities/product.model";
import { CategoryRepository } from "@/src/infrastructure/repositories/category.repository";
import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { addNewProduct } from "../../actions";
import { useAddNewProductForm } from "./use-form";

interface Props {
  onSuccess(): void;
  onError(error: unknown): void;
}

export function AddNewProductForm({ onError, onSuccess }: Props) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { form } = useAddNewProductForm();

  const categoriesQuery = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const repository = new CategoryRepository();
      return await repository.getAll();
    },
  });

  async function handleSubmit(values: IAddNewProduct) {
    setIsLoading(true);
    try {
      await addNewProduct(values);
      onSuccess();
    } catch (error) {
      onError(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="cover"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Thumbnail</FormLabel>
              <FormControl>
                <Input type="url" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {categoriesQuery.isSuccess &&
                      categoriesQuery.data.map((category) => (
                        <SelectItem key={category.name} value={category.name}>
                          {category.name}
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <Button className="w-full" type="submit" disabled={isLoading}>
          {isLoading && <Loader2 className="animate-spin mr-2" />}
          Submit
        </Button>
      </form>
    </Form>
  );
}
