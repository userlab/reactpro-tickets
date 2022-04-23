import { FormControl, FormLabel, Textarea } from '@chakra-ui/react'

export default function TextArea({ name, label, ...props }) {
  return (
    <FormControl>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Textarea id={name} name={name} {...props} />
    </FormControl>
  )
}
