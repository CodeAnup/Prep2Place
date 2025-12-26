import React from "react"
import {
    FormControl,
    FormDescription,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Controller, Control, FieldValues, Path } from "react-hook-form"

interface FormFieldProps<T extends FieldValues> {
    control: Control<T>
    name: Path<T>
    label: string
    placeholder?: string
    type?: "text" | "email" | "password" | "file"
    description?: string
}

const FormField = <T extends FieldValues>({
    control,
    name,
    label,
    placeholder,
    type = "text",
    description,
}: FormFieldProps<T>) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <FormItem>
                    <FormLabel className="label">{label}</FormLabel>

                    <FormControl>
                        <Input
                            type={type}
                            placeholder={placeholder}
                            {...field}
                        />
                    </FormControl>

                    {description && (
                        <FormDescription>{description}</FormDescription>
                    )}

                    <FormMessage />
                </FormItem>
            )}
        />
    )
}

export default FormField
