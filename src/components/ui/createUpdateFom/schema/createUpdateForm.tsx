import { z } from "zod";

export const CreateUpdateFormSchema = z.object({
  name: z.string().min(4, "minmum 4 characters required"),
  email: z.string().min(4, "minmum 5 characters required"),
  password: z.string().min(4, "minmum 8 characters required"),
});

export type CreateUpdateType = z.infer<typeof CreateUpdateFormSchema>;
