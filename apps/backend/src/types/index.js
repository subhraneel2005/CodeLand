import z from "zod";

export const SignupSchema = z.object({
    username: z.string().min(3).max(255),
    password: z.string().min(3).max(255),
});

export const LoginSchema = z.object({
    username: z.string().min(3).max(255),
    password: z.string().min(3).max(255),
});

export const UpdateMetaDataSchema = z.object({
    avatarId: z.string()
});

export const CreateSpaceSchema = z.object({
    name: z.string().min(3).max(255),
    spaceThumbnailUrl: z.string().url(),
    type: z.enum(["PUBLIC", "PRIVATE"]),
});

export const UpdateSpaceSchema = z.object({
    name: z.string().min(3).max(255),
    spaceThumbnailUrl: z.string().url(),
    type: z.enum(["PUBLIC", "PRIVATE"]),
});

export const JoinSpaceSchema = z.object({
    spaceId: z.string(),
});
