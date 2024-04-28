import { createHash } from "node:crypto"

export * from "./mysql"

export function hashPassword(password: string): string {
    return createHash("sha256").update(password).digest("hex")
}
