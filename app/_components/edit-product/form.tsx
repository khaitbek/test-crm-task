"use client";

import { editProductById } from "@/app/product/actions";
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
import type { IEditProductById, IProduct } from "@/src/entities/product.model";
import { CategoryRepository } from "@/src/infrastructure/repositories/category.repository";
import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useEditProductByIdForm } from "./use-form";

interface Props {
  product: IProduct;
  onSuccess(): void;
  onError(error: unknown): void;
}

export function EditProductByIdForm({ product, onError, onSuccess }: Props) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { form } = useEditProductByIdForm({
    product: {
      ...product,
      category: product.category.name,
    },
  });
  const categoriesQuery = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const repository = new CategoryRepository();
      return await repository.getAll();
    },
  });

  async function handleSubmit(values: IEditProductById) {
    setIsLoading(true);
    try {
      await editProductById(product.id, values);
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
                <Select
                  onValueChange={field.onChange}
                  value={field.value as string}
                >
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
        <Button type="submit" disabled={isLoading}>
          {isLoading && <Loader2 className="animate-spin mr-2" />}
          Submit
        </Button>
      </form>
    </Form>
  );
}
